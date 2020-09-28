<template>
  <div>
    <h1>Binding</h1>
    <img :src="imgURL" :height="height" />
    <div>
      <a :href="link"> My Website</a>
    </div>
    <div :class="[errorClass, important]">CodeMobile</div>
    <div :style="{ color, fontSize }">Facebook</div>
    <div :style="styleObj">Binding style object</div>
    <div :style="isActive ? styleObj : ''">Toggle Test</div>
    <button @click="isActive = !isActive">Toggle active</button>
  </div>
</template>

<script>
export default {
  name: "demo5",
  data() {
    return {
      imgURL:
        "https://image.freepik.com/free-vector/beautiful-gold-star-background-arranged-decorating-various-celebrations_41084-382.jpg",
      height: 200,
      link: "http://www.google.com",
      errorClass: "error",
      important: "important",
      color: "green",
      fontSize: "30px",
      styleObj: {
        backgroundColor: "yellow",
        color: "white",
      },
      isActive: false,
    };
  },
};
</script>

<style>
.error {
  background: red;
  /* color : white */
}
.important {
  color: black;
}
</style>