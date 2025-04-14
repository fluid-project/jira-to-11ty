---json
{
  "title": "FLUID-6754",
  "summary": "Add a text style option for system-ui",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2022-11-17T12:55:51.604-0500",
  "updated": "2024-07-25T14:30:36.454-0400",
  "versions": [],
  "fixVersions": [
    "4.7"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6655/",
      "key": "FLUID-6655",
      "summary": "redesign text style preference around types of fonts instead of specific ones"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-25T14:30:21.863-0400",
      "body": "[PR #1098](https://github.com/fluid-project/infusion/pull/1098) merged at f35856c465abd0d3b5eb8b245293af674ba8ddaa\n"
    }
  ]
}
---
Using the [system-ui](https://w3c.github.io/csswg-drafts/css-fonts-4/#system-ui-def) font family, will allow the user to select the default font from the platform they are running on. This will allow for a more integrated feel with the rest of the system, and also allows for making use of the default fonts like San Fransisco.  

        