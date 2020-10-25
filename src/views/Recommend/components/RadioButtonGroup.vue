<template>
  <div class="radio-button-group-wrapper">
    <div
      class="radio-button-wrapper"
      v-for="radio in options"
      :key="radio.value"
      :class="activedClass(radio.value)"
      @click.passive="handleChange(radio.value)"
    >
      <span class="text">{{ radio.label }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export interface Radio {
  value: any
  label: string
}

export default defineComponent({
  name: 'RadioButtonGroupComponent',
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    // 默认值
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      activedRadio: ''
    }
  },
  created() {
    this.$nextTick(() => this.handleChange((this as any).modelValue))
  },
  methods: {
    activedClass(value: any) {
      return {
        active: value === this.activedRadio
      }
    },
    handleChange(value: any) {
      this.activedRadio = value
      this.$emit('update:model-value', value)
    }
  }
})
</script>

<style lang="scss" scoped>
.radio-button {
  &-group-wrapper {
    display: flex;
    align-items: center;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    margin-right: 12px;
    border: 1px solid #e6e6e6;
    border-radius: 100px;
    transition: all 0.3s;

    &.active {
      border-color: #e90000;
      .text {
        color: #e90000;
      }
    }

    .text {
      white-space: nowrap;
      line-height: 1;
      font-size: 12px;
      color: #464646;
    }
  }
}
</style>
