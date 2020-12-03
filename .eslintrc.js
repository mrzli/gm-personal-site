module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json"
  },
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:all",
    "plugin:@typescript-eslint/all",
    "plugin:react/all"
  ],
  rules: {
    // eslint - best practices
    "no-else-return": "off",
    // eslint - variables
    "no-undefined": "off",
    // eslint - best practices
    "require-unicode-regexp": "off",
    // eslint - stylistic issues
    "capitalized-comments": "off",
    "func-style": ["error", "declaration"],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "indent": ["error", 2],
    "max-params": ["error", 8],
    "multiline-comment-style": "off",
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", "never"],
    "padded-blocks": "off",
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "single"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    // eslint - es6
    "sort-imports": "off",

    // @typescript-eslint
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "function",
        "format": ["StrictPascalCase", "strictCamelCase"]
      }
    ],
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],

    // react
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        "props": "always",
        "children": "always"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "allow": "always",
        "extensions": [".tsx"]
      }
    ],
    "react/jsx-indent": ["error", 2],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "when": "multiline"
      }
    ],
    "react/jsx-one-expression-per-line": [
      "error",
      {
        "allow": "single-child"
      }
    ]
  },
  overrides: [
    {
      "files": ["**/*.{ts,tsx}"],
      "rules": {
        "indent": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "quotes": "off",
        "space-before-function-paren": "off",
      }
    }
  ]
};
