/**
 * Build the app before running the server
 *
 * Steps:
 *  - check whether .next directory exists
 *  - use yarn to build
 *  - start dev server
 */

const { exec } = require('child_process');

function buildDev() {
  exec('ls -la', (error, stdout, stderr) => {
    if (error) {
      console.error('There was an error running the command');
      console.log(error);
      return;
    }

    if (stderr) {
      console.log('There was a std error');
      return;
    }
    const results = stdout;
    if(results.includes('.next')){
      console.log('Yes, nothing for me to do now');
    } else {
      console.log('Nope, we need to create it');
      console.log('Building the dev env....');
      exec('yarn build', (error, stdout, stderr) => {
        if (error) {
          console.log('Hmm, we can not run this command now');
          return;
        }

        if (stderr) {
          return;
        }
      });
      console.log('All good now. Proceed to start the app');
    }
  });
}

buildDev();
