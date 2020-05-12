module.exports = {
    themeConfig: {
        // 图标
        logo: '/assets/img/logo.png',
        // 导航栏
        nav: [
            {text: '主页', link: '/'},
            {text: '开发', link: '/develop'},
            {text: '关于我', link: '/about'},
        ],
        // 侧边栏
        sidebar: [
            {
                title: '弹层',   // 必要的
                path: '/layer/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/layer/code'
                ]
            },
        ],
    }
};