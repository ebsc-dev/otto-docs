<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-4xl mx-auto px-4 py-20 text-center">
      <div class="mb-8">
        <img src="/logo-full.png" alt="Otto" class="h-20 mx-auto" />
      </div>
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Documentation
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
        AI-powered development automation. Turn Linear tickets into pull requests automatically.
      </p>
      <div class="flex justify-center gap-4">
        <NuxtLink to="/docs/getting-started/introduction" class="btn-otto px-6 py-3 rounded-md font-semibold text-lg">
          Get Started
        </NuxtLink>
      </div>
      
      <div class="mt-20 grid md:grid-cols-3 gap-8 text-left">
        <div class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-primary-500" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Automate Dev Work</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Otto connects to Linear and GitHub, turning tickets into working code and PRs.
          </p>
        </div>
        
        <div class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 text-primary-500" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">PR Feedback Loop</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Otto responds to code review comments and makes changes automatically.
          </p>
        </div>
        
        <div class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
          <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 text-primary-500" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Configurable Agents</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Set up agents with custom prompts, models, and triggers for your workflow.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
