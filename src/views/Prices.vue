<template>
	<div class="prices">
		<div class="prices-header">
			<div class="prices-item">
				<router-link
					class="prices-link"
					to="/"
				/> 
			</div>
			<h1 class="prices-title">
				RIGGING PRICES
			</h1>
		</div>
		<table
			class="prices-table"
			align="center"
			border="1"
		>
			<tr class="prices-table__header">
				<th />
				<th>Headshot</th>
				<th>Bust</th>
				<th>Half-body</th>
				<th>Full-body</th>
			</tr>
			<tr>
				<td class="bold">
					Base price
				</td>
				<td>$200</td>
				<td>$250</td>
				<td>$400</td>
				<td>$500</td>
			</tr>
			<tr>
				<td class="bold">
					Model art
				</td>
				<td>$150</td>
				<td>$200</td>
				<td>$250</td>
				<td>$300</td>
			</tr>
			<tr>
				<td class="bold">
					Head
				</td>
				<td>XYZ</td>
				<td>XYZ</td>
				<td>XYZ</td>
				<td>XYZ</td>
			</tr>
			<tr>
				<td class="bold">
					Body
				</td>
				<td>—</td>
				<td>X</td>
				<td>XY free | Z + $40 | Hips + $40</td>
				<td>XYZ free | Hips + $40</td>
			</tr>
			<tr>
				<td class="bold">
					Mouth
				</td>
				<td>12 shapes</td>
				<td>12 shapes</td>
				<td>12 shapes</td>
				<td>12 shapes</td>
			</tr>
			<tr>
				<td class="bold">
					Eyes
				</td>
				<td>Close + Smile free | Wide open + $15</td>
				<td>Close + Smile free | Wide open + $15</td>
				<td>Close + Smile + Wide open</td>
				<td>Close + Smile + Wide open</td>
			</tr>
			<tr>
				<td class="bold">
					Arms
				</td>
				<td>—</td>
				<td>—</td>
				<td>Idle | Additional movement discussed individually</td>
				<td>Idle | Additional movement discussed individually</td>
			</tr>
			<tr>
				<td class="bold">
					Legs
				</td>
				<td>—</td>
				<td>—</td>
				<td>—</td>
				<td>Knee bend free | Side step +$25</td>
			</tr>
			<tr>
				<td class="bold">
					Animal ears
				</td>
				<td>$15</td>
				<td>$15</td>
				<td>$15</td>
				<td>$10</td>
			</tr>
			<tr>
				<td class="bold">
					Tail
				</td>
				<td>$10</td>
				<td>$10</td>
				<td>$10</td>
				<td>$10</td>
			</tr>
			<tr>
				<td class="bold">
					Wings
				</td>
				<td>$15-50 depending on the complexity</td>
				<td>$15-50 depending on the complexity</td>
				<td>$15-50 depending on the complexity</td>
				<td>$15-50 depending on the complexity</td>
			</tr>
			<tr>
				<td class="bold">
					Physics
				</td>
				<td>XY</td>
				<td>XY</td>
				<td>XY</td>
				<td>XY</td>
			</tr>
			<tr>
				<td class="bold">
					Expressions
				</td>
				<td>1 free</td>
				<td>1 free</td>
				<td>2 free</td>
				<td>3 free</td>
			</tr>
			<tr>
				<td class="bold">
					Animations
				</td>
				<td>—</td>
				<td>—</td>
				<td>—</td>
				<td>1 free</td>
			</tr>
		</table>
		<div class="prices-add">
			<b>* Additional expression $5-15 depending on the complexity</b> 
		</div>
		<div class="prices-add">
			<b>* Additional animation $20-50 depending on the complexity</b>
		</div>
		<div class="prices-add">
			<b>100% pre-payment to take slots for the upcoming month <br />
				50% pre-payment to take slots for the future months <br />
				Payment deadline will increase depending on your place in the queue
			</b>
		</div>

		<div class="prices-add">
			<span class="prices-info">ABOUT COMMISSIONS FOR VISUAL NOVELS</span>
			If you're commissioning me to work on a models for a visual novel you can get the 20% discount if the amount of models is 5 or more. 
			The deadline for such commissions has to be discussed individually. In this case,  the waitlist doesn't matter.
		</div>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Prices extends Vue {
};
</script>

<style lang="scss" scoped>
.prices {
    width: 1100px;
	background-color: $white;
	border-radius: 15px;
    padding: 50px;
    box-sizing: border-box;
	height: 970px;
    display: flex;
    flex-direction: column;
    justify-content: center;
	overflow: scroll;

    &-table {
        border-collapse: collapse;
        & th {
            padding: 10px;
        }
        & td {
            padding: 5px 10px;
        }

        &__header {
            background-color: #e7e7e7;
        }
    }

    &-add {
        text-align: left;
        margin: 10px;

        &:last-child {
            margin-top: 120px;
        }
    }

    &-info {
        font-weight: bold;
        margin-bottom: 5px;
        display: block;
    }

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
}
.bold {
    font-weight: bold;
    background-color: #e7e7e7;
}
</style>
