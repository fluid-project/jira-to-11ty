---json
{
  "title": "FLUID-3435",
  "summary": "Infusion Builder page changes drastically when Download is clicked on",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Erin Yu",
  "date": "2009-12-16T14:01:52.000-0500",
  "updated": "2014-03-03T11:20:13.023-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.012-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
When Download button is clicked on, the page reloads with the message "Preparing your download...".\
In order to get back to the Infusion Builder options, the user has to know to refresh the page, rather than pressing 'Back'.

Instead, the download button should do one of the following:\
1\. Display "Preparing your download..." on the page, below or inside the "Download" button \
2\. Display a popup with the message \
3\. Open another tab with the message

        