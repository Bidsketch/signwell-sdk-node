# Changelog

## 0.2.0 — Unreleased

- Retry explicit HTTP 429 responses up to twice by default, with Retry-After, bounded backoff, and opt-out. Preserve POST bodies, download results, and final typed status errors.
- Keep future API enum strings readable without accepting malformed enum types.


### Added

- Support the current documented SMS delivery fields, conditional rules and decisions, and embedded signing/branding options.
- Expose 21 CFR Part 11 indicators in document responses and updated passcode-delivery settings.
- Add the document authentication update endpoint.

### Changed

- Refresh generated resources, request/response models, and API documentation from the current published SignWell API.
- Regenerate with OpenAPI Generator 7.26.0 while preserving existing minimum runtimes.
- Standardize the default SDK User-Agent; callers can continue to configure their own value.
- Accept absent or null FileInfo.name values in document responses.

### Dependencies

- Update compatible TypeScript, ESLint integration, Vitest, Vite, Node type definitions, and the dependency lockfile.
