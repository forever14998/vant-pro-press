module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    plugins: [],
    themeConfig: {
        lastUpdated: false,
        sidebar: {
            "/view/guide/": [
                {
                    title: '生活测试1',
                    collapsable: false,
                    children: [
                        { title: '生活测试01', path: 'plugins/' },
                        { title: '生活测试02', path: 'plugins/' },
                        { title: '生活测试03', path: 'plugins/' },
                    ]
                },{
                    title: '生活测试2',
                    collapsable: false,
                    children: [
                        { title: '生活测试01', path: 'plugins/' },
                        { title: '生活测试02', path: 'plugins/' },
                        { title: '生活测试03', path: 'plugins/' },
                    ]
                }
            ],
        },
        sidebarDepth: 2,//左侧导航显示的层级
        nav: [
            {text: 'Home', link: '/'},
            {text: 'guide', link: '/view/guide/'},
            {text: 'External', link: 'https://google.com'},
        ],
        displayAllHeaders: true
    },
}