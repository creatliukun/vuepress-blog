import comp from "/Users/lk/my-blog/vuepress-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"快速开始\",\"link\":\"/get-started.md\",\"type\":\"primary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1742832165000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":2,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"a7925708b88c3a4cbdc251bf00428470027941b3\",\"time\":1742832165000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"fix: contain\"},{\"hash\":\"316a9861848cacce4db0774aae84ec40c59fed67\",\"time\":1742745667000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: init\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
