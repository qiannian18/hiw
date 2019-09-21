<template>
	<div id="app">
		<router-view></router-view>
		<BackTop :height="100" :bottom="200">
			<div class="top">返回顶端</div>
		</BackTop>
	</div>
</template>

<script>
	export default {

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
		ul {
			list-style-type: none;
		}

		ul>li {
			float: left;
			margin: 0 0.1875rem;
		}

	}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		ul {
			list-style-type: none;
		}

		ul>li {
			float: left;
			margin: 0 0.3125rem;
		}

		.top {
			padding: 10px;
			background: rgba(0, 153, 229, .7);
			color: #fff;
			text-align: center;
			border-radius: 2px;
		}

	}
</style>
