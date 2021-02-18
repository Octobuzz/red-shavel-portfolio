<template>
	<div class="terms">
		<div class="terms-header">
			<div class="terms-item">
				<router-link
					class="terms-link"
					to="/"
				/> 
			</div>
			<h1>Terms of Services</h1> 
		</div>
		<div class="terms-container">
			<h2>GENERAL </h2>
			<ul>
				<li>I have the right to use the model in my portfolio.</li>
				<li>The commissioner should always credit me as the rigger/artist.</li>
				<li>The commissioner is probihited from taking a credit for the work.</li>
				<li>If you're commissioning only the rig you have to provide rig ready .psd file.</li>
				<li>The model will be finished by the end of the month you took a slot in unless  it's an emergency commission.</li>
			</ul>
			<h2>PAYMENT</h2>
			<ul>
				<li>I accept payment only through PayPal.</li>
				<li>The price already includes the rights for commercial use.</li>
				<li>If you don't pay within the deadline specified in the invoice I can remove you from the waitlist.</li>
				<li>By using Paypal Invoice Service, additional price of 4,5% will be added to the total price.</li>
				<li>Refunds are only allowed if I haven't started and are only 50%.</li>
			</ul> 
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Terms extends Vue {
};
</script>

<style lang="scss" scoped>
.terms {
    width: 1100px;
    background-color: $white;
    border-radius: 15px;
    padding: 50px 0;
    box-sizing: border-box;
	height: 970px;

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

    &-container {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &-link {
        width: 100%;
        height: 100%;
        display: inline-block;
    }
}

h1 { 
    margin: 0;
}

ul { 
    width: 400px;
    text-align: left;
    margin: 0 auto 50px;

    li { 
        padding: 5px;
    }
}
</style>
