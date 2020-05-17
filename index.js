#!/usr/bin/env node

const { execSync } = require('child_process')

const cmd = require('@m1yh3m/all-mac-address.node.lib')()

console.log(execSync(cmd).toString())

