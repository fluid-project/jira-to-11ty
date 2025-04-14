---json
{
  "title": "FLUID-2461",
  "summary": "[Progress] Think about the initiallyHidden option",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-01T19:57:52.000-0400",
  "updated": "2014-11-05T12:53:25.265-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-03-17T12:07:25.180-0400",
      "body": "I had a look at this post 1.3.1: setting initiallyHidden=false does result in the progress bar being visible initially. I'm not sure what other behaviour is expected...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-11-05T12:53:25.258-0500",
      "body": "From the previous comment it seems that this has been addressed\n"
    }
  ]
}
---
Revisit the initiallyHidden option... seems that this should be handled in CSS for the element, \
or if it isn't then it should be symmetrical  – right now if initiallyHidden =  true then the element gets hidden but if initiallyHidden =  false then the element doesn't get shown.&#x20;

        