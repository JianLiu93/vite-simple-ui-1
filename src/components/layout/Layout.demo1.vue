<template>
	<div>
		<con-row class="row">
			<con-col><div class="content bg-dark"></div></con-col>
		</con-row>
		<con-row class="row">
			<con-col :span="8"><div class="content bg-dark"></div></con-col>
			<con-col :span="8"><div class="content bg-light"></div></con-col>
			<con-col :span="8"><div class="content bg-dark"></div></con-col>
		</con-row>
		<con-row class="row">
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6"><div class="content bg-light"></div></con-col>
			<con-col :span="6"><div class="content bg-dark"></div></con-col>
			<con-col :span="6"><div class="content bg-light"></div></con-col>
		</con-row>
		<con-row class="row">
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
			<con-col :span="4"><div class="content bg-dark"></div></con-col>
			<con-col :span="4"><div class="content bg-light"></div></con-col>
		</con-row>
	</div>
</template>

<script lang="ts">
import ConCol from '../../lib/ConCol.vue';
import ConRow from '../../lib/ConRow.vue';

export default {
	components: { ConCol, ConRow },
	setup() {
	}
}
</script>

<style lang="scss" scoped>
	.con-row {
		display: flex;
		height: 40px;
		margin-bottom: 20px;
		.con-col {
			border-radius: 4px;
			overflow: hidden;
		}
		.content {
			height: 40px;
		}
		.bg-dark {
			background: #40a9ff;
		}
		.bg-light {
			background: #73c0ff;
		}
	}
</style>
