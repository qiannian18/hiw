<template>
	<b-col lg="7" style="padding: 0;">
		<div class="article_div" v-for="item in 10">
			<div class="article_img">
				<img :src="data.img" style="width: 100%;height: 100%;" />
			</div>
			<div class="article_title">
				这里是标题
			</div>
			<div class="article_label">
				这里是标签
			</div>
			<div class="article_content">
				这里是内容
			</div>
			<div class="article_auth">
				作者：qiannian
			</div>

		</div>
	</b-col>
</template>

<script>
	export default {
		data() {
			return {
				data:{"img":"https://static.runoob.com/images/mix/img_mountains_wide.jpg","title":"这里是标题是标题","content":"这里是内容这里是内容","auth":"这里是作者"}
			}
		},
	}
</script>

<style scoped="scoped">
	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		.article_div {
			height: 9.375rem;
			padding: 0.3125rem;
			margin-top: 0.3125rem;
			border: 1px solid #dcdee2;
		}

		.article_img {
			height: 100%;
			width: 30%;
			float: left;
		}

		.article_title {
			width: 55%;
			height: 30%;
			float: left;
			margin-left: 0.625rem;
		}

		.article_label {
			width: 14%;
			height: 30%;
			float: right;
		}

		.article_content {
			width: 69%;
			height: 50%;
			float: left;
			margin-left: 0.625rem;
		}

		.article_auth {
			width: 69%;
			height: 20%;
			float: left;
			margin-left: 0.625rem;
		}
	}
</style>
