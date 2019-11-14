import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 初始状态
    count: 100
  },
  mutations: {
    // 处理状态
  },
  getters: {
    // 获取state中的状态
    count: (state) => state.count
  },
  actions: {
    // 提交改变后的状态
  },
  modules: {
    // 不同的store模块,每个模块都拥有自己的state，mutation，action， getter
    /**
      a: moduleA,
      b: moduleB
     */
  }
})
