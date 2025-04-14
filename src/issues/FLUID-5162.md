---json
{
  "title": "FLUID-5162",
  "summary": "Fat panel onReady event should return fatPanel itself as an argument",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-10-02T09:32:27.890-0400",
  "updated": "2013-10-02T11:59:13.700-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-02T11:59:10.326-0400",
      "body": "Merged in pull request ( <https://github.com/fluid-project/infusion/pull/411> ) into the project repo at 3a1c9b7b65159a39f35d9d9deb2d2ac2e17c4819\n"
    }
  ]
}
---
Right now, fat panel onReady event returns its sub-component uiOptions as an argument, rather than the fat panel itself. Returning the fat panel would make API more accurate and be easier to write unit tests.

        