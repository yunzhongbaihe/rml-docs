<template>
    <div>
        <div style="text-align:center;">
            <el-button type="primary" size="middle"
                       style="margin-bottom:50px;"
                       @click="$router.push('/note.html')">现在出发</el-button>
            <div style="margin-bottom:30px;"><img src="/rml-docs/assets/img/dadaozhijian.png" width="330" height="80" alt="大道至简"/></div>
            <div><img src="/rml-docs/assets/img/tiandaochouqin.png" width="330" height="80" alt="天道酬勤"/></div>
        </div>
        <div class="footer">
            <span>安徽·黄山·歙县</span>
            <a href="/rml-docs/"><img src="/rml-docs/assets/img/logo3.png" alt=""/></a>
            <span>北京·{{new Date().toLocaleDateString().replace(/\/.+/, '')}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'home'
    }
</script>
<style scoped>
    .footer {
        font-size: 0;
    }

    .footer span {
        font-size: 18px;
        font-weight: bold;
        vertical-align: middle;
    }

    .footer img {
        padding: 0 10px;
        height: 24px;
        vertical-align: -10px;
    }
</style>