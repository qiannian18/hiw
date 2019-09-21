<template>
	<div id="app">
		<myheader></myheader>
		<!-- 轮播部分 -->
		<b-container fluid style="margin: 0;padding: 0">
			<mycarousel></mycarousel>
		</b-container>

		<myhiddennav></myhiddennav>

		<b-container fluid>
			<mymenulist></mymenulist>
		</b-container>

		<Divider />
		
		<router-view></router-view>
		<BackTop :height="100" :bottom="200">
			<div class="top">返回顶端</div>
		</BackTop>
	</div>
</template>

<script>
	import {
		myheader,
		mycarousel,
		mymenulist,
		myhiddennav
	} from "./components"
	export default {
		name: 'app',
		components: {
			myheader,
			mycarousel,
			mymenulist,
			myhiddennav,
		},
		data() {
			return {
				value3: 0,
				Tooltipmaxwidth: "200",
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
