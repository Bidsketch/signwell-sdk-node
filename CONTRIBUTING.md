# Contributing

This SDK is generated from the SignWell OpenAPI specification. Do not edit generated files directly.

Generator-owned changes should be made in `signwell-sdk-generator`, then regenerated and synced into this package.

The generator repository is the orchestrator for this package. Hand-written Node helpers live under `src/extras/` in generated output, while the root package entrypoint re-exports the public `Embedded`, `Webhook`, and error APIs for compatibility.
