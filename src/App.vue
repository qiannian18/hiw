<template>
	<div id="app">
		<b-container fluid>
			<b-navbar toggleable="lg" class="navbar_header" fixed="top">
				<b-navbar-brand href="#">NavBar</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav style="margin: auto;" class="search_nav">
						<input type="text" class="serch_css" />
						<button type="button" class="serch_btn">搜索</button>
					</b-navbar-nav>
					<b-navbar-nav>
						<button type="button" class="btn_tg">投稿</button>
					</b-navbar-nav>

				</b-collapse>
			</b-navbar>
		</b-container>
		<!-- 轮播部分 -->
		<b-container fluid style="margin: 0;padding: 0;">
			<Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots"
			 :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow" :height="setting.height">
				<CarouselItem>
					<div class="demo-carousel" style="height: 100%;">
						<img src="https://picsum.photos/1024/480/?image=52" style="width: 100%;height: 100%;" />
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel" style="height: 100%;">
						<img src="https://picsum.photos/1024/480/?image=52" style="width: 100%;height: 100%;" />
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel" style="height: 100%;">
						<img src="https://picsum.photos/1024/480/?image=52" style="width: 100%;height: 100%;" />
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel" style="height: 100%;">
						<img src="https://picsum.photos/1024/480/?image=52" style="width: 100%;height: 100%;" />
					</div>
				</CarouselItem>
			</Carousel>

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
				<b-col lg="4" sm="4" style="padding: 0;">
					<div class="adve_img">

					</div>
				</b-col>


			</b-row>



		</b-container>
	</div>
</template>

<script>
	import './css/icon.css'
	export default {
		name: 'app',
		components: {

		},
		data() {
			return {
				value3: 0,
				setting: {
					autoplay: false,
					autoplaySpeed: 2000,
					dots: 'inside',
					radiusDot: true,
					trigger: 'click',
					arrow: 'hover',
					height: 350
				}
			}
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
		.navbar_header {
			background: rgba(255, 255, 255, .25);
		}

		.serch_css {
			width: 30.55rem;
		}
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
		.serch_css {
			height: 2.8rem;
			width: 100%;
			border: 0rem;
			padding-left: 0.3125rem;
			background: rgba(255, 255, 255, .30);
			outline: none;
			border-radius: 0.625rem;
		}
		.search_nav {
			position: relative;
		}
		
		.search_nav>button {
			position: absolute;
			right: 2%;
			top: 18%;
		}
		.serch_btn {
			color: #fff;
			font-size: 0.9375rem;
			font-family: "Helvetica Neue";
			background: linear-gradient(to left, #01A962, #2FE293);
			border: 0rem;
			height: 1.975rem;
			width: 3.525rem;
			outline: none;
			border-radius: 0.525rem;
		}
		.btn_tg {
			color: #fff;
			font-size: 0.9375rem;
			font-family: "Helvetica Neue";
			background: linear-gradient(to left, #01A962, #2FE293);
			border: 0rem;
			height: 1.875rem;
			width: 100%;
			outline: none;
			border-radius: 0.525rem;
		}

	}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		.navbar_header {
			background: rgba(255, 255, 255, .25);
		}
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
		.serch_css {
			height: 2.8rem;
			width: 25.75rem;
			border: 0rem;
			padding-left: 0.3125rem;
			background: rgba(255, 255, 255, .30);
			outline: none;
			border-radius: 0.625rem;
		}
		.search_nav {
			position: relative;
		}
		
		.search_nav>button {
			position: absolute;
			right: 2%;
			top: 18%;
		}
		.serch_btn {
			color: #fff;
			font-size: 0.9375rem;
			font-family: "Helvetica Neue";
			background: linear-gradient(to left, #01A962, #2FE293);
			border: 0rem;
			height: 1.975rem;
			width: 3.525rem;
			outline: none;
			border-radius: 0.525rem;
		}
		.btn_tg {
			color: #fff;
			font-size: 0.9375rem;
			font-family: "Helvetica Neue";
			background: linear-gradient(to left, #01A962, #2FE293);
			border: 0rem;
			height: 1.875rem;
			width: 5.625rem;
			outline: none;
			border-radius: 0.525rem;
		}
		

	}

/* 	.btn_tg {
		color: #fff;
		font-size: 0.9375rem;
		font-family: "Helvetica Neue";
		background: linear-gradient(to left, #01A962, #2FE293);
		border: 0rem;
		height: 1.875rem;
		width: 5.625rem;
		outline: none;
		border-radius: 0.525rem;
	} */

	.list_ul {
		list-style: none;
	}

/* 	.adve_img {
		width: 100%;
		height: 6rem;
		margin-top: 0.625rem;
		background: url("https://picsum.photos/1024/480/?image=52") no-repeat;
		background-size: 100% 100%;
	} */

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

	.a_css:hover {
		color: #2FE293;
	}
</style>
