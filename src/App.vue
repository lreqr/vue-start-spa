<template>

  <nav-bar/>

  <router-view></router-view>

</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  methods: {
    pageCreated(pageObj){
      // this.pages.push(pageObj);
    },
  }
}
</script>