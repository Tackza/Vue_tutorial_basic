<template>
  <div>
    <h1 class="title">Data and Variables</h1>
    <h4>{{ count }}</h4>
    <p>{{ message }}</p>
    <div>{{ isLogin }}</div>
    <button @click="count++">Count ++</button>
    <input type="text" placeholder="Enter a message" v-model="message" />
    <h2 v-if="isLogin">Yahoooo</h2>
    <button @click="isLogin = true">Click show</button>
  </div>
</template>

<script>
export default {
  name: "demo2",
  mounted() {
    this.message = "welcome to thailand";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogin: false,
    };
  },
};
</script>

<style scoped>
.title {
    font-size: 40px;
    color: salmon;
}
</style>