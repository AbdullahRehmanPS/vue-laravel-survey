<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          {{ model.id ? model.title : 'Surveys View' }}
        </h1>
      </div>
    </template>

    <form @submit.prevent="saveSurvey">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!--     Image -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Image
            </label>
            <div class="mt-1 flex items-center">
              <img
                v-if="model.image"
                :src="model.image"
                :alt="model.title"
                class="w-64 h-48 object-cover"
              />
              <span
                v-else
                class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[80%] w-[80%] text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <button
                type="button"
                class="relative overflow-hidden
                       ml-5 bg-white py-2 px-3
                       border border-gray-300
                       rounded-md shadow-sm
                       text-sm leading-4 font-medium
                       text-gray-700 hover:bg-gray-50
                       focus:outline-none focus:ring-2
                       focus:ring-offset-2 focus:ring-indigo-500">
                Change
                <input
                  type="file"
                  class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
                >
              </button>
            </div>
          </div>
          <!--    /Image -->

          <!--     Title -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              v-model="model.title"
              autocomplete="survey_title"
              class="mt-1 focus:ring-indigo-500
                     focus:border-indigo-500
                     block w-full shadow-sm
                     sm:text-sm border-gray-300
                     rounded-md"
            />
          </div>
          <!--     /Title -->

          <!--  Description  -->
          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              About
            </label>
            <div class="mt-1">
              <textarea
                id="description"
                name="description"
                rows="3"
                v-model="model.description"
                autocomplete="survey_description"
                placeholder="Description"
                class="mt-1 focus:ring-indigo-500
                     focus:border-indigo-500
                     block w-full shadow-sm
                     sm:text-sm border-gray-300
                     rounded-md"
              />
            </div>
          </div>
          <!--  /Description -->

          <!-- Expire Date   -->
          <label for="expire_date" class="block text-sm font-medium text-gray-700">
            Expire Date
          </label>
          <input
            id="expire_date"
            name="expire_date"
            type="date"
            v-model="model.expire_date"
            class="mt-1 focus:ring-indigo-500
                     focus:border-indigo-500
                     block w-full shadow-sm
                     sm:text-sm border-gray-300
                     rounded-md"
          />
          <!-- /Expire Date  -->
        </div>
      </div>
    </form>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue";
import store from "../store/index.js";
import {useRouter, useRoute} from "vue-router";
import {ref} from 'vue';

const route = useRoute();

let model = ref({
  title: "",
  status: false,
  description: null,
  image: null,
  expire_date: null,
  questions: [],
});

if (route.params.id) {
  model.value = store.state.surveys.find((s) => s.id === parseInt(route.params.id));
  // console.log(parseInt(route.params.id))
}

function submitted() {
  console.log('cvvvvv')
}

</script>

