module.exports = {
  apps: [
    {
      name: 'coderhub-8888',
      interpreter: 'node',
      interpreter_args: '-r esbuild-register',
      script: 'src/main.ts',
      watch: true
    }
  ]
}
