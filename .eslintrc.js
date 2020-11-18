module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["react", "import", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-constant-condition": ["error", { checkLoops: false }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // Fixes errors about missing `ts` extension on imports
    // https://github.com/benmosher/eslint-plugin-import/issues/1615
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        "d.ts": "never",
      },
    ],
    "react/prop-types": "off",
    "react/display-name": "off",
  },
  overrides: [
    {
      // Enable the rules specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-var-requires": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
      },
    },
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
};
