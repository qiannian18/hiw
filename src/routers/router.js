import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	routes: [{
			path: "/index",
			name: "首页",
			component: () => import('@/page/home')
		},
		{
			path: "/",
			name: "首页",
			component: () => import('@/page/home')
		},
		{
			path: "/xianbao",
			name: "线报",
			component: () => import('@/page/centerlist')
		}
	]
})
export default router
