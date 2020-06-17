<template>
    <main class="page">
        <slot name="top"></slot>
        <Content :class="contentClass"></Content>
        <PageEdit></PageEdit>
        <PageNav v-bind="{sidebarItems}"></PageNav>
        <slot name="bottom"></slot>
    </main>
</template>

<script>
	import PageEdit from '@theme/components/PageEdit.vue'
	import PageNav from '@theme/components/PageNav.vue'

	export default {
		components: {PageEdit, PageNav},
		props: ['sidebarItems'],
        computed: {
	        contentClass(){
		        const {frontmatter} = this.$page;
	        	return [
	        		'theme-default-content',
                    {
                    	'reset-code': frontmatter.textcodeRestStyle
                    }
                ]
            }
        },
	}
</script>

<style lang="stylus">
    @require '../styles/wrapper.styl'

    .page{
        float: right
        padding-left: 0
        padding-bottom 0
        display block
        width calc(100% - 200px)
    }

    @media (max-width: 1200px){
        .page {
            width: 100%
        }

        .theme-container.sidebar-open{
            .page {
                width calc(100% - 200px)
            }
        }
    }

    .theme-default-content {
        &.reset-code {
            .language-text {
                background-color: #fff

                &:after {
                    border-right: 0
                    background-color: #fff
                }

                code {
                    color: #999
                    border-bottom: 1px dashed #999
                    letter-spacing 2px
                }

                .line-numbers-wrapper {
                    color: #38f
                }
            }
        }
    }
</style>