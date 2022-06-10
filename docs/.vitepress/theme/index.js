// .vitepress/theme/index.js
import './custom.css'
import Layout from './Layout.vue'

export default {
  Layout,
  NotFound: () => 'Custom Errorsini',
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
      // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
}