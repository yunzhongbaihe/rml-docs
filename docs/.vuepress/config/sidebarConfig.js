const sideBars = [
	{
		title: 'canvas',
		path: '/canvas/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/canvas/instance',]
	},
	{
		title: 'js',
		path: '/js/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/js/module', '/js/promise',]
	},
	{
		title: 'webpack',
		path: '/webpack/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/webpack/code',]
	},
	{
		title: 'react',
		path: '/react/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/react/code', '/react/redux', '/react/router',]
	},
	{
		title: 'vue',
		path: '/vue/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/vue/code', '/vue/vuex', '/vue/comp', '/vue/router', '/vue/axios']
	},
	{
		title: 'node',
		path: '/node/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/node/express', '/node/instance']
	},
	{
		title: 'electron',
		path: '/electron/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/electron/code',]
	},
	{
		title: 'mysql',
		path: '/mysql/',
		collapsable: false,
		sidebarDepth: 1,
		// children: ['',]
	},
];
module.exports = sideBars.sort((a, b) => a.title.charCodeAt() - b.title.charCodeAt());