<template>
  <div>
    <!-- <p>{{ $store.state.count }}</p> -->
    <p>{{ count }}</p>

    <div>
      <button @click="add">增加</button>
      <button @click="reduce">减少</button>
    </div>
    ---
    <div>
      <button @click="addAsync">异步增加</button>
      <button @click="reduceAsync">异步减少</button>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store";
/* 
vuex的高级函数用法,简写this.$store中的方法和属性的调用方法
mapState、mapMutations、mapGetters等必须放对象中!!!
mapGetters:只有放在computed中才有效
*/
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  // 因为store是在当前模板中引入的,需要在export default中引入对象store才可以在当前模板中使用
  store,
  data() {
    return {};
  },

  // 方式1
  //   methods: {
  //     add() {
  //       // 第一个参数是方法名
  //       this.$store.commit("add");
  //     },
  //     reduce() {
  //       this.$store.commit("reduce");
  //     }
  //   },

  // 方式2(这种写法不能传递参数)
  //   methods: mapMutations(["add", "reduce"]),
  // es6的扩展方法:
  methods: {
    //   这里是store.js中mutations中的方法名(同步修改)
    ...mapMutations(["add", "reduce"]),
    // 异步修改
    ...mapActions(["addAsync", "reduceAsync"]),

    //   这里是我们自定义的方法
    add2() {
      this.$store.commit("add2", 2);
    }
  },

  // 方式1:
  // computed: {
  //     count() {
  //         return this.$store.state.count + '0';
  //     }
  // },

  //方法2:
  // computed:mapState({
  //     count: state=>state.count
  // })

  //方法3:(这种不能传递参数)
  //   computed: mapState(["count"]),
  // es6的扩展方法:
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
  }
};
</script>

/* 
    这里如果指明了less(预处理语言),需要安装less依赖,否则会报错
 */
<style lang='less' scoped>
</style>