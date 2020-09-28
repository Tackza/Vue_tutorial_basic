<template>
  <div>
    <h1>Form input and V model</h1>
    <form @submit="submit">
      <!-- ทำการตัด ช่องว่าง อัตโนมัติ  .trim -->
      <div>
        <label for="firstname">Firstname : </label>
        <input
          type="text"
          v-model.trim="applicant.firstname"
          name="firstname"
        />
      </div>

      <!-- จะยังไม่แสดงค่า จนกว่าจะเกิด event ==> .lazy -->

      <div>
        <label for="lastname">Lastname : </label>
        <input type="text" v-model.lazy="applicant.lastname" name="lastname" />
      </div>

      <!-- แปลงค่า ออกมาเปนตัวเลขจริง .number -->
      <div>
        <label for="age">Age : </label>
        <input v-model.number="applicant.age" type="number" />
      </div>

      <div>
        <label for="sex">male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
        <label for="sex">female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <div>
        <select name="course" v-model="applicant.course">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
      </div>

      <!-- สามารถทำให้ปุ่มมี ออฟชั่นเสริม ex( Alt + Click) -->
      <!-- หากมี ออฟชั่นเสริม ต้องใส่ .exact ให้กับการคลิกปกติ -->
      <button type="submit">Submit</button>
      <button type="button" @click.exact="clear" @click.alt="useDefault">
        Clear
      </button>
    </form>

    <div style="margin-top: 16px; color: green">#spy {{ applicant }}</div>
  </div>
</template>

<script>
export default {
  name: "demo6",
  data() {
    return {
      applicant: {
        firstname: "",
        lastname: "",
        sex: "male",
        course: "react",
        age: 0,
      },
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        firstname: "",
        lastname: "",
        sex: "male",
        course: "react",
        age: 0,
      };
    },
    useDefault() {
      this.applicant = {
        firstname: "UNKNOW",
        lastname: "UNKNOW",
        sex: "male",
        course: "react",
        age: 0,
      };
    },
  },
};
</script>

<style>
</style>