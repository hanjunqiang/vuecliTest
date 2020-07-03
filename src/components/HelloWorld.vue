<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入Home路由模板");
    // 不写该方法会导致路由不跳转,或不走beforeRouteLeave:方法,因为路由没有出去一直在该箭头函数中
    next();  //默认为: next(true), 
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开Home路由模板");
    next();
    //怎么在这里使用this? (直接使用是拿不到全局的this的)
    next(vm => {  //vm即this
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.hello {
  color: red;
  background: gray;
}
</style>
