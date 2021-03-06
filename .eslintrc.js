module.exports = {
    "root": true,
    "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:import/warnings"
    ],
    "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module"
    },
    "env": {
        'es6': true,
        "browser": true,
        "node": true,
        "mocha": true
    },
    "rules": {
        "no-console": 0
    },
    "extends": [
      "eslint:recommended"
    ],
    "parser": "babel-eslint"
  };