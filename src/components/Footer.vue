<template>
	<div class="footer">
		<ul class="footer-list">
			<li class="footer-item">
				<a
					class="footer-link twitter"
					href="#"
				/>
			</li>
			<li class="footer-item">
				<a
					class="footer-link discord"
					href="#"
				/>
			</li>
			<li class="footer-item">
				<a
					class="footer-link gmail"
					href="#"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>

<style scoped lang="scss"></style>