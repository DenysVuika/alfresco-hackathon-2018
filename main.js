#!/usr/bin/env node

const program = require('commander');
const install = require('./install');

program
  .command('i <library>')
  .version('0.1.0')
  .option('-i, --install', 'Install extension library')
  .action(function(library) {
    install(library);
  });

program.parse(process.argv);
