const sh = require ('shelljs');
const path = require('path')

function getPackageName(libName) {
    let libPath = path.parse(libName);

    if (libPath.ext === '.tgz') {
        return libPath.name;
    }

    return libName
}

const add = (lib, packageName) => {
    packageName = packageName || getPackageName(lib);
    console.log(`Adding ${packageName}`);

    const modulePath = `${process.cwd()}/node_modules/${packageName}`;
    const packagePath = `${modulePath}/package.json`;

    const packageInfo = require(packagePath);
    const settings = packageInfo['alfresco'];

    if (!settings || !settings.extension || !settings.module || !settings.namespace) {
        sh.echo('Error loading extension entry point from package.json');
        sh.exit(1);
    }

    console.log(settings);

    const source = path.join(modulePath, settings['extension']);
    const sourcePath = path.parse(source);
    const sourceFileName = `${sourcePath.name}${sourcePath.ext}`;
    const targetPath = path.join(process.cwd(), 'src/assets/plugins');

    console.log(`Copying ${sourceFileName}`);
    sh.mkdir('-p', 'src/assets/plugins');
    sh.cp(source, targetPath);
}

module.exports = add;