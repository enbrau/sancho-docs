module.exports = {
  title: "EBStudio",
  description: "Sancho Document Center",
  base: '/',
  themeConfig: {
    logo: '/assets/img/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '脚手架', 
        items: [
          { text: 'Sancho Vue3 Admin', link: '/sancho-vue3-admin/' },
        ]
      },
      { text: '网站', link: 'http://www.enbrau.com/' },
    ],
    sidebar: {
      '/sancho-vue3-admin/': [{
        title: 'Sancho Vue3 Admin',
        collapsable: true, 
        children: [
          { title: '概述', path: '/sancho-vue3-admin/' },
          'guide',
          'advance',
          'design',
          'history'
        ]
      }],
    },
    sidebarDepth: 6
  }
}
