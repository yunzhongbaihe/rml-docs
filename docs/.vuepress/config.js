const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
	title: '云中白鹤',
	description: '学而时习之，不亦说乎',
	base: '/rml-docs/', // 这是部署到github相关的配置
	markdown: {
		lineNumbers: true, // 代码库显示行数
		anchor: {permalink: false, permalinkBefore: false, permalinkSymbol: ''},
	},
	plugins: {
		'@vuepress/back-to-top': true,
		'@vuepress/last-updated': (timestamp) => moment(timestamp).format('llll'),
		'@vuepress/active-header-links': true,
	},
	themeConfig: {
		lastUpdated: '更新时间：',
		search: false, // 禁用默认的搜索框
		// 图标
		// logo: '/assets/img/logo.png',
		// 导航栏
		nav: [
			{text: '首页', link: '/'},
			{text: '笔记', link: '/note'},
			{text: '乡愁', link: '/nostalgia'},
			// {text: '关于我', link: '/about'},
		],
		// 侧边栏
		sidebar: [
			['/webpack', 'Webpack'],
            ['/react', 'React'],
            {
                title: 'vue',
				path: '/vue/',
				collapsable: false,
				sidebarDepth: 1,
				children: [
					'/vue/code'
				]
            },
			{
				title: '弹框',
				path: '/layer/',
				collapsable: false,
				sidebarDepth: 1,
				children: [
					'/layer/code'
				]
			},
			{
				title: 'Electron',
				path: '/electron/',
				collapsable: false,
				sidebarDepth: 1,
				children: [
					'/electron/code'
				]
			},
		],
		// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
		nextLinks: false,
		// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
		prevLinks: false
	},
};