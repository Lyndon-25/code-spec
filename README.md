# @lyndon/multirepo

这是一个基于 TypeScript 的多仓库最佳实践模板，集成了 ESLint、Prettier、Husky、Commitlint、ls-lint 等开发工具，旨在帮助开发者快速搭建现代化、规范化的项目开发环境。

---

## ✨ 特性

- **TypeScript**：类型安全，现代开发体验
- **ESLint + Prettier**：统一代码风格，自动格式化
- **Husky + lint-staged**：Git 钩子自动校验与格式化，保障代码质量
- **Commitlint**：提交信息规范化，自动校验
- **ls-lint**：文件/文件夹命名规范自动校验
- **最佳实践配置**：开箱即用，适合团队协作

---

## 📁 目录结构

```text
multirepo/
├── src/                # 源码目录
│   └── index.ts        # 入口文件
├── .eslint.config.js   # ESLint 配置（Flat Config）
├── .prettierrc.js      # Prettier 配置
├── .ls-lint.yml        # ls-lint 文件/文件夹命名规范配置
├── .husky/             # Husky Git 钩子
│   ├── pre-commit      # 提交前校验
│   └── commit-msg      # 提交信息校验
├── commitlint.config.js# Commitlint 配置
├── package.json        # 项目信息与依赖
├── tsconfig.json       # TypeScript 配置
├── LICENSE             # 开源协议
└── README.md           # 项目说明
```

---

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 代码检查与格式化

```bash
pnpm exec eslint src --fix      # 自动修复 ESLint 问题
pnpm exec prettier --write src  # 自动格式化代码
```

### 3. Git 钩子自动校验

- 提交前自动执行 lint-staged（ls-lint + ESLint + Prettier）
- 提交信息自动校验（Commitlint）

---

## 🛠️ 开发规范

### 代码风格

- 使用 [ESLint](./.eslint.config.js) 统一代码规范
- 使用 [Prettier](./.prettierrc.js) 统一格式化风格

### 文件/文件夹命名规范

- 使用 [ls-lint](./.ls-lint.yml) 自动校验命名规范
- `src` 目录下：
  - 普通文件/文件夹必须为 kebab-case（短横线命名）
  - 以 `use` 开头的文件（如 `useModel.ts`）允许 camelCase

### Git 提交流程

- [Husky](https://typicode.github.io/husky/) 自动安装 Git 钩子
- [lint-staged](https://github.com/okonet/lint-staged) 仅校验提交的文件
- [Commitlint](https://commitlint.js.org/) 校验提交信息，遵循 Angular 规范
- [ls-lint](https://ls-lint.org/) 校验文件/文件夹命名规范

#### lint-staged 配置说明

- 所有暂存文件都会执行 `ls-lint` 检查命名规范
- JS/TS 文件自动执行 `eslint --fix` 和 `prettier --write`
- JSON/Markdown/YAML 文件自动执行 `prettier --write`

#### 提交信息示例：

```
feat(user): 添加用户登录功能
```

---

## 📦 主要依赖

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Commitlint](https://commitlint.js.org/)
- [ls-lint](https://ls-lint.org/)
- [dayjs](https://day.js.org/)
- [lodash-es](https://lodash.com/)
- [zod](https://zod.dev/)

---

## 📜 开源协议

本项目基于 [MIT License](./LICENSE) 开源，欢迎自由使用和贡献。

---

## 🙋‍♂️ 贡献指南

1. Fork 本仓库并创建分支
2. 提交代码前请确保通过所有 lint 检查（包括命名规范）
3. 提交信息需符合规范，推荐使用 `pnpm commit` 或手动遵循规范
4. 欢迎提 Issue 或 PR

---

## 📮 联系方式

- 作者: Lyndon
- 邮箱: wuxianzhi051@gmail.com
- [GitHub Issues](https://github.com/your-username/multirepo/issues)
