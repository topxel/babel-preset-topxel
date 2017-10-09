const browsers = require('./browsers');

module.exports = function topxelPreset(context, options = {}) {
  // Will use env in the future to prevent loading plugins
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;

  return {
    presets: [
      [
        require.resolve('babel-preset-env'),
        {
          targets: {
            browsers
          },
          modules: false
        }
      ],
      require.resolve('babel-preset-react'),
      require.resolve('babel-preset-flow')
    ],
    plugins: [
      require.resolve('react-hot-loader/babel'),
      require.resolve('babel-plugin-transform-class-properties')
    ]
  };
};
