<template>
  <div class="wrapper">
    <RadioButtonGroup v-model="filterValue" :options="recommendListFilter" />

    <div class="game-list-wrapper">
      <div class="game-cover-wrapper"></div>
      <div class="game-info-wrapper">
        <div class="game-title-wrapper">游戏标题</div>
        <div class="game-en-title-wrapper">GAME TITLE</div>
        <span class="game-label-wrapper">全区中文</span>
        <div class="game-price-wrapper">
          <span class="discount-price-wrapper">￥123</span>
          <span class="original-price-wrapper">￥321</span>
          <span class="area-wrapper">(日本区)</span>
          <div class="discount-percent-wrapper">
            <span class="discount-wrapper">50%折扣</span>
            <span class="deadline-wrapper">剩余6天</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RadioButtonGroup } from './components'
import { Radio } from './components/RadioButtonGroup.vue'

export default defineComponent({
  name: 'RecommendComponent',
  components: {
    RadioButtonGroup
  },
  setup() {
    const filterValue = ref(1)
    const recommendListFilter = ref<Radio[]>([
      {
        value: 1,
        label: '精选'
      },
      {
        value: 2,
        label: '全部'
      },
      {
        value: 3,
        label: '美区'
      },
      {
        value: 4,
        label: '日区'
      },
      {
        value: 5,
        label: '港区'
      },
      {
        value: 6,
        label: '史低'
      }
    ])

    return {
      filterValue,
      recommendListFilter
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 15px;
}
</style>
