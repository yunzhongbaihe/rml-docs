<template>
    <div class="features">
        <div class="feature">
            <h2>浪淘沙</h2>
            <p>莫道谗言如浪深，</p>
            <p>莫言迁客似沙沉。</p>
            <p>千淘万漉虽辛苦，</p>
            <p>吹尽狂沙始到金。</p>
        </div>
        <div class="feature">
            <h2>劝学</h2>
            <p>三更灯火五更鸡，</p>
            <p>正是男儿发愤时。</p>
            <p>黑发不知勤学早，</p>
            <p>白首方悔读书迟。</p>
        </div>
        <div class="feature">
            <h2>雪梅</h2>
            <p>梅雪争春未肯降，</p>
            <p>骚人搁笔费评章。</p>
            <p>梅须逊雪三分白，</p>
            <p>雪却输梅一段香。</p>
        </div>
        <div class="feature">
            <h2>长歌行</h2>
            <p>百川东到海，</p>
            <p>何时复西归？</p>
            <p>少壮不努力，</p>
            <p>老大徒伤悲。</p>
        </div>
    </div>
</template>
<script>
	export default {
		name: 'home'
	}
</script>
<script lang="styl" scoped>
    .home .features
        display: flex
        justify-content: space-around
        flex-wrap: nowrap
        text-align center

    .home .feature
        max-width: inherit
</script>