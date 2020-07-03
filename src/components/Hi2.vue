<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>接收到id:{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'Hi2',
  data () {
    return {
      msg: `我是子路由Hi2`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
