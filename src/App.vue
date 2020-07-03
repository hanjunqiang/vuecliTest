<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->

    <div class="vflex">
      <router-link to="/">首页</router-link>
      <!-- 父路由跳转 -->
      <router-link to="/hi">Hi页面</router-link>
      <!-- 跳子路由方式1: 先写父路由"/hi",然后拼上子路由 -->
      <router-link to="/hi/hi1">Hi1页面</router-link>
      <!-- 跳子路由方式2: 绑定对象中的name指定子路由的name -->
      <!-- <router-link :to="{name:'hi2'}">Hi2页面</router-link> -->
      <!-- params传递参数 -->
      <router-link :to="{name:'hi2', params:{id:'001'}}">Hi2页面</router-link>

      <router-link to="/test">单页面多路由测试</router-link>
      <router-link to="/test2">重定向1-回首页</router-link>
      <router-link to="/test3/003/test3测试">重定向2-回Test-传递参数</router-link>

      <router-link to="/pp/001/pp测试">url传参</router-link>
      <router-link to="/count">vuex</router-link>
      <router-link to="/promise">Promise</router-link>

      <p>{{ $route.name }}</p>
    </div>

    <!-- 路由过渡动画 -->
    <transition name="fade" mode="out-in">
      <!-- App.vue中必须要有个标签<router-view>,否则路由跳转无效,导致页面不能更新 -->
      <router-view></router-view>
    </transition>

    <!-- 单页面多路由区域,必须把router-view写在App.vue中才有效,布局竟然也在这里,待优化-TODO -->
    <router-view name="left" style="float:left;width:50%;height:300px;background:gray"></router-view>
    <router-view name="right" style="float:left;width:50%;height:300px;background:yellow"></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  padding: 0;
  margin: 0;
}

.vflex {
  display: flex;
  flex-direction: column;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
