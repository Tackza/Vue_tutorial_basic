<template>
  <div>
    <h1 class="title">Dictionary and Array Data</h1>
    <div>{{ account.username }} {{ account.password }}</div>
    <div>{{ courses }}</div>
    <ul>
      <li v-for="(item, index) in courses" :key="index">{{index+1}}. {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo3",
  data() {
    return {
      account: {
        username: "admin",
        password: "1234",
      },
      courses: ["angular", "react", "vuejs", "flutter"],
    };
  },
};
</script>

<style>
li {
    color : red
}
</style>