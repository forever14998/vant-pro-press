module.exports = {
  theme:"antdocs",
  title: 'vantPro',
  description: " vant 组件的多端解决方案",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    repo: "https://github.com/forever14998/uni-vant-pro",
    editLinks: false,
    logo: '/assets/logo.png'
  },
};