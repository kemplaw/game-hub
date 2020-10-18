<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    title: {
      type: String,
      default: 'this is a title'
    }
  },
  setup(prop) {
    const { title } = toRefs(prop)

    onMounted(() => console.log(title.value))

    return {}
  }
})
</script>
