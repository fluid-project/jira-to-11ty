---json
{
  "title": "FLUID-5732",
  "summary": "A width transition on sidebar occurs on page load even though sidebar is set to be hidden",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2015-07-31T12:15:38.306-0400",
  "updated": "2024-07-23T10:16:36.802-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-07-31T12:32:14.367-0400",
      "body": "For now I have removed the transitions on .docs-template-TOC-container so that there is no animation.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2015-09-21T10:27:13.207-0400",
      "body": "We may actually be able to implement this again with the new work that was done for <https://fluidproject.atlassian.net/browse/FLUID-5746#icft=FLUID-5746>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:16:36.614-0400",
      "body": "appears to have been addressed with the migration to 11ty\n"
    }
  ]
}
---
.docs-template-TOC-container  transition occurs on every page load, even when it is supposed to be hidden. The result is the user sees the sidebar open then close even if they had it hidden previously.

Ideally we would like the transition property on .docs-template-TOC-container to be applied after page load. This way the user will not see the sidebar expand and collapse on a page load.

        