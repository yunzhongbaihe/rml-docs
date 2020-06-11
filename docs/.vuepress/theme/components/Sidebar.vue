<template>
    <aside class="sidebar">
        <NavLinks/>
        <slot name="top"/>
        <!--<SidebarLinks :depth="0" :items="items"/>-->
        <el-menu
            :collapse="isCollapse"
            unique-opened
            :collapse-transition="false"
            router
            :default-active="defaultActive"
            :default-openeds="defaultOpeneds"
            background-color="#333744"
            text-color="#fff"
            active-text-color="#409EFF">
            <el-submenu v-for="item in items" :key="item.title" :index="item.path" @click="onSubmenuClick(item.path)">
                <template slot="title">
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="subItem in item.children" :key="subItem.key" :index="subItem.path"
                              @click="onMenuItemClick(subItem.path)">
                    <template slot="title">
                        <span>{{subItem.title}}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
        <slot name="bottom"/>
    </aside>
</template>

<script>
	import SidebarLinks from '@theme/components/SidebarLinks.vue'
	import NavLinks from '@theme/components/NavLinks.vue'

	export default {
		name: 'Sidebar',
		components: {SidebarLinks, NavLinks},
		props: ['items'],
        data(){
			return {
				isCollapse: false,
                defaultActive: '',
				defaultOpeneds: []
            }
        },
        created(){
			this.defaultActive = this.$route.path;
        },
        methods: {
			onMenuItemClick(path){
				this.defaultActive = path;
            },
	        onSubmenuClick(path){
				this.defaultOpeneds = [];
				this.defaultOpeneds.push(path);
            }
        },
        watch: {
			$route(to, from){
				if(to.path === '/note.html'){
				    this.defaultActive = '';
					this.defaultOpeneds = [];
				}
			}
        }
	}
</script>

<style lang="stylus">
    .sidebar {
        width: 200px !important
        overflow: hidden
        ul {
            padding 0
            margin 0
            list-style-type none
        }
        a {
            display inline-block
        }
        .nav-links {
            display none
            border-bottom 1px solid $borderColor
            padding 0.5rem 0 0.75rem 0
            a {
                font-weight 600
            }
            .nav-item, .repo-link {
                display block
                line-height 1.25rem
                font-size 1.1em
                padding 0.5rem 0 0.5rem 1.5rem
            }
        }
        & > .sidebar-links {
            padding 1.5rem 0
            & > li > a.sidebar-link {
                font-size 1.1em
                line-height 1.7
                font-weight bold
            }
            & > li:not(:first-child) {
                margin-top .75rem
            }
        }
        .el-menu {
            width: 215px
            border-right: 0
            height: 100%
            overflow: hidden
            overflow-y auto
            .el-submenu__icon-arrow {
                right: auto
                left: 160px
            }
        }
    }

    @media (max-width: $MQMobile) {
        .sidebar {
            .nav-links {
                display block
                .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after {
                    top calc(1rem - 2px)
                }
            }
            & > .sidebar-links {
                padding 1rem 0
            }
        }
    }
</style>
