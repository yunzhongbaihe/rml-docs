<template>
    <div class="theme-container">
        <div class="theme-default-content" style="padding:0 !important;">
            <div style="margin-top:0;">
                <img :src="$withBase('/assets/img/error_404.png')" alt="error_404"/>
                <el-button type="primary" size="mini" @click="goIndexPage">点击回到首页</el-button>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        name: 'Error404',
        methods: {
	        goIndexPage(){
	        	this.$router.push('/');
            }
        }
	}
</script>

<style scoped>
    .theme-default-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .theme-default-content .el-button {
        vertical-align: 10px;
    }
</style>