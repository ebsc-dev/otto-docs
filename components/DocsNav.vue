<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => 
  queryContent('/docs')
    .only(['_path', 'title', 'navigation'])
    .find()
)

const sections = computed(() => {
  if (!navigation.value) return []
  
  const groups: Record<string, any[]> = {}
  
  for (const item of navigation.value) {
    const parts = item._path.split('/').filter(Boolean)
    if (parts.length < 3) continue
    
    const section = parts[1] // e.g., "1.getting-started"
    const sectionName = section.replace(/^\d+\./, '').replace(/-/g, ' ')
    
    if (!groups[sectionName]) {
      groups[sectionName] = []
    }
    groups[sectionName].push(item)
  }
  
  return Object.entries(groups).map(([name, items]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    items: items.sort((a, b) => a._path.localeCompare(b._path))
  }))
})
</script>

<template>
  <nav class="space-y-6">
    <div v-for="section in sections" :key="section.name">
      <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
        {{ section.name }}
      </h3>
      <ul class="space-y-1">
        <li v-for="item in section.items" :key="item._path">
          <NuxtLink
            :to="item._path"
            class="block px-3 py-1.5 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
            active-class="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
          >
            {{ item.title || item._path.split('/').pop()?.replace(/^\d+\./, '').replace(/-/g, ' ') }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
