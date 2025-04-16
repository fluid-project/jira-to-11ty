---json
{
  "title": "FLUID-6785",
  "summary": "Commit package-lock.json file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2024-12-05T13:14:53.200-0500",
  "updated": "2024-12-05T13:17:41.563-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the past we stopped committing the package-lock file because we ran into conflicts which often result in us having to drop the package-lock file and node\_modules directory. Most of these issues occurred around the time the package-lock was first implemented. We’ve been using the package-lock file in other projects without issue for quite some time, so would seem like a time to bring it back here.&#x20;

Ned Zimmerman brought up recently that amongst the other benefits it would improve our dependency pinning to include sub-dependencies and not the just the top-level ones we can pin to in the package.json file.

see: <https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json>&#x20;

        