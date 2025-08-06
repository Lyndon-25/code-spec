import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

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
        ecmaFeatures: {
          jsx: true, // 启用 JSX 语法
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    settings: {
      react: {
        version: "detect", // 自动检测 React 版本
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
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      // 违反 Prettier 格式的代码将被标记为错误
      "prettier/prettier": "error",

      // 导入顺序
      "import/order": [
        "error",
        {
          "newlines-between": "always", // 不同组的导入之间必须有空行
          alphabetize: {
            order: "asc", // 导入按字母顺序升序排列
          },
        },
      ],

      // 禁用基础的 no-unused-vars，使用 TypeScript 版本 - 未使用变量
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      /*
       * 禁用重复声明检查 - 支持常量模拟枚举同名（值空间 & 类型空间）
       * TypeScript 编译器本身会检查真正的重复声明，ESLint 规则与常量模拟枚举冲突
       */
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "off",

      // React 相关规则
      "react/jsx-uses-react": "off", // 使用新的 JSX 转换
      "react/react-in-jsx-scope": "off", // 使用新的 JSX 转换
      "react/jsx-uses-vars": "error", // 确保 JSX 中使用的变量被识别

      // 🎯 推荐使用常量模拟枚举替代传统枚举
      "@typescript-eslint/prefer-enum-initializers": "off", // 禁用枚举初始化检查
      "@typescript-eslint/prefer-literal-enum-member": "off", // 禁用枚举字面量检查

      // 🎯 完全禁用传统枚举，强制使用常量模拟枚举
      "no-restricted-syntax": [
        "error",
        {
          selector: "TSEnumDeclaration",
          message: "禁止使用传统 enum，请使用常量模拟枚举替代。示例：const UserRole = { Admin: 'admin' } as const",
        },
      ],
    },
  },
];
