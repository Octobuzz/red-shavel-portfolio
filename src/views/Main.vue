<template>
	<div class="main">
		<h1 class="main-title">
			Live<span class="red">2D</span> Commissions
		</h1>
		<ul class="main-list">
			<li class="twitter">
				<a
					class="outlink"
					href="https://twitter.com/redshavel"
					target="_blank"
				/>
			</li>
			<li class="gmail">
				<a
					class="outlink"
					href="mailto:redshavel@gmail.com"
					target="_blank"
				/>
			</li>
		</ul>
		<div class="main-blocks">
			<router-link
				to="prices"
				class="main-block"
			>
				<h2 class="main-headline">
					Prices
					<span class="main-headline__cover" />
				</h2>
			</router-link>
			<router-link
				to="/portfolio"
				class="main-block"
			>
				<h2 class="main-headline">
					Portfolio
					<span class="main-headline__cover" />
				</h2>
			</router-link>
		</div>
		<div class="main-footer">
			<router-link
				to="/terms"
				class="main-link"
			>
				Terms & Conditions
			</router-link>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
};
</script>

<style lang="scss" scoped>
.main {
	width: 1100px;
	background-color: $white;
	border-radius: 15px;
	box-sizing: border-box;
	height: 970px;

	&-title {
		font-size: 60px;
		position: relative;
		margin-bottom: 20px;

		&::after {
			content: "";
			height: 5px;
			width: 600px;
			position: absolute;
			left: 50%;
			bottom: -5px;
			transform: translateX(-50%);
			background-color: $red;
		}
	}

	&-list {
		margin: 0 auto 50px;
		width: 140px; 
		padding: 0;
		list-style: none;
		display: flex;
		justify-content: space-between;
	}

	&-blocks {
		display: flex;
		justify-content: center;
		margin-bottom: 80px;
	}

	&-block {
		width: 400px;
		height: 600px;
		color: $black;
		font: inherit;
		text-decoration: none;
		border-radius: 9px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		transition: 1s;
		&:first-child {
			margin-right: 100px;
			background-image: url('../assets/img/pic2.png');
			background-repeat: no-repeat;
		}
		&:last-child {
			background-image: url('../assets/img/pic1.png');
			background-repeat: no-repeat;
		}

		&:hover {
			transform: scale(1.05);
		}
	}

	&-headline {
		width: 100%;
		font-size: 60px;
		position: relative;
		z-index: 10;

		&__cover {
			content: "";
			height: 60px;
			width: 100%;
			position: absolute;
			top: 2px;
			left: 0;
			background-color: $white;
			opacity: .5;
			z-index: -1;
		}
	}

	&-footer {
		padding: 20px 0;
		background-color: #e7e7e7;
		border-radius: 0 0 9px 9px;
	}

	&-link {
		font: inherit;
		color: $black;
		&:hover {
			color: $red;
			transition: color 0.5s ease;
		}
	}
}
.red {
	color: $red;
}

.twitter {
	width: 50px;
	height: 50px;
	background-image: url('../assets/img/twitter.svg');
	transition: 1s;

	&:hover {
		transform: scale(1.2);
	}
}

.gmail {
	width: 50px;
	height: 50px;
	background-image: url('../assets/img/email.svg');
	transition: 1s;

	&:hover {
		transform: scale(1.2);
	}
}

.outlink {
	display: inline-block;
	width: 100%;
	height: 100%;
}
</style>
