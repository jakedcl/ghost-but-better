# Ghost But Better — agent notes

## What this repo is

- **Desktop app:** Electron (Node main process + bundled JS UI). Python **pymobiledevice3** sidecar for iPhone; bundled **ADB** and **Appium Settings** for Android. Simulates phone GPS over USB or same-network Wi-Fi.
- **Marketing site:** Static files in `site/` for Vercel (`rootDirectory: site`). Vercel does not build or host the Electron app.
- **License:** GPL-3.0-or-later. Keep upstream copyright and [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). This is a fork of [ghost-location](https://github.com/Blueturboguy07/ghost-location); do not claim we authored the original app.
- **Privacy:** No accounts, no telemetry, no replacement analytics in installed builds.
- **Tests:** `npm test` is the default CI check. Do not require real phones or `npm run test:native` unless Jake asks.
- **Git:** Jake reviews and merges. No Co-authored-by lines. Squash merge when merging.
