module.exports = {
  apps: [
    {
      name: 'NuxtAppNameBlackRedMob',
      exec_mode: 'cluster',
      port: 3002,
      instances: 1, // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      cwd: '/var/www/socialnuxtappblacredmob',
      args: 'start'
    }
  ]
}
