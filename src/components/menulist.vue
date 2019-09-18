<template>
	<b-row align-h="center" style="margin-top: 0.625rem;">
		<b-col lg="6" sm="7" style="padding: 0;">
			<ul class="list_ul">
				<li>
					<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
					<a href="#" class="a_css">我要赚钱</a>
					<a href="#" class="a_css_a">官网</a>
					<Button type="success" class="btn_baozan" ghost @click="value1 = true">查看任务</Button>
				</li>
				<li>
					<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
					<a href="#" class="a_css">活动线报</a>
					<a href="#" class="a_css_a">有奖现金</a>
					<a href="#" class="a_css_a">话费</a>
				</li>
				<li>
					<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
					<a href="#" class="a_css">有好货</a>
					<a href="#" class="a_css_a">0元购</a>
					<a href="#" class="a_css_a">9.9包邮</a>
					<a href="#" class="a_css_a">大额优惠</a>
				</li>
				<li>
					<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
					<a href="#" class="a_css">编程语言</a>
					<a href="#" class="a_css_a">java</a>
					<a href="#" class="a_css_a">python</a>
					<a href="#" class="a_css_a">易语言</a>

				</li>
				<li>
					<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
					<a href="#" class="a_css">软件工具</a>
					<a href="#" class="a_css_a">破解软件</a>
					<a href="#" class="a_css_a">app</a>
				</li>
				<li>
					<Icon type="ios-flame-outline" size="24" color="#2FE293" style="float: left;margin-top: 0.5125rem;margin-left: 0.625rem;" />
					<a href="#" class="a_css">活动线报</a>
					<a href="#" class="a_css_a">有奖现金</a>
					<a href="#" class="a_css_a">话费</a>
				</li>
			</ul>

		</b-col>
		<div class="shuxian">

		</div>
		<b-col lg="4" sm="4" style="padding: 0;">
			<div class="adve_img">

			</div>
		</b-col>
		<Drawer title="做任务赚钱" :closable="false" v-model="value1" :mask="true">
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
	</b-row>
</template>

<script>
	export default {
		data() {
			return {
				value1: false
			}
		}
	}
</script>

<style scoped="scoped">
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
			font-size: 1rem;
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

		.a_css_a {
			margin-left: 0.3125rem;
			margin-top: 0.7rem;
			display: block;
			float: left;
			font-size: 0.825rem;
			text-decoration: none;
			color: #515a6e;
		}

		.a_css_a:hover {
			color: #2FE293;
		}
		.btn_baozan {
			margin-top: 0.4575rem;
			margin-left: 1.56125rem;
		}
		
	}

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
			border-radius: 0.225rem;
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

		.a_css_a {
			margin-left: 0.3125rem;
			margin-top: 0.5875rem;
			display: block;
			float: left;
			font-size: 1rem;
			font-weight: 300;
			text-decoration: none;
			color: #000000;
		}

		.a_css_a:hover {
			color: #2FE293;
		}

		.btn_baozan {
			margin-top: 0.4575rem;
			margin-left: 1.86125rem;
		}

	}
</style>
