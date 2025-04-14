---json
{
  "title": "FLUID-4298",
  "summary": "When switching to a different theme, UIO should use theme-appropriate background images if available and none otherwise",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "James Yoon",
  "date": "2011-06-21T14:18:19.263-0400",
  "updated": "2013-10-04T10:02:32.708-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4454/",
      "key": "FLUID-4454"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-06-21T14:20:24.088-0400",
      "body": "Bug Parade Infusion&#x20;\n"
    }
  ]
}
---
In UIO, users have the option of switching themes/contrasts.

For background images (and other non-content images such as icons, buttons, etc.), whenever appropriate theme-based alternate images exist, we should use them. Otherwise, default to using no background image, or plain text alternatives (in the case of buttons, icons, etc.).

        