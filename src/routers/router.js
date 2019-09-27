import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
	/* mode: "history", */
	routes: [{
		path: "/",
		component: () => import('@/page/main'),
		children: [{
				path: "",
				component: () => import('@/page/home'),
			},
			{
				path: "xianbao",
				component: () => import('@/page/centerlist'),
			},
			
		]
	}, ]
})
export default router
