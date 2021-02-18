<template>
	<div class="portfolio">
		<div class="portfolio-header">
			<div class="portfolio-item">
				<router-link
					class="portfolio-link"
					to="/"
				/> 
			</div>
			<h1 class="portfolio-title">
				Portfolio
			</h1> 
		</div>
		<div class="portfolio-container">
			<div class="portfolio-commisions">
				<h2 class="portfolio-headline">
					Commissions
				</h2>
				<img
					class="img"
					src="../assets/img/1.png"
				/>
			</div>
			<div class="portfolio-hobby-wrap">
				<h2 class="portfolio-headline">
					Hobby projects
				</h2>
				<div class="portfolio-hobby">
					<img
						class="img"
						src="../assets/img/2.png"
					/>
					<img
						class="img"
						src="../assets/img/3.png"
					/>
					<img
						class="img"
						src="../assets/img/4.png"
					/>
					<img
						class="img"
						src="../assets/img/5.png"
					/>
					<img
						class="img"
						src="../assets/img/6.png"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Portfolio extends Vue {
};
</script>

<style lang="scss" scoped> 
.portfolio {
    width: 1100px;
    background-color: $white;
    border-radius: 15px;
    padding: 50px 0;
    box-sizing: border-box;
	height: 970px;
    overflow: scroll;

    &-header {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-bottom: 50px;
    }

    &-item {
        width: 50px;
        height: 50px;
        background-image: url('../assets/img/home.svg');
        transition: 1s;
        margin-right: 25px;

        &:hover {
            transform: scale(1.2);
        }
    }

    &-title {
        margin: 0;
    }

    &-link {
        width: 100%;
        height: 100%;
        display: inline-block;
    }

    &-hobby {
        width: 890px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        margin: 0 auto;
        & .img {
            margin-right: 30px;
            margin-bottom: 30px;
            &:last-child {
                margin: 0;
            }
            &:nth-child(4n) {
                margin-right: 0;
            }
        }

        &::after {
            content: "";
            flex: auto;
        }
    }

    &-headline {
        width: 100%;
        margin: 50px 0 30px;
        padding: 10px 0;
        background-color: #e7e7e7;
    }
}

.img {
    width: 200px;
    height: 100%;
    border-radius: 10px;
}
</style>
