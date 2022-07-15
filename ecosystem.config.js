const dotenv = require('dotenv')

dotenv.config()
const { APP_PORT } = process.env

module.exports = {
  apps: [
    {
      name: `coderhub-API-${APP_PORT}`,
      interpreter: 'node',
      interpreter_args: '-r esbuild-register',
      script: 'src/main.ts',
      watch: true,
      ignore_watch: ['node_modules', 'uploads']
    }
  ]
}
