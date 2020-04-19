module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};
