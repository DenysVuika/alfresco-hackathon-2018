#!/usr/bin/env node

var program = require('commander');

program
  .command('i <library>')
  .version('0.1.0')
  .option('-i, --install', 'Install extension library')
  .action(function(library) {
    console.log(`Installing library: ${library}`);
  });

program.parse(process.argv);
