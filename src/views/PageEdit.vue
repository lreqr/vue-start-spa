<template>
<!--  <p>edit {{ route.params.index }}</p>-->
  <p>edit {{ props.index }}</p>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps(['index']);


</script>