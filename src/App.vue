<template>
	<div id="app">
<<<<<<< HEAD
		
=======
		<b-container fluid style="margin: 0;padding: 0;">
			<myheader></myheader>
		</b-container>
		<b-container fluid style="margin: 0;padding: 0;height: 21.875rem;">
			<mycarousel></mycarousel>
		</b-container>
		<b-container fluid>
			<router-view></router-view>
		</b-container>
>>>>>>> 39616ae008359a05037fd5e9bc6592b2cd9fe45d
	</div>
</template>

<script>
<<<<<<< HEAD
	
	export default {
		name: 'app',
		components: {
			
=======
	import {mycontent,myheader,mycarousel} from "./components"

	export default {
		name: 'app',
		components: {
			mycontent,
			myheader,
			mycarousel
>>>>>>> 39616ae008359a05037fd5e9bc6592b2cd9fe45d
		}
	}
</script>

<style scoped="scoped">

</style>
