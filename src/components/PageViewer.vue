<template>
  <div class="container">
    <h1>Page title</h1>
    <p>{{ $route.params.index }}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params);
  }

}
</script>