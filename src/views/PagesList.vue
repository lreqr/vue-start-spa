<template>
  <p>{{data.counter}}</p>
  <button @click.prevent="click">Click</button>
</template>

<script setup>
//setup for Composition API
import {ref, reactive} from "vue";

//ref example of counter
//const counter = ref(0); //{value: 0}

const data = reactive({counter: 0});

function click(){
  //ref example of counter
  // counter.value++;
  data.counter++;
}

//Option API
// export default {
//   data() {
//     return {
//       counter: 0,
//     }
//   },
//   methods: {
//     click() {
//       this.counter++;
//     }
//   }
// }
</script>