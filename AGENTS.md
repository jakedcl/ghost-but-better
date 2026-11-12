# Ghost But Better — agent notes

## Dev framework

This repo follows Jake's dev framework: [jakedcl/dev-framework](https://github.com/jakedcl/dev-framework) (start at its `AGENTS.md`). The framework is the source of truth; if anything in this file conflicts with it, the framework wins.

The framework repo is private. Cloud agents open it with `git clone --depth 1 https://x-access-token:${DEV_FRAMEWORK_READ_TOKEN}@github.com/jakedcl/dev-framework /tmp/dev-framework` (the token is a Cursor secret; never print or commit it).

## What this repo is

- **Desktop app:** Electron (Node main process + bundled JS UI). Python **pymobiledevice3** sidecar for iPhone; bundled **ADB** and **Appium Settings** for Android. Simulates phone GPS over USB or same-network Wi-Fi.
- **Marketing site:** Static files in `site/` for Vercel (`rootDirectory: site`). Vercel does not build or host the Electron app.
- **License:** GPL-3.0-or-later. Keep upstream copyright and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). This is a fork of [ghost-location](https://github.com/Blueturboguy07/ghost-location); do not claim we authored the original app.
- **Privacy:** No accounts, no telemetry, no replacement analytics in installed builds.
- **Tests:** `npm test` is the default CI check. Do not require real phones or `npm run test:native` unless Jake asks.
- **Git:** Jake reviews and merges. No Co-authored-by lines. Squash merge when merging.
