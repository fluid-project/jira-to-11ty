---json
{
  "title": "FLUID-6774",
  "summary": "Markdown linting errors with recent versions of linting infrastructure.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins",
  "date": "2023-11-09T07:16:35.195-0500",
  "updated": "2023-11-09T07:18:23.737-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins",
      "date": "2023-11-09T07:18:23.737-0500",
      "body": "@@Antranig Basman In testing locally I fixed the first two simply by removing the space between the opening parenthesis and the URL.\n\nDoing the same for the third results in a line-length error, which can be fixed by adding a return before the opening square brace instead.\n"
    }
  ]
}
---
Recent versions of fluid-lint-all and eslint-config-fluid return errors regarding a few lines in [ReleaseNotes.md](http://ReleaseNotes.md) in main.



`13:05:41.389:    - ReleaseNotes.md:`

`13:05:41.389:      (106:-) MD034:no-bare-urls`

`13:05:41.389:      (151:-) MD034:no-bare-urls`

`13:05:41.389:      (156:-) MD034:no-bare-urls`

        