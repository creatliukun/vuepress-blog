import comp from "/Users/lk/my-blog/vuepress-blog/docs/.vuepress/.temp/pages/posts/article2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article2.html\",\"title\":\"Article 2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-02T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1742745667000,\"contributors\":[{\"name\":\"creatliukun\",\"username\":\"creatliukun\",\"email\":\"952476356@qq.com\",\"commits\":1,\"url\":\"https://github.com/creatliukun\"}],\"changelog\":[{\"hash\":\"316a9861848cacce4db0774aae84ec40c59fed67\",\"time\":1742745667000,\"email\":\"952476356@qq.com\",\"author\":\"creatliukun\",\"message\":\"feat: init\"}]},\"filePathRelative\":\"posts/article2.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
