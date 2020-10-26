<template>
  <div class="home-wrapper">
    <router-view></router-view>
    <TheTabBar :tabs="tabs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TheTabBar } from './components'

export default defineComponent({
  name: 'AppComponent',
  components: {
    TheTabBar
  },
  setup() {
    const tabs = ref([
      { icon: '', label: '游戏推荐', path: 'recommend' },
      { icon: '', label: '发现游戏', path: 'discovery' },
      { icon: '', label: '游戏社区', path: 'community' },
      { icon: '', label: '我的', path: 'my' }
    ])

    return {
      tabs
    }
  }
})
</script>

<style lang="scss" scoped>
.home-wrapper {
  padding-bottom: 58px;
}
</style>
