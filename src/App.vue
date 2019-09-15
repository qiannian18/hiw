<template>
	<div id="app">
		<b-container fluid>
			<myheader></myheader>
		</b-container>
		<b-container fluid>
			<router-view></router-view>
		</b-container>
		<b-container fluid>
			<router-view></router-view>
		</b-container>
	</div>
</template>

<script>
	import myheader from "./components/header.vue"
	export default {
		name: 'app',
		components: {
			myheader,
		}
	}
</script>

<style scoped>


</style>
