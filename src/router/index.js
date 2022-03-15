import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from '../views/DetailsView.vue'
import Create from '../views/Create.vue'

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/details/:id2",
		name: "details",
		component: DetailsView,
		props: true,
	},
	{
		path: "/create",
		name: "create",
		component: Create,
	},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
