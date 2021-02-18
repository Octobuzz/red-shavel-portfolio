import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Main.vue';
import Terms from '@/views/Terms.vue';
import Prices from '@/views/Prices.vue';
import Portfolio from '@/views/Portfolio.vue';

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
	{
		path: '/prices',
		name: 'Prices',
		component: Prices
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: Portfolio
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
