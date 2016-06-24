This repo provides tools to generate and distribute [V8 heap snapshot](https://v8project.blogspot.bg/2015/09/custom-startup-snapshots.html) packages of the [Core NativeScript](https://github.com/NativeScript/NativeScript) / [NativeScript+Angular](https://github.com/NativeScript/nativescript-angular) modules to reduce the startup time of the [NativeScript Android Runtime](https://github.com/NativeScript/android-runtime).

For more information follow [NativeScript#1563](https://github.com/NativeScript/NativeScript/issues/1563) and look at the [Android Runtime docs](http://v8project.blogspot.bg/2015/09/custom-startup-snapshots.html).

## What You'll Find
* [`/bundler`](./bundler) - A JavaScript module bundler and tool to create snapshot packages.
* [`/plugin`](./plugin) - NativeScript plugin that downloads the correct snapshot package and prepares the app for using it.

## Getting Started

To install [the plugin](./plugin):
```shell
tns install android-snapshot
```

## Results
Startup time tested on a Nexus 5 device:

| Configuration             | Core NativeScript | NativeScript+Angular   |
| ------------------------- | ----------------: | ---------------------: |
| Non-bundled               |            2350ms |                 4000ms |
| Bundled                   |            2100ms |                 3600ms |
| Bundled with snapshot     |            1600ms |                 2100ms |

## Requirements
* NativeScript CLI 2.1
* NativeScript Runtime for Android 2.1

## Limitations
* APK file size will be increased with 1.5MB (6MB with Angular).
* The installed application size will be increased with an additional 1.2MB (5MB with Angular).
* It is not possible to step into the embedded script from VS Code. You must use the CLI if you want to debug it.
* LiveSync is not supported.
* Snapshots are not compatible with the [NativeScript webpack plugin](https://github.com/NativeScript/nativescript-dev-webpack).
