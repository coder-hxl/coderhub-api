module.exports = {
  apps: [
    {
      name: 'coderhub-API-8888',
      interpreter: 'node',
      interpreter_args: '-r esbuild-register',
      script: 'src/main.ts',
      watch: true,
      ignore_watch: ['node_modules', 'uploads']
    }
  ]
}
