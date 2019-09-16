<template>
	<div id="app">
		<b-container fluid style="margin: 0;padding: 0;">
			<myheader></myheader>
		</b-container>
		<b-container fluid style="margin: 0;padding: 0;height: 21.875rem;">
			<mycarousel></mycarousel>
		</b-container>
		<b-container fluid>
			<router-view></router-view>
		</b-container>
	</div>
</template>

<script>
	import {mycontent,myheader,mycarousel} from "./components"

	export default {
		name: 'app',
		components: {
			mycontent,
			myheader,
			mycarousel
		}
	}
</script>

<style scoped="scoped">

</style>
