---json
{
  "title": "FLUID-5798",
  "summary": "fluid-publish fails to apply the NPM tag",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-10-26T09:19:27.424-0400",
  "updated": "2016-07-08T09:04:26.069-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-10-27T12:49:16.931-0400",
      "body": "Resolved in fluid-publish 1.1.0\n"
    }
  ]
}
---
When trying to apply an NPM dist-tag an error occurs. It appears that the cause of this is that the command to get the revision number from git returns with a new line character at the end. This in turn pushes the tag name onto a new line, which results in an error where the "latest" tag has already been applied and there is no command called "dev".

Console Error:\
\[colin\@tofino infusion (master $=)]$ fluid-publish \
npm WARN dist-tag add latest is already set to version 2.0.0-dev-dev.20151024T010910Z.d1e5b8d \
/bin/sh: line 1: dev: command not found \
child\_process.js:484 \
throw err; \
^&#x20;

Error: Command failed: npm dist-tag add infusion\@2.0.0-dev-dev.20151024T010910Z.d1e5b8d \
dev \
npm WARN dist-tag add latest is already set to version 2.0.0-dev-dev.20151024T010910Z.d1e5b8d \
/bin/sh: line 1: dev: command not found&#x20;

at checkExecSyncError (child\_process.js:441:13) \
at Object.execSync (child\_process.js:481:13) \
at Object.publish.tag (/usr/local/lib/node\_modules/fluid-publish/publish.js:202:17) \
at Object.publish.dev (/usr/local/lib/node\_modules/fluid-publish/publish.js:257:13) \
at Object.\<anonymous> (/usr/local/lib/node\_modules/fluid-publish/publish.js:291:17) \
at Module.\_compile (module.js:435:26) \
at Object.Module.\_extensions..js (module.js:442:10) \
at Module.load (module.js:356:32) \
at Function.Module.\_load (module.js:311:12) \
at Function.Module.runMain (module.js:467:10)&#x20;

        