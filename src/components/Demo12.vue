<template>
  <div>
    <h2>{{ 1234 | currency("THB") }}</h2>
    <h2>{{ 200000000 | bytes }}</h2>
    <h2>{{ "codecamp" | capitalize({ onlyFirstLetter: true }) }}</h2>
    <h2>{{ [1, 2, 3] | reverseArray }}</h2>
  </div>
</template>

<script>
export default {
  name: "Demo12",

  filters: {
    reverseArray(value) {
      return value.slice().reverse();
    },
  },
};
</script>

<style>
</style>