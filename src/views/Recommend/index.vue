<template>
  <div class="wrapper">
    <div class="filter-wrapper">
      <RadioButtonGroup v-model="filterValue" :options="recommendListFilter" />
    </div>
    <div class="game-list-wrapper">
      <div class="game-item-wrapper" v-for="n in 10" :key="n">
        <div class="game-cover-wrapper"></div>
        <div class="game-info-wrapper">
          <div class="game-info">
            <div class="game-title-wrapper">
              <span class="title">游戏标题</span>
              <div class="badge">
                <i class="icon"></i>
                <div class="score">100</div>
              </div>
            </div>
            <div class="game-en-title-wrapper">GAME TITLE</div>
            <span class="game-label-wrapper">全区中文</span>
          </div>
          <div class="game-price-wrapper">
            <span class="discount-price-wrapper">￥123</span>
            <span class="original-price-wrapper">￥321</span>
            <span class="area-wrapper">(日本区)</span>
            <div class="discount-percent-wrapper">
              <div class="discount-wrapper">50%折扣</div>
              <div class="deadline-wrapper">剩余6天</div>
            </div>
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
@import '../../styles/mixin.scss';

.filter-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  z-index: 9999;
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.1);
}

.game {
  &-list-wrapper {
    margin-top: 44px;
  }
  &-item-wrapper {
    display: flex;
  }

  &-cover-wrapper {
    flex: 0 0 130px;
    width: 130px;
    height: 130px;
    margin: 10px;
    border-radius: 4px;
    background-color: #f3f3f3;
  }

  &-info-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    width: 1px;
    padding: 10px 0;
    @include border1px(#f0f0f0, 'bottom');
  }

  &-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;

    .title {
      font-weight: bold;
      color: #000;
    }

    .badge {
      display: flex;
      align-items: center;
      .icon {
        flex: 0 0 12px;
        width: 12px;
        height: 12px;
        margin-right: 5px;
        background-color: #f00;
      }
      .score {
        border: 2px solid #ffcc33;
        background-color: #333333;
        color: #fff;
        font-size: 12px;
      }
    }
  }

  &-en-title-wrapper {
    margin: 5px 0;
    font-size: 13px;
    color: #ababab;
  }

  &-label-wrapper {
    display: inline-block;
    background-color: #ececec;
    color: #ff0000;
    font-size: 12px;
    padding: 5px;
  }

  &-price-wrapper {
    display: flex;
    align-items: flex-end;

    .discount-price-wrapper {
      line-height: 1;
      margin-right: 5px;
      font-size: 14px;
      color: #ff0000;
    }

    .original-price-wrapper {
      line-height: 1;
      font-size: 12px;
      color: #999999;
      text-decoration: line-through;
    }

    .area-wrapper {
      white-space: nowrap;
      font-size: 12px;
      color: #9c9c9c;
      transform: scale(0.8);
    }

    .discount-percent-wrapper {
      text-align: center;
      padding: 3px 15px;
      margin-left: auto;
      color: #fff;
      background-color: #f00;
      border-radius: 4px 0 0 4px;
      .discount-wrapper {
        font-size: 14px;
      }
      .deadline-wrapper {
        font-size: 12px;
        transform: scale(0.7);
      }
    }
  }
}
</style>
