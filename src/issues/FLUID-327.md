---json
{
  "title": "FLUID-327",
  "summary": "Refine optional parameters for the Reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-03-12T11:08:08.000-0400",
  "updated": "2011-02-22T16:28:00.353-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1074/",
      "key": "FLUID-1074",
      "summary": "Update Reorderer APIs to make them consistent with the API style guide"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-08T15:17:40.000-0400",
      "body": "As of today, the avatar, the css class names and the keystrokes are now parameterized.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T19:00:12.000-0400",
      "body": "Rehoming this issue as part of overall Reorderer API consistency work\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:00.352-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
We need to figure out how users of the Reorderer would ilke to be able to configure the Reorderer and provide the requisite hooks.\
Examples include the avatar, the names of the CSS classes used for styling interesting moments, the keystrokes that we listen to etc.&#x20;

        