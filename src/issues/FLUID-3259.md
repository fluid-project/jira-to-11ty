---json
{
  "title": "FLUID-3259",
  "summary": "Nightly builds fail silently",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2009-10-08T12:27:10.000-0400",
  "updated": "2013-09-06T14:01:29.276-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-06T14:01:29.258-0400",
      "body": "uPortal demo removed.\n"
    }
  ]
}
---
Some of the nightly build scripts are written in such a way that a failure does not get reported.&#x20;

uPortal nightly build:   If building uPortal does not work, the build will still continue and report a successful build.&#x20;

        