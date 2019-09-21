<template>
	<div id="home">

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
		myhotlist,
		mycontent,
		myfooter
	} from "../components"
	export default {
		name: 'app',
		components: {
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
