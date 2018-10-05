const sh = require('shelljs');

const install = lib => {
  console.log(`Installing ${lib}`);

  if (sh.exec(`npm i ${lib}`).code !== 0) {
    sh.echo('Error: Npm install failed');
    sh.exit(1);
  }

  console.log('Done.');
};

module.exports = install;
