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
		<myhiddennav></myhiddennav>


		<b-container fluid class="hotlist">
			<myhotlist></myhotlist>
		</b-container>

	</div>
</template>

<script>
	import {
		myheader,
		mycarousel,
		mymenulist,
		myhiddennav,
		myhotlist
	} from "./components"
	export default {
		name: 'app',
		components: {
			myheader,
			mycarousel,
			mymenulist,
			myhiddennav,
			myhotlist
		},
		data() {
			return {
				value3: 0,
			}
		},
		methods: {

		}
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
	@media only screen and (max-width: 765px) {}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {

		.hotlist {
			padding: 0;
			height: 56.25rem;
			margin-top: 1.225rem;
			background: #f8f8f9;
		}

		

	}
</style>
