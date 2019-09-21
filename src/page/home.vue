<template>
	<div id="home">
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
			<myhotlist></myhotlist>
		</b-container>

		<b-container fluid>
			<Divider />
			<mycontent></mycontent>
		</b-container>
		<b-container fluid style="height: 17.5rem;margin-top: 1.25rem;background: #515A6E;">
			<myfooter></myfooter>
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
		name: 'app',
		components: {
			myheader,
			mycarousel,
			mymenulist,
			myhiddennav,
			myhotlist,
			mycontent,
			myfooter
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
</style>
