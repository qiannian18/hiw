<template>
	<div>
		<b-container fluid style="padding: 0;">
			<b-row class="justify-content-md-center" style="margin: 0;padding: 0;">
				<b-col lg="10">
					<Breadcrumb>
						<BreadcrumbItem to="/" style="font-size: 1.125rem;">首页</BreadcrumbItem>
						<BreadcrumbItem style="font-size: 1.125rem;">{{panel}}</BreadcrumbItem>
					</Breadcrumb>
				</b-col>
				<Divider />
			</b-row>
		</b-container>
		<b-container fluid style="padding: 0;">
			<b-row class="justify-content-md-center" style="margin: 0;padding: 0;">
				<myarticlelist></myarticlelist>
				<myriget></myriget>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import {
		myhotlist,
		mycontent,
		myfooter,
	} from "../components"

	import {
		myarticlelist,
		myriget
	} from "./list/"

	import bus from '../routers/eventBus.js'

	export default {
		watch:{
			$router(val){
				console.log(val);
			}
		},
		data() {
			return {
				panel: "",
			}
		},
		components: {
			myhotlist,
			mycontent,
			myfooter,
			myarticlelist,
			myriget,
		},

	}
</script>

<style>
</style>
