# nuxt-facebook-pixels-module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-facebook-pixels-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-facebook-pixels-module)
[![npm](https://img.shields.io/npm/dt/nuxt-facebook-pixels-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-facebook-pixels-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)
[![CircleCI](https://img.shields.io/circleci/project/github/cyberz/nuxt-facebook-pixels-module/master.svg?style=flat-square)](https://circleci.com/gh/cyberz/nuxt-facebook-pixels-module/tree/master)

> Facebook Pixel module for NuxtJS thats allow use multiple pixels

## Table of Contents

* [Install](#install)
* [Usage](#getting-started)
* [License](#license)

## Install

```bash
$ npm install --save nuxt-facebook-pixels-module
// or
$ yarn add nuxt-facebook-pixels-module
```

## Usage

Add `nuxt-facebook-pixels-module` to `modules` section of `nuxt.config.js`.

```js
{
  modules: [
    // Simple usage
    ['nuxt-facebook-pixels-module', {
      /* module options */
      pixelId: 'FACEBOOK_PIXEL_ID', // or 'FACEBOOK_PIXEL_ID_1, FACEBOOK_PIXEL_ID_2'
    }],
 ]
}
```

multiple pixels usage

```js
{
  modules: [
    // With multiple pixels Id
    ['nuxt-facebook-pixels-module', {
      /* module options */
      track: 'PageView',
      pixelId: ['FACEBOOK_PIXEL_ID_1', 'FACEBOOK_PIXEL_ID_2'], // or 'FACEBOOK_PIXEL_ID_1, FACEBOOK_PIXEL_ID_2' useful when process.env.FACEBOOK_PIXELS
      disabled: false
    }],
 ]
}
```

or even

```js
{
  modules: [
    'nuxt-facebook-pixels-module',
  ],
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: 'FACEBOOK_PIXEL_ID', // or ['FACEBOOK_PIXEL_ID_1', 'FACEBOOK_PIXEL_ID_2']
    disabled: false
  },
}
```

## Disabling the pixel (for GDPR)

If you'd like to install the pixel disabled, and enable it later after the user has consented to its use, you can do so by setting `disabled: true` in the pixel configuration:

```js
{
  modules: [
    'nuxt-facebook-pixels-module',
  ],
  facebook: {
    ...
    disabled: true
  },
}
```

Now, in your component, you can call the following in order to start the pixel and track the current page.

```js
this.$fb.enable()
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| pixelId  | null     | true     | The unique pixel identifier provided by Facebook.                                         |
| track    | PageView | false    | Default tracking event.                                                                   |
| version  | 2.0      | false    | Tracking version.                                                                         |
| disabled | false    | false    | Disable the Pixel by default when initialized. Can be enabled later through `$fb.enable()`.

## Facebook pixel instance

The tracking pixel instance is available on all vue component instances as $fb. It has the following methods:

| Method            | Purpose                                                                                                  | Equivalent to                  |
|-------------------|----------------------------------------------------------------------------------------------------------|--------------------------------|
| enable()          | If you had previously set `disabled: true` in config, enables the pixel and tracks the current page view | $fb.init(), $fb.track()        |
| init()            | Initialises the pixel                                                                                    | fbq('init', <options.pixelId>) |
| track(event, parameters)           | Sends a track event with optional `parameters`. It's `PageView` by default if the `event` is not defined.                                                                                      | fbq('track', <options.track>, parameters)  |
| query(key, value, parameters) | Call the underlying fbq instance with anything else. The `parameters` attribute is optional.                                                      | fbq(key, value, parameters)                |

## Inspired by:
https://github.com/WilliamDASILVA/nuxt-facebook-pixel-module

## License

[MIT License](./LICENSE)
