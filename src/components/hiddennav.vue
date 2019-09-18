<template>
	<Affix :offset-top="60" @on-change="change">
		<b-container fluid :class="navclass">
			<div>
				<b-navbar class="nav_bar_show_css" style="padding: 0;height: 2.425rem;">
					<div style="width: 18.75rem;height: 100%;margin: auto;">
						<Dropdown style="margin-left: 1.25rem">
							<a href="javascript:void(0)" class="la_css">
								活动线报
								<Icon type="ios-arrow-down"></Icon>
							</a>
							<DropdownMenu slot="list">
								<DropdownItem>驴打滚</DropdownItem>
								<DropdownItem>炸酱面</DropdownItem>
								<DropdownItem>豆汁儿</DropdownItem>
								<DropdownItem>冰糖葫芦</DropdownItem>
								<DropdownItem>北京烤鸭</DropdownItem>
							</DropdownMenu>
						</Dropdown>
						<Dropdown style="margin-left: 1.25rem;">
							<a href="javascript:void(0)" class="la_css">
								活动线报
								<Icon type="ios-arrow-down"></Icon>
							</a>
							<DropdownMenu slot="list">
								<DropdownItem>驴打滚</DropdownItem>
								<DropdownItem>炸酱面</DropdownItem>
								<DropdownItem>豆汁儿</DropdownItem>
								<DropdownItem>冰糖葫芦</DropdownItem>
								<DropdownItem>北京烤鸭</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>

				</b-navbar>
			</div>
		</b-container>
	</Affix>
</template>

<script>
	export default{
		data(){
			return {
				navclass: "navbar_none",
			}
		},
		methods:{
			
			change(status) {
				if (status) {
					this.navclass = "navbar_show"
				} else {
					this.navclass = "navbar_none"
				}
			
			}
		}
	}
</script>

<style scoped="scoped">
	/* 小屏适配 */
	@media only screen and (max-width: 765px) {
		.navbar_none {
			display: none;
		}
	
		.navbar_show {
			display: none;
		}
	}
	
	/* 大屏适配 */
	@media screen and (min-width: 1200px) {
		.navbar_none {
			display: none;
			padding: 0;
			z-index: 888;
		}
	
		.navbar_show {
			padding: 0;
			z-index: 888;
		}
	
		.nav_bar_show_css {
			background: rgba(255, 255, 255, .30);
		}
		.la_css{
			font-size: 1.125rem;
			 text-decoration:none;
			 color: black;
			 margin-top: 0.505rem;
			 display: block;
		}
	
	}
</style>
