process.on('uncaughtException', function (err) {
  console.error(`\x1b[31m\x1b[40m${err}\x1b[0m`);
  process.exit(1);
});

import server from "./lib/app";