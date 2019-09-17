<template>
	<div id="app">
		<b-container fluid>
			<myheader></myheader>
		</b-container>
		<!-- 轮播部分 -->
		<b-container fluid style="margin: 0;padding: 0">
		<mycarousel></mycarousel>

		</b-container>

		<b-container fluid>
			<b-row align-h="center" style="margin-top: 0.625rem;">
				<b-col lg="6" sm="7" style="padding: 0;">
					<ul class="list_ul">
						<li>
							<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
							<a href="#" class="a_css">活动线报</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">有奖现金</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">话费</a>
						</li>
						<li>
							<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
							<a href="#" class="a_css">活动线报</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">有奖现金</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">话费</a>
						</li>
						<li>
							<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
							<a href="#" class="a_css">活动线报</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">有奖现金</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">话费</a>
						</li>
						<li>
							<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
							<a href="#" class="a_css">活动线报</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">有奖现金</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">话费</a>
						</li>
						<li>
							<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
							<a href="#" class="a_css">活动线报</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">有奖现金</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">话费</a>
						</li>
						<li>
							<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
							<a href="#" class="a_css">活动线报</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">有奖现金</a>
							<a href="#" class="a_css" style="font-weight: 400;color: #878787;">话费</a>
						</li>
					</ul>
				</b-col>
				<div class="shuxian">

				</div>
				<b-col lg="4" sm="4" style="padding: 0;">
					<div class="adve_img">

					</div>
				</b-col>


			</b-row>



		</b-container>
	</div>
</template>

<script>
	import {
		myheader,
		mycarousel
	} from "./components"
	export default {
		name: 'app',
		components: {
			myheader,
			mycarousel
		},
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	b-container {
		margin: 0;
		padding: 0;
	}
</style>
<style scoped="scoped">
	/* 小屏适配 */
	@media only screen and (max-width: 765px) {
		.list_ul>li {
			width: 96%;
			margin-left: 2%;
			margin-right: 2%;
			margin-top: 0.3125rem;
			height: 2.875rem;
			background: #F5F5F5;
			border-radius: 0.525rem;
		}

		.a_css {
			margin-left: 0.3125rem;
			margin-top: 0.5875rem;
			display: block;
			float: left;
			font-size: 0.75rem;
			text-decoration: none;
			color: #000000;
		}

		.adve_img {
			width: 100%;
			height: 4rem;
			background: url("https://picsum.photos/1024/480/?image=52") no-repeat;
			background-size: 100% 100%;
		}

		.list_ul {
			list-style: none;
		}

		.shuxian {
			display: none;
		}

	}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		.list_ul>li {
			float: left;
			width: 30%;
			height: 2.875rem;
			margin-top: 0.625rem;
			margin-left: 0.625rem;
			background: #F5F5F5;
			border-radius: 0.525rem;
		}

		.a_css {
			margin-left: 0.3125rem;
			margin-top: 0.5875rem;
			display: block;
			float: left;
			font-size: 1rem;
			font-weight: 600;
			text-decoration: none;
			color: #000000;
		}

		.adve_img {
			width: 100%;
			height: 6rem;
			margin-top: 0.625rem;
			background: url("https://picsum.photos/1024/480/?image=52") no-repeat;
			background-size: 100% 100%;
		}

		.a_css:hover {
			color: #2FE293;
		}

		.list_ul {
			list-style: none;
		}

		.shuxian {
			border-left: solid 1px #ccc;
			height: 4rem;
			margin-top: 1.5375rem;
			margin-right: 3.125rem;
			vertical-align: middle;
			display: inline-block;
		}

	

	
	}
</style>
