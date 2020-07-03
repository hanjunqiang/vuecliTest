<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view class="red"></router-view>
  </div>
</template>

<script>
export default {
  name: "Hi",
  data() {
    return {
      msg: `Welcome to Mr.Han's Blog`
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

.red {
  background: red;
}
</style>
