# @lyndon/multirepo

[![Node.js](https://img.shields.io/badge/Node.js-20.x+-green.svg)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10.x+-orange.svg)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

一个现代化的 TypeScript 多仓库开发模板，集成了完整的开发工具链和最佳实践配置。旨在为团队提供开箱即用、规范化的项目开发环境。

## ✨ 核心特性

### 🛠️ 开发工具链
- **TypeScript 5.8+** - 类型安全，现代开发体验
- **ESLint 9.x** - 代码质量检查，Flat Config 配置
- **Prettier 3.x** - 代码格式化，统一代码风格
- **Husky 9.x** - Git 钩子管理，自动化工作流
- **lint-staged** - 仅对暂存文件执行检查，提升效率
- **Commitlint** - 提交信息规范化，遵循 Angular 规范
- **ls-lint** - 文件/文件夹命名规范自动校验

### 🎯 最佳实践
- **模块化配置** - 各工具配置独立，易于维护
- **自动化工作流** - 提交前自动检查，保障代码质量
- **团队协作友好** - 统一的代码规范和提交规范
- **开箱即用** - 零配置启动，快速上手

## 📁 项目结构

```
multirepo/
├── src/                    # 源码目录
│   └── index.ts           # 入口文件
├── .husky/                # Git 钩子配置
│   ├── pre-commit        # 提交前检查
│   └── commit-msg        # 提交信息校验
├── .vscode/              # VS Code 配置
├── eslint.config.js      # ESLint 配置（Flat Config）
├── prettier.config.js    # Prettier 配置
├── .ls-lint.yml         # 文件命名规范配置
├── commitlint.config.js  # 提交信息规范配置
├── tsconfig.json        # TypeScript 配置
├── package.json         # 项目配置
├── pnpm-lock.yaml      # 依赖锁定文件
├── .gitignore          # Git 忽略文件
├── LICENSE             # 开源协议
└── README.md           # 项目说明
```

## 🚀 快速开始

### 环境要求

- **Node.js**: >= 20.x
- **pnpm**: >= 10.x

### 1. 克隆项目

```bash
git clone https://github.com/your-username/multirepo.git
cd multirepo
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 开发模式

```bash
# 代码检查
pnpm exec eslint src --fix

# 代码格式化
pnpm exec prettier --write src

# 类型检查
pnpm exec tsc --noEmit
```

## 🛠️ 开发规范

### 代码风格

- **ESLint**: 使用 Flat Config 配置，支持 TypeScript
- **Prettier**: 统一代码格式化，与 ESLint 完美集成
- **导入排序**: 自动按字母顺序排序，不同组间空行分隔

### 文件命名规范

使用 `ls-lint` 自动校验文件/文件夹命名：

- **普通文件/文件夹**: 必须使用 `kebab-case`（短横线命名）
- **Hook 文件**: 以 `use` 开头的文件允许使用 `camelCase`（如 `useModel.ts`）

### Git 提交流程

#### 自动化检查

1. **pre-commit 钩子**:
   - 执行 `lint-staged`，仅检查暂存文件
   - 自动修复 ESLint 问题
   - 自动格式化代码
   - 检查文件命名规范

2. **commit-msg 钩子**:
   - 使用 Commitlint 校验提交信息
   - 遵循 Angular 提交规范

#### lint-staged 配置

```json
{
  "*": ["ls-lint"],
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml}": [
    "prettier --write"
  ]
}
```

#### 提交信息规范

格式：`<type>(<scope>): <subject>`

**类型 (type)**:
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具相关
- `revert`: 回滚
- `build`: 构建系统
- `ci`: 持续集成

**示例**:
```bash
feat(user): 添加用户登录功能
fix(auth): 修复登录验证逻辑
docs(readme): 更新项目说明文档
style(eslint): 调整代码格式化规则
```

## 📦 主要依赖

### 生产依赖
- [dayjs](https://day.js.org/) - 轻量级日期处理库
- [lodash-es](https://lodash.com/) - 实用工具函数库
- [zod](https://zod.dev/) - TypeScript 优先的模式验证

### 开发依赖
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [ESLint](https://eslint.org/) - 代码质量检查工具
- [Prettier](https://prettier.io/) - 代码格式化工具
- [Husky](https://typicode.github.io/husky/) - Git 钩子管理
- [lint-staged](https://github.com/okonet/lint-staged) - 暂存文件检查
- [Commitlint](https://commitlint.js.org/) - 提交信息规范检查
- [ls-lint](https://ls-lint.org/) - 文件命名规范检查

## 🔧 配置说明

### ESLint 配置
- 使用 Flat Config 格式
- 集成 TypeScript 支持
- 与 Prettier 完美配合
- 自动导入排序

### Prettier 配置
- 单行最大长度: 120 字符
- 缩进: 2 个空格
- 使用双引号
- 尾随逗号: 全部

### TypeScript 配置
- 严格模式启用
- ES2022 目标
- 模块解析: Node.js
- 声明文件生成

## 🤝 贡献指南

### 开发流程

1. **Fork 项目**并创建功能分支
2. **安装依赖**: `pnpm install`
3. **开发代码**，确保通过所有检查
4. **提交代码**，遵循提交规范
5. **创建 Pull Request**

### 代码检查

提交前会自动执行以下检查：
- ✅ ESLint 代码质量检查
- ✅ Prettier 代码格式化
- ✅ ls-lint 文件命名规范
- ✅ Commitlint 提交信息规范

### 手动检查

```bash
# 代码质量检查
pnpm exec eslint src --fix

# 代码格式化
pnpm exec prettier --write src

# 类型检查
pnpm exec tsc --noEmit

# 文件命名检查
pnpm exec ls-lint
```

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源，欢迎自由使用和贡献。

## 📞 联系方式

- **作者**: Lyndon
- **邮箱**: wuxianzhi052@gmail.com
- **GitHub**: [@your-username](https://github.com/your-username)
- **Issues**: [GitHub Issues](https://github.com/your-username/multirepo/issues)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者们！

---

⭐ 如果这个项目对您有帮助，请给我们一个 Star！
