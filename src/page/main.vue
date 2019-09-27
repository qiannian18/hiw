<template>
	<div>
		<myheader></myheader>
		<!-- 轮播部分 -->
		<b-container fluid style="margin: 0;padding: 0">
			<mycarousel></mycarousel>
		</b-container>
		<myhiddennav></myhiddennav>
		<Divider />
		<!-- 路由 -->
		<router-view></router-view>
	</div>
</template>

<script>
	import {
		myheader,
		mycarousel,
		myhiddennav
	} from "../components"
	export default {
		components: {
			myheader,
			mycarousel,
			myhiddennav
		}
	}
</script>

<style>
</style>
