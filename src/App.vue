<script setup>
import {ref} from 'vue';

import useResponse from './methods/useResponse.ts'
import useReader from './methods/useReader.ts'


const request = {
  URL: 'https://rickandmortyapi.com/api/character',
  method: 'GET'
}

const list = ref({});

async function getData() {
  list.value = await useResponse(request);

  console.log(list.value)

}

getData()
useReader(URL)

</script>

<template>
  <div v-for="item in list.data?.results"> {{ item.id }}. {{ item.name }}</div>
</template>