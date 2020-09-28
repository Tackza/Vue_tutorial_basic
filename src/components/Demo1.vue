<template>
  <div app="demo1">
    <h1>Event and Method</h1>
    <button v-on:click="clickMe">ClickME</button>
    <button v-on:click="clickMe2('Welcome to vue.js')">ClickME2</button>
    <button @click="clickMe2('Welcome to vue.js')">ClickME3</button>
    <h3>{{ getTimeStamp() }}</h3>
  </div>
</template>

<script>
export default {
  name: "demo1",
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      console.log("initialization");
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(mes) {
      alert(mes);
    },
    getTimeStamp() {
      return Date();
    },
  },
};
</script>


<style>
</style>