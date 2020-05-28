<template>
    <div>
        <div style="text-align:center;">
            <div><img src="/rml-docs/assets/img/dadaozhijian.png" width="300" alt="大道至简"/></div>
            <div><img src="/rml-docs/assets/img/tiandaochouqin.png" width="300" alt="天道酬勤"/></div>
            <a href="/rml-docs/note.html" class="now">现在出发</a>
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
    .now {
        display: inline-block;
        margin-top: 50px;
        width: 120px;
        line-height: 50px;
        background-color: #0088ee;
        color: #fff;
        border-radius: 4px;
        font-weight: bold;
    }

    .now:active {
        box-shadow: inset 0 0 3px 1px #003388;
    }

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