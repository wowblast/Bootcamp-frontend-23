/**
 * Do NOT allow using `npm` as package manager.
 */

console.log(process.env)
if (process.env.npm_execpath.indexOf('yarn') === -1) {
    console.error('You must use NPM to install dependencies:');
    console.error('  $ npm install');
    process.exit(1);
  }