<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My vue</a>
      <ul class="navbar-nav me-auto mb-lg-0">
        <li v-for="(page, index) in publishedPages" class="nav-item mx-2" :key="index">
          <NavbarLink
              :page="page"
              :isActive="activePage === index"
              @click.prevent="navLinkClick(index)"
          >
          </NavbarLink>
        </li>
      </ul>

      <form class="d-flex">
        <button
          class="btn btn-primary"
          @click.prevent="changeTheme()"
          >Toggle</button>
      </form>

    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  components: {
    NavbarLink,
  },
  props: ['pages', 'activePage', 'navLinkClick'],
  data() {
    return {
      theme: 'light',
    }
  },
  created() {
    this.getThemeSetting();
  },
  computed: {
    publishedPages() {
      return this.pages.filter(p => p.published);
    },
  },
  methods: {
    changeTheme() {
      let theme = 'light';

      if (this.theme === 'light'){
        theme = 'dark';
      }

      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem('theme', this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem('theme');

      if (theme){
        this.theme = theme;
      }
    }
  },
}
</script>

<style scoped>
  ul.navbar-nav{
    flex-direction: row;
  }
</style>