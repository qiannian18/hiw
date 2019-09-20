<template>
	<b-row class="b-row_class">
		<b-col xl="3" :offset="1" style="padding: 0;">
			<div style="margin-top: 2.5rem" class="img_item_div">
				<Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots"
				 :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow" :height="setting.height" :loop="setting.loop">
					<CarouselItem class="demo_item">
						<div class="demo-carousel">
							<img src="../img/timg.jpg" style="width: 100%;height: 100%;" />
						</div>
					</CarouselItem>
					<CarouselItem>
						<div class="demo-carousel">
							<img src="../img/timg.jpg" style="width: 100%;height: 100%;" />
						</div>
					</CarouselItem>
				</Carousel>
			</div>

		</b-col>
		<b-col xl="5" class="col_css">
			<div>
				<div class="title_css">
					<Icon type="md-flame" />
					最新更新
				</div>
				<div class="card_css">
					<ul>
						<li>
							<div>
								<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top" :max-width="Tooltipmaxwidth">
									<div class="remen_div_1">
										<Tag color="success" style="float: left;">网赚鸡汤</Tag>
										<a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
									</div>
									<div class="date_css">
										19/9/19
									</div>
								</Tooltip>
							</div>
						</li>
					</ul>
				</div>

				<div class="card_css">
					<ul>
						<li>
							<div>
								<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top" :max-width="Tooltipmaxwidth">
									<div class="remen_div_1">
										<Tag color="success" style="float: left;">网赚鸡汤</Tag>
										<a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
									</div>
									<div class="date_css">
										19/9/19
									</div>
								</Tooltip>
							</div>
						</li>
					</ul>

				</div>
			</div>
		</b-col>
		<b-col xl="2" class="col_css">
			<div>
				<div class="title_css">
					<Icon type="md-flame" />
					热门排行
				</div>
				<div class="hotlist_class">
					<ul>
						<li>
							<div>
								<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top" :max-width="Tooltipmaxwidth">
									<div class="ban_div_1">
										<Badge :count="13" class-name="title_one" style="float: left;margin-top: 0.1875rem;"></Badge>
										<a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
									</div>
									<div class="date_css_ban">
										19/9/19
									</div>
								</Tooltip>
							</div>

						</li>
					</ul>
				</div>
			</div>
		</b-col>
	</b-row>
</template>

<script>
	export default {
		data() {
			return {
				value3: 0,
				Tooltipmaxwidth: "200",
				setting: {
					loop: true,
					autoplay: true,
					autoplaySpeed: 3000,
					dots: 'inside',
					radiusDot: true,
					trigger: 'click',
					arrow: 'never',
					height: 400
				},
			}
		}
	}
</script>

<style scoped="scoped">
	/* 小屏适配 */
	@media only screen and (max-width: 765px) {
		.col_css {
			padding: 0;
		}

		.b-row_class {
			padding: 0;
			margin: 0;
		}

		.img_item_div {
			display: none;
		}

		.card_css {
			width: 100%;
			float: left;
			height: 25rem;
			border: 1px solid #dcdee2;
			background: #fff;
			border-radius: 0.3125rem;
		}

		ul>li {
			height: 2.075rem;
			padding-top: 0.3125rem;
			overflow: hidden;
			color: #000000;
		}

		.a_text_css {
			display: block;
			text-decoration: none;
			color: #000000;
		}

		.hotlist_class {
			padding: 0.0625rem;
			width: 100%;
			float: left;
			margin-right: 1%;
			height: 25rem;
			border: 1px solid #dcdee2;
			background: #fff;
			border-radius: 0.3125rem;
		}

		.title_one {
			background: #5cb85c !important;
		}

		.title_css {
			width: 7.25rem;
			margin: auto;
			font-size: 1.2625rem;
			margin-bottom: 0.625rem;
		}

		.date_css {
			width: 18%;
			height: 100%;
			float: right;
		}

		.remen_div_1 {
			width: 80%;
			float: left;
		}

		.ban_div_1 {
			width: 80%;
			float: left;
		}

		.date_css_ban {
			width: 18%;
			height: 100%;
			float: right;
		}
	}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		.col_css {
			padding-left: 0.3125rem;
			padding-right: 0.3125rem;
		}

		.b-row_class {
			padding: 0;
			margin: 0;

		}

		.demo-carousel {
			height: 25rem;
		}

		.card_css {
			padding: 0.0625rem;
			width: 49%;
			float: left;
			margin-right: 1%;
			height: 25rem;
			border: 1px solid #dcdee2;
			background: #fff;
			border-radius: 0.3125rem;
		}

		ul>li {
			height: 2.075rem;
			padding-top: 0.3125rem;
			overflow: hidden;
			color: #000000;
		}

		.a_text_css {
			display: block;
			text-decoration: none;
			color: #000000;
		}

		.a_text_css:hover {
			color: #FFD39B;
		}

		.hotlist_class {
			padding: 0.0625rem;
			width: 100%;
			float: left;
			margin-right: 1%;
			height: 25rem;
			border: 1px solid #dcdee2;
			background: #fff;
			border-radius: 0.3125rem;
		}

		.title_one {
			background: #5cb85c !important;
		}

		.title_css {
			width: 7.25rem;
			margin: auto;
			font-size: 1.2625rem;
			margin-bottom: 0.625rem;
		}

		.date_css {
			width: 18%;
			height: 100%;
			float: right;
		}

		.remen_div_1 {
			width: 80%;
			float: left;
		}

		.ban_div_1 {
			width: 75%;
			float: left;
		}

		.date_css_ban {
			width: 23%;
			height: 100%;
			float: right;
		}


	}
</style>
