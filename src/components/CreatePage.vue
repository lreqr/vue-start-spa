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
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-control">
            Link text
          </label>
          <input type="text"
                 class="form-control"
                 v-model="link.text">
        </div>
        <div class="mb-3">
          <label for="" class="form-control">
            Link URL
          </label>
          <input type="text"
                 class="form-control"
                 v-model="link.url">
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="published">
            <label class="form-check-label" for="gridCheck1">
              Published
            </label>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <button
            class="btn btn-primary"
            :disabled="isFormInvalid"
            @click.prevent="submitForm">
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
  computed: {
    isFormInvalid() {
      return !this.pageTitle || !this.content || !this.link.text || !this.link.url;
    }
  },
  data() {
    return {
      pageTitle: '',
      content: '',
      link: {
        text: '',
        url: '',
      },
      published: false,
    }
  },
  methods: {
    submitForm() {
      if (!this.pageTitle || !this.content || !this.link.text || !this.link.url) {
        alert('Please fill the form.');
        return;
      }

      this.pageCreated({
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.link.text,
          url: this.link.url,
        },
        published: this.published,
      });

      this.pageTitle = '';
      this.content = '';
      this.link = {
        text: '',
        url: '',
      };
      this.published = false;
    }
  },
  watch: {
    pageTitle(newPageTitle, oldPageTitle){
      if (this.link.url === oldPageTitle){
        this.link.url = newPageTitle;
      }
    }
  }
}
</script>

<style scoped>

</style>