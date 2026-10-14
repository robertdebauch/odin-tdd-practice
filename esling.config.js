import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import globals from "globals";

export default [
  pluginJs.configs.recommended,

  {
    files: ["**/*.test.js", "**/*.spec.js", "**/__tests__/**/*.js"],

    plugins: {
      jest: pluginJest,
    },

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },

    rules: {
      ...pluginJest.configs["flat/recommended"].rules,
    },
  },
];
