<template>
  <div id="app">
    <Header />
    <router-view />
    
    <Footer @onClock="onClock" title="Copyright NOW!!!" color="grey"/>
    <span>{{time}}</span>
  </div>
</template>

<script>
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import moment from 'moment'

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  data(){
    return{
      time : ""
    }
  },
  methods: {
    onClock(value){
      this.time = moment(value).format('MM/DD/YYYY hh:mm:ss')
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
