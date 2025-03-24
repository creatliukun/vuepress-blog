<!-- # Get Started

This is a normal page, which contains VuePress basics.

## Pages

You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.

See [routing][] for more details.

## Content

Every markdown file [will be rendered to HTML, then converted to a Vue SFC][content].

VuePress support basic markdown syntax and [some extensions][synatex-extensions], you can also [use Vue features][vue-feature] in it.

## Configuration

VuePress use a `.vuepress/config.js`(or .ts) file as [site configuration][config], you can use it to config your site.

For [client side configuration][client-config], you can create `.vuepress/client.js`(or .ts).

Meanwhile, you can also add configuration per page with [frontmatter][].

## Layouts and customization

Here are common configuration controlling layout of `@vuepress/theme-default`:

- [navbar][]
- [sidebar][]

Check [default theme docs][default-theme] for full reference.

You can [add extra style][style] with `.vuepress/styles/index.scss` file.

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file -->

# vuepress搭建博客文档
# 1.安装nodejs
Node.js v18.19.0+
包管理器，如 pnpm、yarn、npm 等。


##  手动创建
+ .1创建并进入一个新目录
```bash
mkdir vuepress-starter
cd vuepress-starter
```
+ 2.初始化项目
```bash
git init
pnpm init
```
+ 3.安装 VuePress
```bash
# 安装 vuepress
npm install -D vuepress@next
# 安装打包工具和主题
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```
+ 4.创建 docs 目录和 docs/.vuepress 目录
```bash
mkdir docs
mkdir docs/.vuepress
```
+ 5.创建 VuePress 配置文件 docs/.vuepress/config.js
```javascript
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
```
+ 6.创建你的第一篇文档
```bash
echo '# Hello VuePress' > docs/README.md
```
## 目录结构
+ 创建完成后，你项目的目录结构应该是这样的：
```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
```
docs/.vuepress 目录，即源文件目录下的 .vuepress 目录，是放置所有和 VuePress 相关的文件的地方。当前这里只有一个配置文件。默认还会在该目录下生成临时文件、缓存文件和构建输出文件。建议你把它们添加到 .gitignore 文件中
+ 示例 .gitignore 文件
```
# VuePress 默认临时文件目录
.vuepress/.temp
# VuePress 默认缓存目录
.vuepress/.cache
# VuePress 默认构建生成的静态文件目录
.vuepress/dist
```
## 开始使用 VuePress
+ 启动开发服务器
你可以在 package.json 中添加一些 scripts ：
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
+ 运行 docs:dev 脚本可以启动开发服务器:
+ VuePress 会在 http://localhost:8080 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

## 自动化构建
+ 在项目根目录，新增一个.github/workflows/deploy-docs.yml 文件;里面的配置如下
```yaml

name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称, 每当 push 到 main 分支时触发部署
      - main

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true

      - name: 安装 pnpm
        uses: pnpm/action-setup@v2
        with:
          run_install: true
          version: 8


      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: pnpm


      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          pnpm run docs:build
          > docs/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: my-docs
          folder: docs/.vuepress/dist

```
## 注意事项
+ 注意点1：当推送到main分支时，会自动化部署。这个时候等待一段时间即可；
+ 注意点2: GitHub Pages 设置；GitHub Pages 是 GitHub 提供的静态网站托管服务。你需要在仓库设置中启用它。

操作步骤：
```docs
登录到 GitHub 并进入你的仓库。
点击顶部菜单栏中的 Settings（设置）。
在左侧导航栏中找到 Pages（页面）选项。
在 Source（源）部分，选择以下内容：
Branch: 选择 my-docs分支。
Folder: 选择 / (root)。
点击 Save（保存）按钮。
```

然后在刷新一下，就能看到部署后的网站了
+ 注意点3: 样式丢失问题：
base 配置错误
```bash
VuePress 的 base 配置决定了生成的静态文件中资源路径的前缀。
如果你的项目托管在非根目录
（例如 https://<username>.github.io/<repository-name>/），
而 base 未正确设置，则会导致资源路径错误。
```

