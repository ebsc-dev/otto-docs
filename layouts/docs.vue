<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <header class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl">
            <span class="text-primary-500">Otto</span>
            <span class="text-gray-500">Docs</span>
          </NuxtLink>
          <div class="flex items-center gap-4">
            <UButton
              to="https://github.com/ebsc-dev/otto"
              target="_blank"
              variant="ghost"
              icon="i-simple-icons-github"
              aria-label="GitHub"
            />
            <UColorModeButton />
          </div>
        </div>
      </div>
    </header>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
        <aside class="hidden lg:block">
          <DocsNav />
        </aside>
        <main class="prose dark:prose-invert max-w-none">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
