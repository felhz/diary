module.exports = {
  base:'/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  title: '记录前端领域知识',
  port: 8081,
  // markdown: {
  //   toc: { includeLevel: [2, 3] }
  // },
  lineNumbers: true,
  themeConfig: {
    // sidebar: [
    //   '/',
    //   '/test',
    //   ['/page-b', 'Explicit link text']
    // ],
    sidebar: 'auto'
  }
  
}