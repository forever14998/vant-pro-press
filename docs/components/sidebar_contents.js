module.exports = [
    {
        title: '起步',
        collapsable: false,
        // 必要的，分组的子项目
        children: [{
            path: "/components/", title: '介绍'
        }, {
            path: "/components/started/", title: '快速上手'
        }],
    },
    {
        title: '已支持',
        collapsable: false,
        // 必要的，分组的子项目
        children: [{
            path: "/components/content/calendar/", title: 'Calendar 日历'
        },{
            path: "/components/content/popup/", title: 'Popup 弹出层'
        }, {
            path: "/components/content/overlay/", title: 'Overlay 遮罩层'
        }],
    }
];
