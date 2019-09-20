<template>
	<Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots"
	 :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow" :easing="setting.easing" :loop="setting.loop">
		<CarouselItem>
			<div class="height_img_carouseitem">
				<img src="../img/bg.png" class="carousel_img_css" />
			</div>
		</CarouselItem>
		<CarouselItem>
			<div class="height_img_carouseitem">
				<img src="../img/bg.png" class="carousel_img_css" />
			</div>
		</CarouselItem>
		<CarouselItem>
			<div class="height_img_carouseitem">
				<img src="../img/bg.png" class="carousel_img_css" />
			</div>
		</CarouselItem>
		<CarouselItem>
			<div class="height_img_carouseitem">
				<img src="../img/bg.png" class="carousel_img_css" />
			</div>
		</CarouselItem>
	</Carousel>
</template>

<script>
	export default {
		data() {
			return {
				value3: 0,
				setting: {
					loop: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: 'inside',
					radiusDot: true,
					trigger: 'click',
					arrow: 'hover',
					easing: "ease"
				}
			}
		},
	}
</script>

<style scoped="scoped">
	/* 小屏适配 */
	@media only screen and (max-width: 765px) {
		.height_img_carouseitem {
			height: 18.75rem;
		}

		.carousel_img_css {
			width: 100%;
			height: 100%;
		}
	}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		.height_img_carouseitem {
			height: 28.125rem;
		}

		.carousel_img_css {
			width: 100%;
			height: 100%;
		}
	}
</style>
