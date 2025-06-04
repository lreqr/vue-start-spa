<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label">
          Page title
        </label>
        <input
            type="text"
            class="form-control"
            v-model="pageTitle"
        >
<!--        <input-->
<!--            type="text"-->
<!--            class="form-control"-->
<!--            :value="pageTitle"-->
<!--            @input="(e) => pageTitle = e.target.value"-->
<!--        >-->
      </div>
      <div class="mb-3">
        <label for="" class="form-label">
          Content
        </label>
        <textarea type="text" class="form-control" rows="5"
        v-model="content">
        </textarea>
      </div>
      <div class="mb-3">
        <button
          class="btn btn-primary"
          @click.prevent="pageCreated({pageTitle, content})">
          Create page
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "PageCreated",
  props: ['pageCreated'],
  data() {
    return {
      pageTitle: '',
      content: '',
    }
  }
}
</script>

<style scoped>

</style>