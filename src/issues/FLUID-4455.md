---json
{
  "title": "FLUID-4455",
  "summary": "In list reorderer, clicking outside of container to remove focus from first element does not work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "James Yoon",
  "date": "2011-09-16T14:48:10.951-0400",
  "updated": "2015-06-09T14:22:05.564-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Chrome in Windows XP\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4437/",
      "key": "FLUID-4437",
      "summary": "Focus styling persists after moving focus from Reorderer"
    }
  ],
  "attachments": [],
  "comments": []
}
---
To replicate (in Chrome):

1\. Click first element\
2\. Click outside reorderer container

First element appears to still be in focus

        