<template>
  <div>
    <span class="footer" :style="{ color }">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    setInterval(() => {
      this.$emit("onClock", Date());
    }, 1000);
  },
  props: ["title", "color"],
};
</script>

<style>
.footer {
  color: violet;
}
</style>