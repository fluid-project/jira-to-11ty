---json
{
  "title": "FLUID-3443",
  "summary": "on the Infusion Builder interface in IE6 the download button is repeated with a \"d\" on it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Laurel Williams",
  "date": "2009-12-17T12:22:15.000-0500",
  "updated": "2010-11-18T15:20:39.919-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3443/FLUID-3433-1.patch.txt",
      "filename": "FLUID-3433-1.patch.txt"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3443/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-17T12:23:07.000-0500",
      "body": "a screenshot of the double button issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-15T12:52:27.051-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-17T12:24:53.742-0500",
      "body": "\"FLUID-3433-1.patch.txt\" fixes the extra \"d\" button issue, also adjusts the position and size of the download spinner so it does not overlap the button text.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-18T13:48:28.804-0500",
      "body": "Patch committed at revision 10281.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-18T15:20:39.918-0500",
      "body": "Issue closed!\n"
    }
  ]
}
---
.buttons { height: 40px; overflow: hidden; }&#x20;

        