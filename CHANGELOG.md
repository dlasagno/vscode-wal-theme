# Change Log

All notable changes to the "wal-theme" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.2] - 2021-08-22

### Fixed

- Autoupdate anomalies

## [1.1.1] - 2021-08-14

### Fixed

- `colors.json` causing errors while loading new colors

## [1.1.0] - 2021-08-09

### Changed

- Now the custom background and foreground colors from the `colors.json` will be used if available
- Improved color scheme, especially for fortran language

### Fixed

- Behavior when using vscode remote

## [1.0.4] - 2020-04-03

### Changed

- Updated version of the dependencies
- Now `@types/color` has become a dev dependency

### Fixed

- Theme auto-update not working at startup when colors changed while vscode was closed: now autoupdate is delayed by 10 seconds

## [1.0.3] - 2019-10-04

### Changed

- The keyword color highlighting for a better readability

## [1.0.2] - 2019-09-26

### Changed

- Better loading of colors from pywal(Windows user should be able to load their files)

## [1.0.1] - 2019-09-26

### Added

- Extended support to vscode 1.34.0 and beyond

## [1.0.0] - 2019-09-23

- Initial release of Wal Theme
