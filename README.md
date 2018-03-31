# Sporkly

This repo contains the Sporkly demo app, Azure api, and various parts of design
documentation.

## Installation

This repo contains a signed .apk file which can be installed on any modern
android phone. Sporkly can also be built and tested from this repo.

### Dependencies

Sporkly is made using react-native. To run you will need react-native-cli
installed. This can be done with npm:
```
$ npm install -g react-native-cli
```

### Instructions

* Checkout the most recent release version
```
git checkout v1
```
* Install local dependencies with npm
```
$ cd reactApp
$ npm install
```
* Launch an android emulator _or_ connect an android device with debugging
  enabled
* Build and install the apk
```
$ react-native run-android
```
