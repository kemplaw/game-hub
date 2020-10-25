<template>
  <div class="tab-bar-wrapper" :style="wrapperStyle">
    <router-link class="tab-bar-item-wrapper" v-for="tab in tabs" :key="tab.label" :to="tab.path">
      <BaseIcon class="icon" :icon="tab.icon" />
      <span class="text">{{ tab.label }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { usePositionStyle } from './compositions'

interface TheTabBarProps {
  tabs?: any[]
  position: string
  isFixed: boolean
  backgroundColor?: string
}

export default defineComponent({
  name: 'TheTabBarComponent',
  props: {
    // tabs 配置项
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    // 定位位置
    position: {
      type: String,
      default: 'bottom'
    },
    // 是否开启定位
    isFixed: {
      type: Boolean,
      default: true
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      default: '#f3f3f3'
    }
  },
  setup(props: TheTabBarProps) {
    const { position, isFixed, backgroundColor } = toRefs(props)
    const wrapperStyle = computed(() => ({
      ...(usePositionStyle(isFixed, position).value || {}),
      backgroundColor
    }))

    return {
      wrapperStyle
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';

.tab-bar {
  &-wrapper {
    z-index: 9999;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-content: center;
    width: 100%;
    height: 58px;
    background-color: #ffffff;
    @include border1px(#999999);
  }

  &-item-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    background-color: #ffffff;

    &.router-link-exact-active {
      .text {
        color: #e90000;
      }
    }

    .icon {
      flex: 0 0 15px;
      width: 15px;
      height: 15px;
      margin-bottom: 10px;
      background-color: #f00;
    }

    .text {
      font-size: 13px;
      color: #999999;
    }
  }
}
</style>
