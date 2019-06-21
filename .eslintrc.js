module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  env: {
    es6: true,
    node: true
  },
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: "module"
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": ["error", 2],
    "no-console": "warn"
  }
};
