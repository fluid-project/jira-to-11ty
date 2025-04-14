---json
{
  "title": "FLUID-2936",
  "summary": "Progress doesn't update change in value to JAWS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Alison Benjamin",
  "date": "2009-06-10T10:45:37.000-0400",
  "updated": "2009-07-13T14:19:35.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": "XP, FF3, JAWS 10.0.512, JAWS 10.0.1142\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-06-10T10:50:35.000-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-07-08T16:59:36.000-0400",
      "body": "At very least, need an indicator of when progress has started and completed.\n"
    }
  ]
}
---
After giving an initial value, updates to the progress are not announced. Possibly be a JAWS/ARIA support issue. If possible, try to replicate this in other screen readers if they support ARIA.&#x20;

        