---json
{
  "title": "FLUID-4993",
  "summary": "The manual tests for UIO Full screen don't have the IE8 styles.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2013-04-26T16:06:16.584-0400",
  "updated": "2014-06-25T16:01:17.815-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "IE 8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:17.814-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
There is a specific IE 8 style sheet that should be applied to UIO to remove the styling from the Table of Contents toggle, to make it a standard checkbox again. This is because the transitions don't work at all in IE8. However for the manual tests, this style isn't applied. This means that you cannot see the state of the Table of Contents setting in the panel.&#x20;

        