<template>
  <div v-if="page" class="container">
    <h1>{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  //Second way to change the data in component by adding index as a prop
  props: ['index'],
  inject: ['$pages'],
  created() {
    this.page = this.$pages.getSinglePage(this.$route.params.index);

    //First way to change the data in component by watching the params to change
    // this.$watch(() => this.$route.params, (newParams, oldParams) => {
    //   this.page = this.$pages.getSinglePage(newParams.index);
    // });
  },
  data() {
    return {
      page: null,
    }
  },
  //Second way to change the data in component and watching the index prop to change page data value
  watch: {
    index(newIndex, oldIndex){
      this.page = this.$pages.getSinglePage(newIndex);
    }
  }

}
</script>