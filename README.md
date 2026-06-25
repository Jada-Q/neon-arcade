# NEON ARCADE · 霓虹街机合集

一套合成波（OutRun / 赛博霓虹）风格的纯前端浏览器游戏合集，共 **34 款游戏**。每款都是**单文件 HTML**，无需安装、无需后端、双击即玩；支持 PWA 离线安装。

> 技术栈：原生 HTML / Canvas / WebGL（Three.js）/ Web Audio / 部分用 MediaPipe 做摄像头·手势·语音体感交互 / PWA（manifest + service worker）

## 🎮 游戏清单

### 经典复刻
| 游戏 | 文件 | 玩法 |
|------|------|------|
| NEON 2048 — OutRun | `neon-2048.html` | 2048 数字合成 |
| NEON BLOCKS | `neon-blocks.html` | 俄罗斯方块 |
| NEON BRICK | `neon-brick.html` | 打砖块 |
| NEON SNAKE | `neon-snake.html` | 贪吃蛇 |
| NEON TRON | `neon-tron.html` | 光轨对战 |
| NEON INVADERS | `neon-invaders.html` | 太空侵略者 |
| NEON FLAPPY | `neon-flappy.html` | Flappy Bird |
| NEON PINBALL | `neon-pinball.html` | 弹球 |
| NEON MINE | `neon-mine.html` | 扫雷 |
| NEON SOKOBAN | `neon-sokoban.html` | 推箱子 |
| NEON 合成大西瓜 | `neon-suika.html` | 西瓜合成 |
| NEON MATCH-3 | `neon-match3.html` | 三消 |
| NEON CARDS | `neon-cards.html` | 翻牌记忆配对 |
| NEON WHACK | `neon-whack.html` | 打地鼠 |
| NEON PACHINKO | `neon-matter.html` | 弹珠机（物理） |

### 动作 / 跑酷 / 3D
| 游戏 | 文件 | 玩法 |
|------|------|------|
| 3D 赛车竞速 NEON RACER | `dodge-game.html` | 合成波 3D 赛车 |
| NEON RUNNER | `neon-runner.html` | 无尽跑酷 |
| NEON RUNNER（平台） | `neon-platform.html` | 平台跳跃 |
| NEON JUMP | `neon-jump.html` | 攀登 |
| NEON FPS MAZE | `neon-fpsmaze.html` | 第一人称迷宫 |
| NEON MAZE | `neon-maze.html` | 迷宫 |
| NEON TUNNEL | `neon-tunnel.html` | 隧道穿梭 |
| 体素世界 | `neon-voxel.html` | 挖与建（voxel） |
| NEON SURVIVOR | `neon-shooter.html` | 生存射击 |
| NEON BULLET | `neon-bullet.html` | 弹幕 |
| NEON DEFENSE | `neon-defense.html` | 路径塔防 |
| NEON FRUIT NINJA | `neon-fruit.html` | 切水果 |
| NEON FISHING | `neon-fishing.html` | 钓鱼 |
| NEON GOLF | `neon-golf.html` | 迷你高尔夫 |

### 音乐 / 节奏
| 游戏 | 文件 | 玩法 |
|------|------|------|
| NEON RHYTHM | `neon-rhythm.html` | 下落式音游 |
| NEON DANCE | `neon-dance.html` | 方向键跳舞 |

### 体感交互（需摄像头 / 麦克风）
| 游戏 | 文件 | 玩法 |
|------|------|------|
| NEON FACE | `neon-face.html` | 头部控制躲避·吃豆 |
| NEON HAND CATCH | `neon-hand.html` | 手势接落物 |
| Voice Runner | `neon-voice.html` | 喊话躲避飞行 |

## 🚀 本地运行

直接用浏览器打开任意 `.html` 文件即可。推荐从 hub 入口进：

```bash
open project-hub.html   # macOS
```

> 体感类游戏（face / hand / voice）需要摄像头或麦克风权限，且因浏览器安全策略，建议通过本地服务器打开：
> ```bash
> python3 -m http.server 8080
> # 浏览器访问 http://localhost:8080
> ```

## 📁 项目结构

- `neon-*.html` / `dodge-game.html` — 34 款游戏（单文件，自包含）
- `project-hub.html` — 合集导航首页
- `manifest.json` + `sw.js` — PWA 配置（离线安装）
- `tech-report.html` / `tech-slides.html` — 技术分析报告 / 幻灯片

> 各游戏预告片（mp4）不在 git 仓库内，以 **GitHub Release `v1.0`** 附件形式分发：
> https://github.com/Jada-Q/neon-arcade/releases/tag/v1.0 ——
> 这样仓库本体保持精简（clone 快、历史不被二进制撑大）。

## 📝 说明

由 Jada vibe-coding 产出的浏览器游戏系列。所有游戏纯客户端运行，不收集任何数据。
