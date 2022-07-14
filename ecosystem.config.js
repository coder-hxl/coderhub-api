module.exports = {
  apps: [
    {
      name: 'coderhub',
      interpreter: 'node',
      interpreter_args: '-r esbuild-register',
      script: 'src/main.ts',
      watch: true
    }
  ]
}
