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
				<b-col xl="3" :offset="1" style="padding: 0;">
					<div style="margin-top: 2.5rem">
						<Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots"
						 :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow" :height="setting.height" :loop="setting.loop">
							<CarouselItem>
								<div class="demo-carousel">
									<img src="./img/timg.jpg" style="width: 100%;height: 100%;" />

								</div>
							</CarouselItem>
							<CarouselItem>
								<div class="demo-carousel">
									<img src="./img/timg.jpg" style="width: 100%;height: 100%;" />
								</div>
							</CarouselItem>
						</Carousel>

					</div>

				</b-col>
				<b-col xl="5">
					<div>
						<div style="width: 7.25rem;margin: auto;color: red;font-size: 1.2625rem;margin-bottom: 0.625rem;">
							<Icon type="md-flame" />
							最新更新
						</div>
						<div class="card_css">
							<ul>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
										<div style="margin-left: 0.3125rem;">
											<Badge status="error" style="float: left;"/>
											 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
										</div>
									</Tooltip>
								</li>
								<li>
									<div style="border: 0.0625rem solid red;">
										<Tooltip content="万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，" placement="top-start" :max-width="Tooltipmaxwidth">
											<div style="margin-left: 0.3125rem;border: 0.0625rem solid red;width: 70%;">
												<Badge status="error" style="float: left;"/>
												 <a href="#" class="a_text_css">万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错，</a>
											</div>
											<div style="width: 30%;height: 100%;">
												<span>9849</span>
											</div>
											
										</Tooltip>
									</div>
								
								</li>
							</ul>

						</div>

						<div class="card_css">
						</div>
					</div>
				</b-col>
				<b-col xl="2">
					<div>
						<div style="width: 7.25rem;margin: auto;font-size: 1.2625rem; margin-bottom: 0.625rem;">
							<Icon type="md-flame" />
							热门排行
						</div>
						<div style="width:100%;float: left;height: 25rem;border: 0.0625rem solid #dcdee2;background: #fff;" :dis-hover="true">
						</div>
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
				value3: 0,
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
				Tooltipmaxwidth: "200",
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
			width: 80%;
			text-decoration: none;
			color: #000000;
		
		}

		.a_text_css:hover {
			color: #FFD39B;
		}

	}
</style>
