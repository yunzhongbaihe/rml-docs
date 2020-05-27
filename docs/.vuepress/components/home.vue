<template>
    <div style="text-align:center;">
        <div><img src="/rml-docs/assets/img/dadaozhijian.png" width="300" alt="大道至简"/></div>
        <div><img src="/rml-docs/assets/img/tiandaochouqin.png" width="300" alt="天道酬勤"/></div>
        <a href="/note" class="now">现在出发</a>
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
</style>