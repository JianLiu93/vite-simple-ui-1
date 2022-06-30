const code: string = `
<template>
	<div><Switch v-model:value="checked"/></div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Switch } from 'concise-ui-vue3';

export default {
	components: { Switch },
	setup() {
		const checked = ref(false);
		return { checked }
	}
}
</script>
`
export default code;
