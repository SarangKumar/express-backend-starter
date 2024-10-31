#!/usr/bin/env node

import { execSync } from "child_process"

const runCommand = (command) => {
    try {
        execSync(command, { stdio: "inherit" })
        return true
    } catch (error) {
        console.error(`Failed to execute: ${command}\nError: ${error.message}`)
        return false
    }
}

// Check if repoName is provided
const repoName = process.argv[2]
if (!repoName) {
    console.error("Please provide a repository name.")
    process.exit(1)
}

const gitCheckCommand = `git clone --depth 1 https://github.com/SarangKumar/express-backend-starter.git ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository with the name: ${repoName}`)
const checkedOut = runCommand(gitCheckCommand)

if (!checkedOut) {
    console.error("Failed to clone the repository.")
    process.exit(1)
}

console.log(`Installing dependencies for ${repoName}`)
const installDeps = runCommand(installDepsCommand)

if (!installDeps) {
    console.error("Failed to install dependencies.")
    process.exit(1)
}

console.log("Project setup completed successfully!")
console.log(`To start the project, run: cd ${repoName} && npm start`)
