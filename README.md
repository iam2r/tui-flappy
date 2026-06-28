# 🐦 tui-flappy

Flappy Bird 终端版 — 基于 [vue-tui](https://github.com/vuejs-ai/vue-tui) 和 TypeScript 7（Go 重写版）。

## 运行

```bash
# 安装依赖
pnpm install

# 开发模式（终端 HMR）
pnpm dev

# 编译运行
pnpm build && node dist/main.js
```

**要求：** Node.js >= 22.18.0

## 操作

| 按键 | 功能 |
|------|------|
| `空格` / `↑` / `W` | 小鸟向上飞 |
| `R` | 死亡后重新开始 |
| `Q` / `Ctrl+C` | 退出 |

## 技术栈

- [vue-tui](https://github.com/vuejs-ai/vue-tui) — Vue 3 终端 UI 框架
- [TypeScript 7](https://devblogs.microsoft.com/typescript/typescript-native-port/) — Go 重写版
- [Vite 8](https://vite.dev/) — 构建工具
- [chalk](https://github.com/chalk/chalk) — 终端色彩
- JSX/TSX（非 SFC）

## 许可

MIT
