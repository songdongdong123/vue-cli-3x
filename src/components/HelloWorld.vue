<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>{{count}}</h3>
    <button @click="getCount(100)">测试获取state</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    // 获取vuex中的state
    // 全局模块
    ...mapGetters([
      'count',
    ]),

    // 使用命名空间后的使用方式, 可以分模块调用
    // user模块
    ...mapGetters('user', [
      'Type',
    ]),

    // order模块
    
    ...mapGetters('order', [
      'Types',
    ]),
  },
  methods: {
    getCount (number) {
      // 可以使用this.的形式进行访问
      // console.log(this.count)
      // console.log(number)

      console.log(this.Types)
      console.log(this.Type)
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
