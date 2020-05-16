<template></template>
<script>
	export default {
		name: 'sidebarnav',
		created(){
			document.querySelectorAll('.sidebar-sub-headers').forEach(item => {
				if(item && !item.innerHTML){
					item.previousElementSibling.classList.add('active-sign');
				}
			});
		}
	}
</script>
<style scoped></style>