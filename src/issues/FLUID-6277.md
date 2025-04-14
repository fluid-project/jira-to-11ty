---json
{
  "title": "FLUID-6277",
  "summary": "Tests on instrumented code increased memory usage",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-28T13:34:59.801-0400",
  "updated": "2024-07-22T10:35:20.105-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-30T09:25:39.946-0400",
      "body": "@@Tony Atkins \\[RtF] is it necessary to run the browser tests before the node tests since, it seems, the code is instrumented in the former? [IRC dicussions](https://botbot.me/freenode/fluid-tech/msg/99543548/)\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-04T09:25:19.800-0400",
      "body": "While trying to implement per-pipeline configuration regarding how to clean files, I faced issue <https://github.com/buildkite/agent/issues/756>. For now the issue described in this JIRA remains and the buildkite agent is configured to use \\`git clean -fqd\\` which will leave behind the files in the \"coverage\" folder (which today was at 1.7GB and started triggering out of memory errors).\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-05-07T05:32:33.979-0400",
      "body": "I responded to @@Giovanni Tirloni on IRC, but just to confirm here for the record, the browser and node instrumentation are completely separate.  We use nyc for the node tests, it hooks Babel into \"require\" and instruments anything that matches the settings in .nycrc automatically.  The order of the tests should not matter at all.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-22T11:44:31.265-0400",
      "body": "@@Tony Atkins \\[RtF] Thanks! I'm proposing in [PR#900](https://github.com/fluid-project/infusion/pull/900) we delete the coverage and reports directories after each CI build.\n\nThis shouldn't impact the work that is still to be completed for <https://fluidproject.atlassian.net/browse/FLUID-6265#icft=FLUID-6265> in making the reports available somewhere.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-05-23T07:46:50.826-0400",
      "body": "@@Giovanni Tirloni, I commented on the pull, but I see that you've posted a lot of the details here.  If you were simply running \\`npm test\\`, then the coverage and reports directories should be cleared out by the \\`pretest\\` step.  I guess the CI config runs individual commands instead?  Anyway, if you just issue \\`npm run pretest\\` at the start of each run, that should have the same effect.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-28T10:58:39.623-0400",
      "body": "Mothballing this as the PR is almost 2 months old and it may become unnecessary with the adoption of containers instead of Vagrant. If there's enough interest it can be reopened. PR is being closed too.\n"
    }
  ]
}
---
CI builds are failing intermittently a the "node tests" step due to out of memory errors:

<https://buildkite.com/fluid-project/fluid-infusion/builds/207#1fea0683-0a51-4c27-907e-30534e2b4430>\
<https://buildkite.com/fluid-project/fluid-infusion/builds/208#9fbce57d-1493-460c-a449-868b8e625ae4>

```
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
```

Initial investigation shows that memory usage of the node process currently goes up to 1.4GB in CI:

```
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
vagrant  13778 89.3 72.2 2374052 1473868 pts/1 Dl+  12:24   1:15 node node_modules/nyc/bin/nyc.js node tests/node-tests/basic-node-tests.js
```

Testing on a non-CI machine with a fresh repo clone, the "node tests" shows the memory usage is 600MB. After the "browser tests" are executed (and the code is instrumented), the memory usage increases to 900-1100MB in tests.

CI re-uses the git repository from previous builds and cleans it using \`git -fd\`, leaving behind files that in .gitignore (like \`reports\` and \`coverage\`). Files in this directory will accumulate (since some of them are named after the firefox/chrome versions available at the time) and after a while, CI builds will start failing again. After a fresh clone in CI, the node process used 435MB.

<https://buildkite.com/fluid-project/fluid-infusion/builds/211#a9ecd1c5-2a06-407c-bca1-fce9374a17ea>

So, there are a few problems:

* Instrumented code is making node tests run dangerously close to the VM memory limit
* Accumulation of files is increasing memory usage of Instambul
* CI is re-using repository from previous runs (to improve build times) and leading to these issues
* CI steps (within a single build) could clean the repository but this breaks vagrant. A solution where CI excludes certain directories from \`git clean\` would work but could be fragile (since now the logic must be duplicated in build scripts and CI definition).

        