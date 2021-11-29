module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  ignorePatterns: ["dist/**", "tsconfig.**"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    project: ["tsconfig.json", "tsconfig.eslint.json"],
    extraFileExtensions: [".json"],
  },
  plugins: ["json", "@typescript-eslint"],
  rules: {},
};
