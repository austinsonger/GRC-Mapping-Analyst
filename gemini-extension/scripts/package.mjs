#!/usr/bin/env node

import { cp, mkdir, readFile, rm, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const extensionRoot = resolve(__dirname, '..');
const releaseDir = join(extensionRoot, 'release');
const stagingDir = join(extensionRoot, '.release-staging');

function parseArgs(argv) {
  const out = {};
  for (const arg of argv) {
    if (!arg.startsWith('--')) continue;
    const [key, value] = arg.slice(2).split('=');
    if (key && value) out[key] = value;
  }
  return out;
}

function run(command, args, cwd) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(command, args, { cwd, stdio: 'inherit' });
    child.on('error', rejectPromise);
    child.on('exit', (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }
      rejectPromise(new Error(`${command} exited with code ${code ?? 'unknown'}`));
    });
  });
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const platform = args.platform ?? process.platform;
  const arch = args.arch ?? process.arch;

  const manifestPath = join(extensionRoot, 'gemini-extension.json');
  const manifestRaw = await readFile(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestRaw);
  const extensionName = String(args.name ?? manifest.name ?? 'extension');

  const archiveExt = platform === 'win32' ? 'zip' : 'tar.gz';
  const archiveName = `${platform}.${arch}.${extensionName}.${archiveExt}`;
  const archivePath = join(releaseDir, archiveName);

  const required = [
    'gemini-extension.json',
    'GEMINI.md',
    'commands',
    'dist',
    'package.json',
    'package-lock.json',
    'node_modules',
  ];

  const missing = [];
  for (const entry of required) {
    if (!(await exists(join(extensionRoot, entry)))) {
      missing.push(entry);
    }
  }
  if (missing.length > 0) {
    throw new Error(
      `Missing required release inputs: ${missing.join(', ')}. Run "npm ci" and "npm run build" first.`,
    );
  }

  await rm(stagingDir, { recursive: true, force: true });
  await mkdir(releaseDir, { recursive: true });
  await mkdir(stagingDir, { recursive: true });
  await rm(archivePath, { force: true });

  for (const entry of required) {
    await cp(join(extensionRoot, entry), join(stagingDir, entry), { recursive: true });
  }

  if (platform === 'win32') {
    await run('zip', ['-qr', archivePath, '.'], stagingDir);
  } else {
    await run('tar', ['-czf', archivePath, '-C', stagingDir, '.'], extensionRoot);
  }

  await rm(stagingDir, { recursive: true, force: true });
  console.log(`Created ${archivePath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
