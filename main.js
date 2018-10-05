#!/usr/bin/env node

const program = require('commander');
const install = require('./install');
const add = require('./add');

program.command('i <library> [package]').action((library, package) => {
  install(library);
  add(library, package);
});

program.command('add <library> [package]').action((library, package) => {
  add(library, package);
});

program.parse(process.argv);
