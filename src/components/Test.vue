<template>
  <div class="moreRouter">
    <h1>{{ msg }}</h1>

    <!-- 子路由会替换这里的标签, 但是这里写多个标签没用,必须在App.vue中 -->
    <!-- <router-view></router-view> -->
    <!-- <router-view name="left" style="float:left;width:50%;height:300px;background:gray"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background:yellow"></router-view> -->
    
    接收到URL传递的参数:
    {{$route.params.id}}
    {{$route.params.title}}



  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      msg: "I am 单页面多路由区域操作"
    };
  },
  mounted() {
    const a = 1;
    // a=2;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.moreRouter {
  background: red;
}
</style>
