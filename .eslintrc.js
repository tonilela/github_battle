module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended", "airbnb"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
    "jasmine": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": [2, "never"],
    "jsx-quotes": ["error", "prefer-single"],
    "quotes": ["error", "single"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }],
    "comma-dangle": ["error", "never"],
    "arrow-body-style": 0,
    "react/style-prop-object": 0,
    "react/prefer-stateless-function": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "import/prefer-default-export": 0,
    "no-unused-vars": [2, {
      "vars": "local",
      "varsIgnorePattern": "^_",
      "args": "after-used",
      "argsIgnorePattern": "^_"
    }],
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "strict": 0,
  }
};