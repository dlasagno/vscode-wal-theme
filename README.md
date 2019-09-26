# Wal Theme

This extensions for Visual Studio Code adds a **real time updated theme** that is dynamically generated from the color palette provided by [pywal](https://github.com/dylanaraps/pywal).

## Screenshots

![Example 1](https://raw.githubusercontent.com/dlasagno/vscode-wal-theme/master/screenshots/1.png)

![Example 2](https://raw.githubusercontent.com/dlasagno/vscode-wal-theme/master/screenshots/2.png)

![Example 3](https://raw.githubusercontent.com/dlasagno/vscode-wal-theme/master/screenshots/3.png)

## Features

- Real time updates of the color scheme
- Two variants available: borderless and bordered
- Works out of the box: no setup needed, just run pywal as you normally would

## Requirements

In order to use this extension pywal is needed, it should be run before updating the theme provided by this extension.

## Extension Commands

This extension contributes the following command:

- `walTheme.update`: execute a manual update of the theme

## Extension Settings

This extension contributes the following setting:

- `walTheme.autoUpdate`: enable/disable the auto update of the theme provided by this extension

## Release Notes

The release notes can be find in the [changelog](https://github.com/dlasagno/vscode-wal-theme/blob/master/CHANGELOG.md).

## Troubleshooting

If the extension doesn't update automatically, while the auto updates are enabled, try to do a manual update with the update command.
If the manual update doesn't work try reloading the window.

---

## Credits

This extension is inspired by [Ayu](https://github.com/ayu-theme/vscode-ayu) and [vscode-wal](https://github.com/bluedrack/vscode-wal).
