<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ Math.random() }}</div>

    <button @click="timeStamp = Date.now()">Update timeStamp</button>
  </div>
</template>

<script>
export default {
  name: "Demo10",
  data() {
    return {
      count: 0, 
    };
  },
  created() {
    this.timeStamp = 0;
  },
  mounted() {
    setInterval(() => {
      console.log("TimeStamp" + this.timeStamp)
    }, 1000);
  },
};
</script>

<style>
</style>