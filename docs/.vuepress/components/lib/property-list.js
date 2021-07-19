const moduleConfig =
    [{
        module: 'calendar', content: [
            {
                title: 'API',
                columns: [
                    {
                        width: 200,
                        title: '参数',
                        dataIndex: 'param'
                    },
                    {
                        width: 600,
                        title: '说明',
                        dataIndex: 'info',
                    },
                    {
                        width: 200,
                        title: '类型',
                        dataIndex: 'type',
                    },
                    {
                        width: 200,
                        title: '默认值',
                        dataIndex: 'default',
                    }
                ],
                list: [
                    {param: 'v-model', info: '是否显示日历弹窗', type: 'boolean', default: 'false'},
                    {param: 'type', info: '日期类型：single 单选、multiple 多选、range 区间', type: 'string', default: 'single'},
                    {param: 'round', info: '是否显示圆角弹窗', type: 'boolean', default: 'false'},
                    {param: 'first-day-of-week', info: '设置周起始日', type: '0-6', default: '0'},
                    {param: 'header-title', info: '日历标题', type: 'string', default: '选择日期'},
                    {param: 'button-text', info: '确认按钮的文字', type: 'string', default: '确定'},
                    {param: 'button-all-style', info: '自定义按钮样式', type: 'string', default: '-'},
                    {param: 'show-confirm', info: '是否展示确认按钮', type: 'boolean', default: '确定'},
                    {param: 'formatter', info: '日期格式化函数', type: '(day: Day) => Day', default: '-'},
                    {param: 'safe-area-inset-bottom', info: '是否开启底部安全区适配', type: 'boolean', default: 'true'},
                    {param: 'color', info: '主题色，对底部按钮和选中日期生效', type: 'string', default: '#ee0a24'},
                    {param: 'max-range', info: '可选日期的最大跨度（只在type是range时有效）', type: '[Number, String]', default: '-'},
                    {
                        param: 'min-date',
                        info: '可选择的最小日期，日期间隔符为/ 示例：new Date(\'2020/01/01\')',
                        type: 'Date',
                        default: '当前日期'
                    },
                    {
                        param: 'max-date',
                        info: '可选择的最大日期，日期间隔符为/ 示例：new Date(\'2020/01/01\')',
                        type: 'Date',
                        default: '当前日期的六个月后'
                    },
                    {
                        param: 'default-date',
                        info: '默认选中的日期，type 为 multiple 或 range 时为数组，传入 null 表示默认不选择',
                        type: 'Date | Date[] | null',
                        default: '今天'
                    },
                    {
                        param: 'allow-same-day',
                        info: '是否允许开始日期和结束日期是同一天（只在type是range时有效）',
                        type: 'Boolean',
                        default: 'false'
                    },
                    {
                        param: 'show-range-prompt',
                        info: '当选择范围超过跨度时是否弹出提示(只在type是range时有效)',
                        type: '[Number, String]',
                        default: 'true'
                    }


                ]
            },
            {
                title: 'Events',
                columns: [
                    {
                        width: 200,
                        title: '事件名',
                        dataIndex: 'name'
                    },
                    {
                        width: 700,
                        title: '说明',
                        dataIndex: 'info',
                    },
                    {
                        width: 300,
                        title: '回调参数',
                        dataIndex: 'callback',
                    }
                ],
                list: [
                    {name: 'confirm', info: '点击并选中任意日期时触发', callback: 'value: Date | Date[]'},
                    {name: 'close', info: '关闭弹出层时触发/遮罩/右上角关闭icon', callback: '-'},
                ]
            },
        ]
    },
        {module: 'popup', content: [
                {
                    title: 'API',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'v-model', info: '是否显示弹出层', type: 'boolean', default: 'false'},
                        {param: 'overlay', info: '是否显示遮罩层', type: 'boolean', default: 'true'},
                        {param: 'position', info: '弹出位置，可选值为 top bottom right left', type: 'string', default: 'center'},
                        {param: 'overlay-style', info: '自定义遮罩样式', type: 'object', default: '-'},
                        {param: 'custom-style', info: '自定义内容样式', type: 'object', default: '选择日期'},
                        {param: 'transition', info: '动画类名，等价于 transtion 的name属性', type: 'string', default: '-'},
                        {param: 'z-index', info: '层级', type: 'Number', default: '100'},
                        {param: 'close-icon-position', info: '关闭图标位置，可选值为top-left bottom-left bottom-right', type: 'string', default: 'top-right'},
                        {param: 'close-on-click-overlay', info: '是否在点击遮罩层后关闭', type: 'boolean', default: 'true'},
                        {param: 'safe-area-inset-bottom', info: '是否开启底部安全区适配', type: 'boolean', default: 'true'}
                    ]
                },
        {
            title: 'Events',
            columns: [
                {
                    width: 200,
                    title: '事件名',
                    dataIndex: 'name'
                },
                {
                    width: 700,
                    title: '说明',
                    dataIndex: 'info',
                },
                {
                    width: 300,
                    title: '回调参数',
                    dataIndex: 'callback',
                }
            ],
            list: [
                {name: 'close', info: '关闭弹出层时触发', callback: '-'},
                {name: 'close-overlay', info: '点击遮罩层时触发', callback: '-'},
            ]
        },
    ]},
        {module: 'overlay', content: [
                {
                    title: 'API',
                    columns: [
                        {
                            width: 200,
                            title: '参数',
                            dataIndex: 'param'
                        },
                        {
                            width: 600,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 200,
                            title: '类型',
                            dataIndex: 'type',
                        },
                        {
                            width: 200,
                            title: '默认值',
                            dataIndex: 'default',
                        }
                    ],
                    list: [
                        {param: 'v-model', info: '是否展示遮罩层', type: 'boolean', default: 'false'},
                        {param: 'z-index', info: 'z-index 层级', type: 'number', default: '1'},
                        {param: 'duration', info: '动画时长，单位秒', type: 'number', default: '300'},
                        {param: 'custom-style', info: '自定义样式', type: 'Object', default: '-'}
                    ]
                },
                {
                    title: 'Events',
                    columns: [
                        {
                            width: 200,
                            title: '事件名',
                            dataIndex: 'name'
                        },
                        {
                            width: 700,
                            title: '说明',
                            dataIndex: 'info',
                        },
                        {
                            width: 300,
                            title: '回调参数',
                            dataIndex: 'callback',
                        }
                    ],
                    list: [
                        {name: 'click', info: '点击时触发', callback: 'event: Event'}
                    ]
                },
            ]}]

export function getApiListModule(pageModule) {
    return moduleConfig.filter(item => item.module === pageModule)[0].content;
}