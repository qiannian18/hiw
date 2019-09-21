<template>
	<b-row class="justify-content-md-center">
		<b-col lg="8">
			<div style="color: #fff;margin-top: 0.625rem;">
				<div style="float: left;">
					友情链接:
				</div>
				<div style="float: left;margin-left: 0.625rem;">
					<ul>
						<li>
							<a href="">阿里云</a>
						</li>
						<li>
							<a href="">阿里云</a>
						</li>
						<li>
							<a href="">阿里云</a>
						</li>
						<li>
							<a href="">阿里云</a>
						</li>
						<li>
							<a href="">阿里云</a>
						</li>
						<li>
							<a href="">阿里云</a>
						</li>
						<li>
							<a href="">阿里云</a>
						</li>
					</ul>
				</div>
			</div>
		</b-col>
	</b-row>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	/* 小屏适配 */
	@media only screen and (max-width: 765px) {
		ul {
			list-style-type: none;
		}

		ul>li {
			float: left;
			margin: 0 0.1875rem;
		}

	}

	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		ul {
			list-style-type: none;
		}

		ul>li {
			float: left;
			margin: 0 0.3125rem;
		}

		.top {
			padding: 10px;
			background: rgba(0, 153, 229, .7);
			color: #fff;
			text-align: center;
			border-radius: 2px;
		}

	}
</style>
