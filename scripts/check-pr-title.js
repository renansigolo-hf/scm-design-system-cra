import { context } from "@actions/github";
import { setFailed } from "@actions/core";

async function run() {
  console.log("Running CHECK PR TITLE");
  const regexPattern = new RegExp(
    /^(?<type>build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test|¯\\_\(ツ\)_\/¯)(?<scope>\(\w+\)?((?=:\s)|(?=!:\s)))?(?<breaking>!)?(?<subject>:\s.*)?|^(?<merge>Merge \w+)/
  );
  const title = context.payload.pull_request?.title;
  if (!regexPattern.test(title)) {
    setFailed("Invalid PR Title!");
  }
}

run();
