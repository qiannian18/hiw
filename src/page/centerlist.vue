<template>
	<div>
		<b-container fluid style="padding: 0;">
			<b-row class="justify-content-md-center" style="margin: 0;padding: 0;">
				<b-col lg="10">
					<Breadcrumb>
						<BreadcrumbItem to="/" style="font-size: 1.125rem;">首页</BreadcrumbItem>
						<BreadcrumbItem style="font-size: 1.125rem;">线报</BreadcrumbItem>
					</Breadcrumb>
				</b-col>
				<Divider />
			</b-row>
		</b-container>

		<myarticlelist></myarticlelist>

	</div>

</template>

<script>
	import {
		myhotlist,
		mycontent,
		myfooter
	} from "../components"

	import {
		myarticlelist
	} from "./list/"

	export default {
		components: {
			myhotlist,
			mycontent,
			myfooter,
			myarticlelist
		},
	}
</script>

<style>
</style>
