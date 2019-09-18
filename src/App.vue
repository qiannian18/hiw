<template>
	<div id="app">
		<b-container fluid>
			<myheader></myheader>
		</b-container>
		<!-- 轮播部分 -->
		<b-container fluid style="margin: 0;padding: 0">
			<mycarousel></mycarousel>
		</b-container>
		<!-- 菜单部分 -->
		<b-container fluid>
			<mymenulist></mymenulist>
		</b-container>
		<myhiddennav></myhiddennav>


		<b-container fluid class="hotlist">
			<b-row class="b-row_class">
				<b-col xl="4" :offset="1" style="padding: 0;">
					<div>
						<div style="width: 7.25rem;margin: auto;color: red;font-size: 1.2625rem;margin-bottom: 0.625rem;">
							<Icon type="md-flame" />
							热门推荐

						</div>
						<Card style="width:49%;float: left;margin-right: 1%;height: 25rem" :dis-hover="true">
						</Card>
						<Card style="width:49%;float: left;margin-left: 1%;height: 25rem" :dis-hover="true">
						</Card>

					</div>
				</b-col>
				<b-col xl="4">
					<div>
						<div style="width: 7.25rem;margin: auto;color: red;font-size: 1.2625rem;margin-bottom: 0.625rem;">
							<Icon type="md-flame" />
							热门推荐
						</div>
						<Card style="width:49%;float: left;margin-right: 1%;height: 25rem" :dis-hover="true">
						</Card>
						<Card style="width:49%;float: left;margin-left: 1%;height: 25rem" :dis-hover="true">
						</Card>
					</div>
				</b-col>
				<b-col xl="2">
					<div>
						<div style="width: 7.25rem;margin: auto;font-size: 1.2625rem; margin-bottom: 0.625rem;">
							<Icon type="md-flame" />
							风云榜
						</div>
						<Card style="width:100%;float: left;height: 25rem" :dis-hover="true">
						</Card>
					</div>
				</b-col>
			</b-row>

		</b-container>

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
			myhiddennav
		},
		data() {
			return {

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
	@media only screen and (max-width: 765px) {}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {

		.hotlist {
			padding: 0;
			height: 56.25rem;
			margin-top: 1.225rem;
			background: #f8f8f9;
		}
		.b-row_class{
			padding: 0;
			margin: 0;
			
		}
		
	}
</style>
