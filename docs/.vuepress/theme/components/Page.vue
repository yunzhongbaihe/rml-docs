<template>
    <main class="page">
        <slot name="top"></slot>
        <Content class="theme-default-content"></Content>
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
		props: ['sidebarItems']
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
</style>