#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import packageData from '../package.json' assert { type: 'json' }
// `execSync` is a built-in Node.js module to run bash commands
import { execSync } from 'child_process'

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' })
  } catch (error) {
    console.error(`💔 Failed to execute ${command} exiting process...`, error)
    process.exit(1)
  }
}

function runCli() {
  const initPackageRepo = () => {
    const packageRepository = packageData.repository?.url?.replace('git+', '')
    if (packageRepository == null) {
      console.error('💔 No repository URL found in generator package.json')
      console.error(
        `There seems to be an issue with the generator, please report it here: ${packageData.bugs.url}`
      )

      process.exit(1)
    }
    console.log('🚀 Creating new project credits')
    console.log(`Created by: ${packageData.author}`)
    console.log(`Repository: ${packageRepository}`)
  }

  const initCli = (packageRepository, repoName) => {
    if (repoName == null) {
      console.error('💔 No repository name provided as argument')
      process.exit(1)
    }

    runCommand(`git clone --depth 1 ${packageRepository} ${repoName}`)
    console.log(`✅ Cloned ${packageRepository} into ${repoName}.`)

    runCommand(`cd ${repoName} && npm install`)
    console.log('✅ Installed dependencies.')

    console.log(
      '✅ Congratulations! Your project is ready to go. Follow the instructions below to get started.'
    )
    console.log(`👉 cd ${repoName}`)
    console.log('👉 npm run start:local')
  }

  initPackageRepo()
  initCli(packageData.repository.url, process.argv[2])
}

runCli()
