<template>
	<div id="app">
		<b-container fluid style="padding: 0;margin: 0;">
			<b-navbar toggleable="lg" class="navbar_header" fixed="top">
				<b-navbar-brand href="#">NavBar</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav style="margin: auto;" class="search_nav">
							<input type="text" class="serch_css"/>
							<button type="button" class="serch_btn">搜索</button>	
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
						<img src="https://picsum.photos/1024/480/?image=52" style="width: 100%;height: 100%;"/>
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel" style="height: 100%;">
						<img src="https://picsum.photos/1024/480/?image=52" style="width: 100%;height: 100%;"/>
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel" style="height: 100%;">
						<img src="https://picsum.photos/1024/480/?image=52" style="width: 100%;height: 100%;"/>
					</div>
				</CarouselItem>
				<CarouselItem>
					<div class="demo-carousel" style="height: 100%;">
						<img src="https://picsum.photos/1024/480/?image=52" style="width: 100%;height: 100%;"/>
					</div>
				</CarouselItem>
			</Carousel>

		</b-container>
		
		<b-container fluid style="background: #004085;height: 81.25rem">
			
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
					height: 300
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
	b-container{
		margin: 0;
		padding: 0;
	}
</style>
<style scoped="scoped">
	.navbar_header {
		background: rgba(255, 255, 255, .25);
	}
	@media screen and (min-width: 765px){
		.serch_css{
				width: 30.55rem;
		}
	}
	.serch_css{
		height: 2.8rem;
		border: 0rem;
		padding-left: 0.3125rem;
		background: rgba(255, 255, 255, .30);
		outline:none;
		border-radius: 0.625rem;
	}
	.search_nav{
		position: relative;
	}
	.search_nav>button{
		 position: absolute;
		    right:2%;
		    top:18%;
	}
	.serch_btn{
		color: #fff;
		font-size: 0.9375rem;
		background: linear-gradient(to right,#B23AEE , #AB82FF);
		border: 0rem;
		height: 1.975rem;
		width: 3.525rem;
		outline:none;
		border-radius: 0.525rem;
	}

</style>
