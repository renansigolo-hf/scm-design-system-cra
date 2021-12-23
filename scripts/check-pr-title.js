import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  console.log("Running CHECK PR TITLE");
  const regexPattern = new RegExp(
    /^(?<type>build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test|¯\\_\(ツ\)_\/¯)(?<scope>\(\w+\)?((?=:\s)|(?=!:\s)))?(?<breaking>!)?(?<subject>:\s.*)?|^(?<merge>Merge \w+)/
  );
  const title = github.context.payload.pull_request?.title;
  if (!regexPattern.test(title)) {
    core.setFailed("Invalid PR Title!");
  }
}

run();
