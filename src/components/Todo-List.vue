<template>
  <div id="todolist">
    <form @submit.prevent="save()">
      <input type="text" v-model="inputText" /><button type="submit">
        Save
      </button>
    </form>

    <ul>
      <li v-for="item in sortedItems" :key="item.time">
        {{ item.text | capitalize }}
        <button @click="done(item.time)">DONE</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      items: [],
      inputText: "",
      complete: false,
    };
  },

  computed: {
    sortedItems() {
      // console.log(this.items.slice());
      return this.items
        .slice()
        .sort((a, b) => {
          return b.time - a.time;
        })
        .filter((ele) => {
          return ele.complete === false;
        });
    },
  },

  filters: {
    capitalize(val) {
      return val.toUpperCase();
    },
  },

  methods: {
    save() {
      this.items.push({
        text: this.inputText,
        time: Date.now(),
        complete: false,
      });
    },
    done(id) {
      this.items = this.items.map((ele) => {
        if (ele.time === id) {
          ele.complete = true;
        }
        return ele;
      });
    },
  },
};
</script>

<style>
#todolist {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>