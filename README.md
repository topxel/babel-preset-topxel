# babel-preset-topxel

Topxel's shareable [Babel](https://babeljs.io) Preset.

Use it as is or as a foundation for your own custom Babel Preset.

&nbsp;

## Installation

Install `babel-core` and `babel-preset-topxel` either with Yarn or npm:

**With Yarn**

```bash
yarn add --dev babel-core babel-preset-topxel
```

**With npm**

```bash
npm install --save-dev babel-core babel-preset-topxel
```

&nbsp;

## Setup
Topxel's shareable Babel configuration is bundled inside `babel-preset-topxel` Preset. To enable this Preset add a `babel` property in your `package.json` or create a `.babelrc` file in the root directory. Although we encourage using the first method to avoid having hidden files in your project. See [How to configure Babel](https://babeljs.io/docs/usage/babelrc/) for more details.

```json
{
  "babel": {
    "presets": ["topxel"]
  }
}
```

&nbsp;

## Extending the config

ToDo.

## License

Copyright (c) 2017 [Topxel](https://github.com/topxel) - Licensed under the [MIT License](./LICENSE).
