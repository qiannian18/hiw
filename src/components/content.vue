<template>
	<div>
		<b-row class="justify-content-md-center">
			<b-col lg="10">
				<img src="../img/bg.png" style="width: 100%;height: 6.25rem;" />
			</b-col>
		</b-row>
		<Divider />
		<b-row class="justify-content-md-center">
			<b-col lg="3">
				<div style="color: #01A962;font-size: 1.375rem;">
					活动线报
				</div>
				<div class="content_class">
					<ul>
						<li v-for="item in 15">
							<div>
								<Tooltip :content="data.title" placement="top" :max-width="Tooltipmaxwidth">
									<div class="content_css">
										<Tag :color="data.labelcolor" style="float: left;">{{data.label}}</Tag>
										<a href="#" class="a_text_css">{{data.title}}</a>
									</div>
									<div class="date_css">
										{{data.date}}
									</div>
								</Tooltip>
							</div>
						</li>
					</ul>
				</div>
			</b-col>
			<b-col lg="3">
				<div style="color: #01A962;font-size: 1.375rem;">
					软件工具
				</div>
				<div class="content_class">
					<ul>
						<li v-for="item in 15">
							<div>
								<Tooltip :content="data.title" placement="top" :max-width="Tooltipmaxwidth">
									<div class="content_css">
										<Tag :color="data.labelcolor" style="float: left;">{{data.label}}</Tag>
										<a href="#" class="a_text_css">{{data.title}}</a>
									</div>
									<div class="date_css">
										{{data.date}}
									</div>
								</Tooltip>
							</div>
						</li>
					</ul>
				</div>
			</b-col>
			<b-col lg="3">
				<div style="color: #01A962;font-size: 1.375rem;">
					编程语言
				</div>
				<div class="content_class">
					<ul>
						<li v-for="item in 15">
							<div>
								<Tooltip :content="data.title" placement="top" :max-width="Tooltipmaxwidth">
									<div class="content_css">
										<Tag :color="data.labelcolor" style="float: left;">{{data.label}}</Tag>
										<a href="#" class="a_text_css">{{data.title}}</a>
									</div>
									<div class="date_css">
										{{data.date}}
									</div>
								</Tooltip>
							</div>
						</li>
					</ul>
				</div>
			</b-col>
		</b-row>
		<Divider class="div_isshow"/>
		<b-row class="justify-content-md-center">
			<b-col lg="3">
				<div style="color: #01A962;font-size: 1.375rem;">
					官方出品
				</div>
				<div class="content_class">
					<ul>
						<li v-for="item in 15">
							<div>
								<Tooltip :content="data.title" placement="top" :max-width="Tooltipmaxwidth">
									<div class="content_css">
										<Tag :color="data.labelcolor" style="float: left;">{{data.label}}</Tag>
										<a href="#" class="a_text_css">{{data.title}}</a>
									</div>
									<div class="date_css">
										{{data.date}}
									</div>
								</Tooltip>
							</div>
						</li>
					</ul>
				</div>
			</b-col>
			<b-col lg="3">
				<div style="color: #01A962;font-size: 1.375rem;">
					秒杀好货
				</div>
				<div class="content_class">
					<ul>
						<li v-for="item in 15">
							<div>
								<Tooltip :content="data.title" placement="top" :max-width="Tooltipmaxwidth">
									<div class="content_css">
										<Tag :color="data.labelcolor" style="float: left;">{{data.label}}</Tag>
										<a href="#" class="a_text_css">{{data.title}}</a>
									</div>
									<div class="date_css">
										{{data.date}}
									</div>
								</Tooltip>
							</div>
						</li>
					</ul>
				</div>
			</b-col>
			<b-col lg="3">
				<div style="color: #01A962;font-size: 1.375rem;">
					网络资讯
				</div>
				<div class="content_class">
					<ul>
						<li v-for="item in 15">
							<div>
								<Tooltip :content="data.title" placement="top" :max-width="Tooltipmaxwidth">
									<div class="content_css">
										<Tag :color="data.labelcolor" style="float: left;">{{data.label}}</Tag>
										<a href="#" class="a_text_css">{{data.title}}</a>
									</div>
									<div class="date_css">
										{{data.date}}
									</div>
								</Tooltip>
							</div>
						</li>
					</ul>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value3: 0,
				Tooltipmaxwidth: "200",
				data: {
					"title": "万利棋牌1078二开棋牌游戏组件下载+双端APP，精华二开的界面UI挺不错",
					"label": "网赚鸡汤",
					"labelcolor": "success",
					"date": "19/9/19"
				}
			}
		},
	}
</script>

<style scoped="scoped">
	/* 小屏适配 */
	@media only screen and (max-width: 765px) {
		.content_class {
			height: 31.4375rem;
			border: 1px solid #dcdee2;
			border-radius: 0.3125rem;

		}

		ul>li {
			height: 2.075rem;
			padding-top: 0.3125rem;
			overflow: hidden;
			color: #000000;
		}

		.content_css {
			width: 82%;
			float: left;
		}


		.a_text_css {
			display: block;
			text-decoration: none;
			color: #000000;
		}

		.a_text_css:hover {
			color: #FFD39B;
		}

		.date_css {
			width: 18%;
			height: 100%;
			float: right;
		}

		.div_isshow {
			display: none;
		}

	}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		.content_class {
			height: 31.4375rem;
			border: 1px solid #dcdee2;
			border-radius: 0.3125rem;

		}

		ul>li {
			height: 2.075rem;
			padding-top: 0.3125rem;
			overflow: hidden;
			color: #000000;
		}

		.content_css {
			width: 85%;
			float: left;
		}


		.a_text_css {
			display: block;
			text-decoration: none;
			color: #000000;
		}

		.a_text_css:hover {
			color: #FFD39B;
		}

		.date_css {
			width: 14%;
			height: 100%;
			float: right;
		}

	}
</style>
