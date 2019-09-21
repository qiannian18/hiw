<template>
	<div>
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
		<b-container fluid>
			<router-view></router-view>
		</b-container>
	</div>

</template>

<script>
	import {
		myheader,
		mycarousel,
		mymenulist,
		myhiddennav,
		myhotlist,
		mycontent,
		myfooter
	} from "../components"
	export default {
		components: {
			myheader,
			mycarousel,
			mymenulist,
			myhiddennav,
			myhotlist,
			mycontent,
			myfooter
		},
	}
</script>

<style>
</style>
