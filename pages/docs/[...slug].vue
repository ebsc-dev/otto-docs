<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useHead({
  title: page.value.title ? `${page.value.title} - Otto Docs` : 'Otto Docs'
})
</script>

<template>
  <article v-if="page">
    <h1>{{ page.title }}</h1>
    <ContentRenderer :value="page" />
  </article>
</template>
