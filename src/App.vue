<template>
	<div id="app">
		<b-container fluid>
			<myheader></myheader>
		</b-container>
		<!-- 轮播部分 -->
		<b-container fluid style="margin: 0;padding: 0">
			<mycarousel></mycarousel>
		</b-container>
		<!-- 菜单部分 -->
		<b-container fluid>
			<mymenulist></mymenulist>
		</b-container>
	</div>
</template>

<script>
	import {
		myheader,
		mycarousel,
		mymenulist
	} from "./components"
	export default {
		name: 'app',
		components: {
			myheader,
			mycarousel,
			mymenulist
		},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	b-container {
		margin: 0;
		padding: 0;
	}
</style>
<style scoped="scoped">
	/* 小屏适配 */
	@media only screen and (max-width: 765px) {}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {}
</style>
