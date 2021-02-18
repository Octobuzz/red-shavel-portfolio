import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Main.vue';
import Terms from '@/views/Terms.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Main',
		component: Main
	},
	{
		path: '/terms',
		name: 'Terms',
		component: Terms
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
