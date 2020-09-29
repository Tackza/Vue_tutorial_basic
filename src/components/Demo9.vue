<template>
  <div>
    <li v-for="(item, index) in ['Angular', 'React', 'Vue']" :key="index">
      {{ item }}
    </li>
    <hr />
    <ul>
      <li v-for="(item, index) in fronted" :key="index">
        {{ item.name }} : {{ item.price }}
      </li>
    </ul>
    <hr />
    <div v-for="({ name, price }, index) in fronted" :key="index">
      {{ name }} : {{ price }}
    </div>
    <hr />

    <!-- insertTodo Dynamic -->

    <input type="text" placeholder="Title" v-model="course.title" /> <br />
    <input type="number" placeholder="Price" v-model="course.price" />
    <button @click="addCourse">Submit</button>
    <div v-for="(course, index) in dynamic" :key="index">
      {{ course.title }} : {{ course.price }}
      <button @click="removeCourse(index)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo9",
  data() {
    return {
      fronted: [
        { name: "Angular", price: 10 },
        { name: "React", price: 20 },
        { name: "Vue", price: 30 },
      ],
      course: { title: "", price: 0 },
      dynamic: [],
    };
  },
  methods: {
    addCourse() {
      this.dynamic.unshift(this.course);
      this.course = {title : "" , price : 0}
    },
    removeCourse(idx){
        this.dynamic = this.dynamic.filter((item,index) => index !== idx)
    }
  },
};
</script>

<style>
</style>