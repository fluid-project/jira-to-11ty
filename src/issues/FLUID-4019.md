---json
{
  "title": "FLUID-4019",
  "summary": "Image Reorderer container should not be restricted to just Form elements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2011-01-05T11:57:07.919-0500",
  "updated": "2021-07-29T01:45:36.485-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Arnold Tagne",
      "date": "2016-03-09T08:19:24.146-0500",
      "body": "Hi @Jonathan Hung I see you made the changes as discussed on the IRC channel yesterday. \\\nPlease how do I assign the issue to myself ?\n\nirc: Awesome\\_A\n"
    }
  ]
}
---
The Image Reorderer root container is restricted to \<form> elements. The component should allow the use of any arbitrary container the user chooses as long as it is properly identified.

The implementor should not be restricted and be allowed to use any container element (i.e. span, div, section).

        