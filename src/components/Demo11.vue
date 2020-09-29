<template>
  <div>
    <h1 ref="title">Waiting for change by Ref</h1>
    <input
      type="text"
      ref="input1"
      placeholder="This will be focused automatically"
    />
  </div>
</template>

<script>
export default {
  name: "Demo11",
  mounted() {
      this.$refs["title"].textContent= "Code Camp"
      this.$refs['input1'].focus()
      this.$refs['input1'].value = "123"

  },
};
</script>

<style>
</style>