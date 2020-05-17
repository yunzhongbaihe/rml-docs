const moment = require('moment');
moment.locale('zh-cn');

module.exports = {
	title: '云中白鹤',
	description: '学而时习之，不亦说乎',
	base: '/', // 这是部署到github相关的配置
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
			{text: '主页', link: '/'},
			{text: '开发', link: '/develop'},
			// {text: '关于我', link: '/about'},
		],
		// 侧边栏
		sidebar: [
			['/webpack', 'Webpack'],
			{
				title: '弹框',   // 必要的
				path: '/layer/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
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