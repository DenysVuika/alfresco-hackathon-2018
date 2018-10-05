# alfresco-hackathon-2018

Automated plugin and library installations for ADF/ACA

## Description

For the time being ADF/ACA extension libraries require several steps to get integrated into an application: installing from the NPM, then configuring JSON definition, optionally adding extra dependencies and asset files. The idea is to define some sort of convention for an ADF plugins and its artifacts, and have a command line tool that is able to install the library, configure all assets, and even change the "app.module.ts" file to register extra Angular modules.

## Prep work:

Look through the following libs:

- [commander - npm](https://www.npmjs.com/package/commander)
- [shelljs - npm](https://www.npmjs.com/package/shelljs)