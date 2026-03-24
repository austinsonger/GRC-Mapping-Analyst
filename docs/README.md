# Documentation

- [Overview](./overview.md)
- [Installation](./installation.md)
- [Scripts](./scripts.md)
- [Repository Structure](./repository-structure.md)
- [Usage](./usage.md)
- [Output Format](./output-format.md)
- [Methodology](./methodology.md)

## Mapping Consistency Quick Checks

- Treat `SHALL` vs `SHOULD` mismatches as containment (`subset_of`/`superset_of`) unless scope is otherwise identical.
- Prefer `intersects_with` over `equal` when each side adds unique mechanisms or scope qualifiers.
- Use `not_related` only after confirming there is no meaningful shared objective.
