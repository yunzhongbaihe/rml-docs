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
		children: ['/js/code', '/js/module', '/js/promise',]
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
		children: ['/vue/code', '/vue/vuex', '/vue/comp', '/vue/router', '/vue/axios', '/vue/slot', '/vue/Vue3.0', '/vue/element-ui']
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
		children: ['/mysql/note',]
	},
	{
		title: 'wechat-mini',
		path: '/wechat-mini/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/wechat-mini/note',]
	},
	{
		title: 'interface',
		path: '/interface/',
		collapsable: false,
		sidebarDepth: 1,
		children: ['/interface/note',]
	},
];
module.exports = sideBars.sort((a, b) => a.title.charCodeAt() - b.title.charCodeAt());
