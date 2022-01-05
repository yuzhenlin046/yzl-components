<template>
  <div>
    例子组件
    {{ msg }}
    <ul>
      <li
        v-for="(item, index) in propArr"
        :key="index"
        @click="clickEvent(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',  // 组件名字
  props: {
    msg: {
      type: String,
      default: 'Hello shishi' // 默认值
    },
    propArr: {
      type: Array,
      required: true // 必传字段
    }
  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    clickEvent (val) { // 暴漏点击事件
      this.$emit('clickEvent', val)
    }
  }
}
</script>

<style scoped>
</style>
