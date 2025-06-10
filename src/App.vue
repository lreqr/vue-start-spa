<template>
  <nav-bar
    v-if="pages.length > 0"
    :pages="pages"
    :active-page="activePage"
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
  created() {
    this.getPages();

    this.$bus.$on('navbarLinkActivated', (index) => {
      this.activePage = index
    });
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    }
  },
  methods: {
    async getPages() {
      let res = await fetch('pages.json');
      let data = await res.json();
      this.pages = data;
    },
    pageCreated(pageObj){
      this.pages.push(pageObj);
    },
  }
}
</script>