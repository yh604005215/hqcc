<template>
  <button class="yh-button"
  :class="[`yh-button-${type}`,
  {'is-plain' : plain},
  {'is-round' : round},
  {'is-circle' : circle},
  {'is-disabled' : disabled},
  {'is-loading' : loading},
  {[`yh-button-${size}`] : size}]"
  v-bind="{disabled, disabled:loading, autofocus}"
  @click="getClick"
  :type="nativeType"
  >
    <template v-if="loading">
      <i class="yh-icon-loading"></i>
      <span v-if="loading">加载中</span>
    </template>
    <template v-else>
      <i v-if="icon" :class="icon"></i>
      <span v-if="$slots.default"><slot /></span>
    </template>
  </button>
</template>

<script>
import '../assets/scss/button.scss'

export default {
  name: 'yh-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator (val) {
        return /^mini$/.test(val) || /^small$/.test(val) || /^medium$/.test(val)
      }
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    'native-type': {
      type: String,
      validator (val) {
        return /^button$/.test(val) || /^submit$/.test(val) || /^reset$/.test(val)
      }
    }
  },
  methods: {
    getClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
