module.exports = {
  title: 'V6配置中心',
  description: '小咖科技',
  head: [
    ['link', {rel: 'icon', href: '/img/logo.ico'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}]
  ],
  serviceWorker: true,
  themeConfig: {
    displayAllHeaders: true,
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      {text: '主页', link: '/'},
      {
        text: '目录',
        items: [
          {text: '快速入手', link: '/src/'}
        ]
      },
      {text: '关于', link: '/about/'},
      {text: 'Github', link: 'https://www.github.com/codeteenager'}
    ],
    sidebar: [
      {
        title: '快速入手',
        collapsable: false,
        children: [
          '/src/',
          '/src/router/',
          '/src/store/',
          '/src/flyio/',
          '/src/utils/',
          '/src/filter/'
        ]
      },
      {
        title: '公共组件',
        collapsable: false,
        children: [
          '/src/components/table/'
        ]
      }
      // {
      //   title: '业务',
      //   collapsable: false,
      //   children: [
      //     '/src/filter/'
      //   ]
      // }
    ],
    sidebarDepth: 2,
    lastUpdated: '最后更新时间'
  }
}
