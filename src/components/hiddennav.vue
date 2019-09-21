<template>
	<Affix @on-change="change">
		<b-container fluid style="padding: 0;" :class="navclass">
			<div>
				<b-navbar toggleable="lg" class="navbar_header">
					<b-navbar-brand href="#">Hi网</b-navbar-brand>
					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav style="margin: auto;" class="search_nav">
							<input type="text" class="serch_css" />
							<button type="button" class="serch_btn">搜索</button>
						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</div>
		</b-container>
	</Affix>
</template>
<script>
	export default {
		data() {
			return {
				navclass: "nav_none",
			}
		},
		methods: {
			change(status) {
				if (status) {
					this.navclass = "nav_show"
				} else {
					this.navclass = "nav_none"
				}

			}
		}
	}
</script>

<style scoped="scoped">
	@media only screen and (max-width: 765px) {
		.navbar_header {
			background: rgba(255, 255, 255, .25);
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
			background: #fff;
			border-bottom: 0.03125rem solid #dcdee2;
		}

		.nav_hidden {
			display: none;
		}

		.nav_hidden2 {}


		.serch_css {
			height: 2.8rem;
			width: 28.75rem;
			border: 0rem;
			padding-left: 0.3125rem;
			background: #dcdee2;
			/* background: rgba(255, 255, 255, .30); */
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

		.nav_none {
			display: none;
		}

		.nav_show {
			display: block;
		}
	}
</style>
