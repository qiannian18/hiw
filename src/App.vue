<template>
	<div id="app">
		
		
			<myheader></myheader>
			
	
		<!-- 轮播部分 -->
		<b-container fluid style="margin: 0;padding: 0">
			<mycarousel></mycarousel>
		</b-container>

		<b-container fluid>
			<mymenulist></mymenulist>
		</b-container>
		<Divider />
		<!-- <myhiddennav></myhiddennav> -->

		<b-container fluid>
			<myhotlist></myhotlist>
		</b-container>

		<b-container fluid>
		<Divider />
		<mycontent></mycontent>
		</b-container>
		
		<b-container fluid style="height: 17.5rem;margin-top: 1.25rem;background: #515A6E;">
			<b-row class="justify-content-md-center">
				<b-col lg="8">
					<div style="color: #fff;margin-top: 0.625rem;">
						友情链接:
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
		myhiddennav,
		myhotlist,
		mycontent
	} from "./components"
	export default {
		name: 'app',
		components: {
			myheader,
			mycarousel,
			mymenulist,
			myhiddennav,
			myhotlist,
			mycontent
		},
		data() {
			return {
				value3: 0,
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
		ul{
			list-style-type: none;
		}

	}
</style>
