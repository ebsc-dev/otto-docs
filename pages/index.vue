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
      
      <div class="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <NuxtLink to="/docs/getting-started/introduction" class="block p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-rocket-launch" class="w-5 h-5 text-primary-500" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Getting Started</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Quick setup guide, core concepts, and your first Otto agent.
          </p>
        </NuxtLink>
        
        <NuxtLink to="/docs/use-cases/ticket-to-pr" class="block p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-bolt" class="w-5 h-5 text-primary-500" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Use Cases</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Ticket-to-PR automation, PR feedback loops, and issue clarification.
          </p>
        </NuxtLink>
        
        <NuxtLink to="/docs/workflows/linear-integration" class="block p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 text-primary-500" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Workflows</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Linear & GitHub integrations, agent configuration, and triggers.
          </p>
        </NuxtLink>

        <NuxtLink to="/docs/billing/overview" class="block p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div class="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
            <UIcon name="i-heroicons-credit-card" class="w-5 h-5 text-primary-500" />
          </div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Billing</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Pricing tiers, token usage, and cost optimization tips.
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
