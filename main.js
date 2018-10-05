#!/usr/bin/env node

const program = require('commander');
const install = require('./install');
const add = require('./add');

program.command('i <library>').action(library => {
  install(library);
  add(library);
});

program.command('add <library>').action((library) => {
    add(library);
});

program.parse(process.argv);
