<template>
  <h4>Pages</h4>
  <div class="text-end">
    <router-link
        to="/pages/create"
        class="btn btn-primary btn-sm"
        >
      New page
    </router-link>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link text</th>
        <th>Is published</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(page, index) in $pages.getAllPages()"
        :key="index"
        @click="goToPage(index)"
      >
        <td>{{ page.pageTitle }}</td>
        <td>{{ page.link.text }}</td>
        <td>{{ page.published ? 'Yes' : 'No' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
//setup for Composition API
import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";

//ref example of counter
//const counter = ref(0); //{value: 0}

const data = reactive({counter: 0});
const $pages = inject('$pages');
const router = useRouter()

function click(){
  data.counter++;
}

function goToPage(index){
  router.push({path: `pages/${index}/edit`});
}

</script>

<style scoped>

.table.table-hover tr:hover{
  cursor: pointer;
}

</style>