const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  console.log("Running CHECK PR TITLE");
  const regexPattern = new RegExp(
    /^\[(?<ticket_id>PIKA|KAT|KUS)-\d+\] (?<type>build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(?<scope>\(\w+\)?((?=:\s)|(?=!:\s)))?(?<breaking>!)?(?<subject>:\s.*)?(?<short_summary>(\w))( (?<pr_ref>\(#\d+\)))?$|^(?<merge>Merge \w+)/
  );
  const title = github.context.payload.pull_request?.title;
  if (!regexPattern.test(title)) {
    core.setFailed(
      `The PR Title ${title} doesn't follow our standard naming convention. Please add a title with the following format: [<JIRA-ID>] <scope>: <short summary>[PIKA|KAT|KUS] (build|ci|docs|feat|fix|perf|refactor|test): short description. E.g.: [KAT-123] feat: add new loading component`
    );
  }
}

run();
