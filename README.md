# alfresco-hackathon-2018

Automated plugin and library installations for ADF/ACA

## Description

For the time being ADF/ACA extension libraries require several steps to get integrated into an application: installing from the NPM, then configuring JSON definition, optionally adding extra dependencies and asset files. The idea is to define some sort of convention for an ADF plugins and its artifacts, and have a command line tool that is able to install the library, configure all assets, and even change the "app.module.ts" file to register extra Angular modules.

## Prep work

Look through the following libs:

- [commander - npm](https://www.npmjs.com/package/commander)
- [shelljs - npm](https://www.npmjs.com/package/shelljs)

It expects the extension to contain a special entry in the `package.json` similar to following:

```json
{
    "alfresco": {
        "extension": "assets/my-extension.json",
        "module": "MyExtensionModule",
        "namespace": "my-extension"
    }
}
```

## Running

To link the project locally and use as a global tool:

```sh
npm link
```

That will register the `adf-ext` command.

### Using with Angular projects

#### Installing

Install dependency:

```sh
adf-ext i <npm-package>
adf-ext i <targball> <package-name>
```

Example:

```sh
adf-ext i my-lib
```

Installing local tarball packages

```sh
adf-ext i <path-to-tarball>/my-extension-0.0.1.tgz my-extension
```

#### Adding existing

Add already installed (manually) dependency from the `node_modules`.

```sh
adf-ext add <package-name>
```

```sh
adf-ext add my-lib
```

Note the `install` command does that, use `add` only if you installed the lib manually.

Adding local tarball packages

```sh
adf-ext add <path-to-tarball>/my-extension-0.0.1.tgz my-extension
```