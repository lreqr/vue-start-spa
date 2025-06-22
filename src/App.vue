<template>
  <nav-bar
  />

  <router-view></router-view>

<!--  <div v-show="false">-->

<!--  </div>-->

<!--  <PageViewer-->
<!--      v-if="pages.length > 0"-->
<!--      :page="pages[activePage]"/>-->

<!-- <CreatePage-->
<!--  @page-created="pageCreated">-->
<!-- </CreatePage>-->
</template>
<script>
import PageViewer from "./components/PageViewer.vue";
import NavBar from "./components/NavBar.vue";
import CreatePage from "./components/CreatePage.vue";
export default {
  components: {
    CreatePage,
    PageViewer,
    NavBar,
  },
  methods: {
    pageCreated(pageObj){
      // this.pages.push(pageObj);
    },
  }
}
</script>