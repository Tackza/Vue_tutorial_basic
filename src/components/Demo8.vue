<template>
  <div>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
<!-- v-if ไม่แสดงออกมาและไม่ render ค่านั้นออกมาด้วย -->
    <div v-if="isShow">Blink 1</div>
    <div v-else>Blink 2</div>
<!-- v show  ไม่แสดงออกมา เพราะ เปน  display : none -->
    <div v-show="isShow">Blink 1</div>
  </div>
</template>

<script>
export default {
  name: "Demo8",
  data() {
    return {
      type: "C",
      isShow: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.isShow = !this.isShow;
    }, 500);
  },
};
</script>

<style>
</style>