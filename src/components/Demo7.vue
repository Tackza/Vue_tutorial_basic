<template>
  <div>
    <Clock>
      <span style="color: blue">เวลาปัจจุบัน</span>
    </Clock>

    <Clock>
      <span style="color: red">เวลาปัจจุบัน</span>
    </Clock>

    <Clock />

    <Clock>
      <span style="color: salmon">เวลาปัจจุบัน</span>
    </Clock>

    
  </div>
</template>

<script>
import Clock from "../components/Clock";
export default {
  name: "Demo7",
  components: {
    Clock,
  },
};
</script>
 
<style>
</style>