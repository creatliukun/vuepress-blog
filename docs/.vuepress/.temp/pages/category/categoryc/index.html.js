import comp from "/Users/lk/my-blog/vuepress-blog/docs/.vuepress/.temp/pages/category/categoryc/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/categoryc/\",\"title\":\"Category CategoryC\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Category CategoryC\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"CategoryC\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
