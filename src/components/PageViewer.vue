<template>
  <div class="container">
    <h1>Page title</h1>
    <p>content</p>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default(rawProps){
        return {
          pageTitle: '',
          content: '',
        };
      }
    }
  },

}
</script>