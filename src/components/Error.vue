<template>
  <div class="moreRouter">
    <h1>{{ msg }}</h1>
    <p>此页面不存在</p>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      msg: "Error 404"
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
.moreRouter {
  background: red;
}
</style>
