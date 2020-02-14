const { addBabelPlugin, override } = require('customize-cra');

// Modulo do Babel para referenciar o src
module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
