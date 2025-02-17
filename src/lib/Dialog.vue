<template>
<div v-if="visible">
  <Teleport to="body">
    <div class="concise-dialog-mask" @click="onClickMask"></div>	
    <div class="concise-dialog-wrapper">
      <div class="concise-dialog">
    	<header>
    		<slot name="title"></slot>
    		<span class="concise-dialog-close" @click="close"></span>
    	</header>
    	<main>
    		<slot name="content"></slot>
    	</main>
    	<footer>
    		<Button level="main" @click="onOK">OK</Button>
    		<Button level="normal" @click="onCancel">Cancel</Button>
    	</footer>
      </div>
    </div>
  </Teleport>
</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';

export default {
	components: { Button },
	props: {
		visible: {
			type: Boolean,
			default: false
		},
		closeOnClickMask: {
			type: Boolean,
			default: true
		},
		OK: {
			type: Function
		},
		cancel: {
			type: Function
		}
	},
	setup(props, context) {
		const close = () => {
			context.emit('update:visible', false);
		}
		const onClickMask = () => {
			if(props.closeOnClickMask) close();
		}
		const onOK = () => {
			if(props.OK && (props.OK() !== false)) close();
		}
		const onCancel = () => {
			if(props.cancel) props.cancel();
			close();
		}
		return { close, onClickMask, onOK, onCancel }
	},
}
</script>

<style lang="scss">
$border-color: #d9d9d9;

.concise-dialog {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 18em;
  max-width: 98%;

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 11;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 12;
  }

  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  >main {
    padding: 12px 16px;
  }

  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

  }
}
</style>