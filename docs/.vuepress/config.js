// const moment = require('moment');
// moment.locale('zh-cn');

module.exports = {
	title: '云中白鹤',
	description: '学而时习之，不亦说乎',
	head: [
		['link', {rel: 'icon', href: '/assets/img/logo.png'}],
		['meta', {name: 'Keywords', content: '学习,笔记,进步,云中白鹤,yunzhongbaihe,YunZhongBaiHe',}],
	],
	base: '/rml-docs/', // 这是部署到github相关的配置
	markdown: {
		lineNumbers: true, // 代码库显示行数
		anchor: {permalink: false, permalinkBefore: false, permalinkSymbol: ''}, // 取消锚点显示
	},
	plugins: {
		'@vuepress/back-to-top': true,
		// '@vuepress/last-updated': (timestamp) => moment(timestamp).format('llll'),
		'@vuepress/active-header-links': true,
	},
	themeConfig: {
		// lastUpdated: '更新时间',
		search: false, // 禁用默认的搜索框
		// 导航栏
		nav: require('./config/navConfig'),
		// 侧边栏
		sidebar: require('./config/sidebarConfig'),
		// 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
		nextLinks: false,
		// 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
		prevLinks: false
	},
};