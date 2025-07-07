import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      /**
       * 启用 prettier/prettier 规则，将 Prettier 的格式规范作为 ESLint 规则来检查
       * 禁用与 Prettier 冲突的 ESLint 规则（相当于包含了 eslint-config-prettier 的功能）
       */
      prettier,
      import: importPlugin,
    },
    rules: {
      // 违反 Prettier 格式的代码将被标记为错误
      "prettier/prettier": "error",
      "import/order": [
        "error",
        {
          "newlines-between": "always", // 不同组的导入之间必须有空行
          alphabetize: {
            order: "asc", // 导入按字母顺序升序排列
          },
        },
      ],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
