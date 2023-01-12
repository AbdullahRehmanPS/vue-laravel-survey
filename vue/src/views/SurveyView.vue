<template>
  <PageComponent>
    <template v-slot:header>
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">View or Create a Survey</h1>
    </template>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
import store from "../store/index.js";
import { useRouter, useRoute } from "vue-router";
import { ref } from 'vue';

const route = useRoute();

let model = ref({
  title: "",
  status: false,
  description: null,
  image: null,
  expire_date: null,
  questions: [],
});

if(route.params.id) {

}
</script>

