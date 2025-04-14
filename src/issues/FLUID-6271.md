---json
{
  "title": "FLUID-6271",
  "summary": "Buildkite Agent v3.0 breaks Vagrant builds",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-16T20:02:14.135-0400",
  "updated": "2024-07-22T10:35:21.881-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-16T20:36:32.543-0400",
      "body": "The git clean flags are a per-agent configuration so I had to change /etc/buildkite-agent/buildkite-agent.cfg and add git-clean-flags to it:\n\n```\ntoken=\"xxx\"\r\ntags=\"type=physical,hypervisor=virtualbox,docker=true,vagrant=true\"\r\ngit-clean-flags=\"-fqd\"\n```\n\nThe first build with v3.0 that ran correctly but still failed (unrelated to CI, it seems): <https://buildkite.com/fluid-project/fluid-infusion/builds/195> – Waiting on @@Joseph Scheuhammer's feedback before closing this as fixed.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2018-04-17T15:21:30.832-0400",
      "body": "@@Giovanni Tirloni I can confirm the console output I get when I run this pull request locally on my vagrant VM matches, in all relevant respects, the console output from buildkite (<https://buildkite.com/fluid-project/fluid-infusion/builds/195).>  The failure(s) observed are due to a bug in my testing code, not in what buildkite is doing.\n"
    }
  ]
}
---
Previously, buildkite-agent v2.0 cleaned the git repository on every step using "git clean -fdq".&#x20;

Version 3.0 switches to "git clean -fdqx", which removes all files even the ones in .gitignore. That was due to popular demand.

Unfortunately, that breaks our Vagrant steps because the ".vagrant" directory is wiped out.

        