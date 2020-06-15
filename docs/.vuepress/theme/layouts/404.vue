<template>
    <div class="theme-container">
        <Navbar></Navbar>
        <div class="theme-default-content">
            <div style="margin-top:0;">
                <img :src="$withBase('/assets/img/error_404.png')" alt="error_404"/>
            </div>
        </div>
    </div>
</template>

<script>
	import Navbar from '@theme/components/Navbar.vue'

	export default {
        name: 'Error404',
        components: {
	        Navbar
        }
	}
</script>

<style scoped>
    .navbar {
        position: static;
    }

    .theme-default-content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 !important;
        height: calc(100% - 60px);
    }
</style>