import { GitContributors } from "/Users/lk/my-blog/vuepress-blog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.87_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.7_be128eb0f68f1dbc3f7cfe4a885cfbc0/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/lk/my-blog/vuepress-blog/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.87_vuepress@2.0.0-rc.20_@vuepress+bundler-vite@2.0.0-rc.7_be128eb0f68f1dbc3f7cfe4a885cfbc0/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
