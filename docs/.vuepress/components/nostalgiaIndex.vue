<template>
	<div>
		<img src="/rml-docs/assets/img/nostalgia.jpg" alt="">
	</div>
</template>
<script>
	export default {
		name: 'nostalgiaIndex',
		mounted() {
			if(document.querySelector('.page')){
				document.querySelector('.page').classList.add('width_100');
			}
		},
		beforeDestroy() {
			if(document.querySelector('.page')){
				document.querySelector('.page').classList.remove('width_100');
			}
		}
	}
</script>
<style lang="css" scoped>
</style>
