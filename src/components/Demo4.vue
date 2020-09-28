<template>
  <div>
    <h1>Computed vs Methods</h1>
    <h2>{{ firstname }}</h2>
    <h2>{{ lastname }}</h2>
    <p>{{ fullname }}</p>
    <h3>Random from computed property : {{ getRandomNo }}</h3>
    <h3>Random from computed property : {{ getRandomNo }}</h3>
    <h3>Random from methods property : {{ getRandomNo1() }}</h3>
    <h3>Random from methods property : {{ getRandomNo1() }}</h3>
  </div>
</template>

<script>
export default {
  name: "demo4",
  data() {
    return {
      firstname: "pongsatorn",
      lastname: "Bheungnoi",
    };
  },
  methods: {
    getRandomNo1() {
      return Math.random();
    },
  },

  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getRandomNo() {
      return Math.random();
    },
  },
};
</script>

<style>
</style>