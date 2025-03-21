import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint, { configs as tsConfigs } from "typescript-eslint";

export default tseslint.config({
  extends: [
    eslint.configs.recommended,
    tsConfigs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    eslintPluginPrettierRecommended,
  ],

  rules: {
    "import/order": [
      "error",
      {
        "newlines-between": "always",

        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },

        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
  },

  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
});
