<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <header class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <NuxtLink to="/" class="flex items-center gap-3">
            <img src="/logo-small.png" alt="Otto" class="h-8" />
            <span class="text-gray-500">Docs</span>
          </NuxtLink>
          <div class="flex items-center gap-4">
            <UColorModeButton />
          </div>
        </div>
      </div>
    </header>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
        <aside class="hidden lg:block sticky top-20 self-start h-[calc(100vh-6rem)] overflow-y-auto">
          <DocsNav />
        </aside>
        <main class="prose dark:prose-invert max-w-none">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
