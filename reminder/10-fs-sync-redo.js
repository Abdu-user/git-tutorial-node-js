const { readFileSync, writeFileSync } = require("fs");
const fs = require("fs");

const first = fs.readFileSync("./content/first.txt", "utf8");
const second = fs.readFileSync("./content/second.txt", "utf8");
console.log(first, second);

fs.writeFileSync(
  "./content/secondSync.txt",
  `Here is inside of file that will be created plus add new words from nearby files : ${first}, ${second}`
);
