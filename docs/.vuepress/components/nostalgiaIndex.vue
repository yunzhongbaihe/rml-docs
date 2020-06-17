<template>
    <div class="nostalgiaWrap">
        <div class="imgs">
            <img src="/rml-docs/assets/img/nostalgia_1.1.png"/>
            <img src="/rml-docs/assets/img/nostalgia_1.2.png"/>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'nostalgiaIndex'
	}
</script>

<style lang="css" scoped>
    .imgs {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 500px;
    }

    .imgs img:first-child {
        margin-bottom: 20px;
    }
</style>
