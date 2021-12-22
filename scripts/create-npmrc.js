// CURRENTLY NOT IN USE - CHECK THE TRADE-OFFS WHEN REPLACING THE BASH SCRIPT
const { writeFileSync, readFile } = require("fs");

const npmrcPath = "./.npmrc";
const npmrcContent =
  // eslint-disable-next-line no-template-curly-in-string
  "@renansigolo-hf:registry=https://npm.pkg.github.com\n//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}";

try {
  const npmrcFile = readFile(
    npmrcPath,
    {
      encoding: "utf-8",
    },
    (err, data) => {
      if (err) return;

      console.log(data);
    }
  );

  console.log("🚀 ~ file: create-npm-token.js ~ line 7 ~ npmrcFile", npmrcFile);

  if (!npmrcFile) {
    writeFileSync(npmrcPath, npmrcContent);
  }
} catch (error) {}
