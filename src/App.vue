<template>
	<div id="app">

		<!-- 嵌套部分 -->
		<router-view></router-view>

		<BackTop :height="100" :bottom="200">
			<div class="top">返回顶端</div>
		</BackTop>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {}
		},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
</style>
<style scoped="scoped">
	/* 小屏适配 */
	@media only screen and (max-width: 765px) {
		.top {
			padding: 10px;
			background: rgba(0, 153, 229, .7);
			color: #fff;
			text-align: center;
			border-radius: 2px;
		}

	}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		.top {
			padding: 10px;
			background: rgba(0, 153, 229, .7);
			color: #fff;
			text-align: center;
			border-radius: 2px;
		}


	}
</style>
