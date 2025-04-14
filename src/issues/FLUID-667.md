---json
{
  "title": "FLUID-667",
  "summary": "List tests fail in IE when the list is hidden",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2008-05-28T16:12:24.000-0400",
  "updated": "2009-03-18T10:01:17.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-18T10:01:16.000-0400",
      "body": "The issue is that some unit tests don't run when the markup is hidden. We should probably just start by  having the mark up shown, and hide if possible.&#x20;\n"
    }
  ]
}
---
When the list is hidden, the list tests fail in IE. I think this is because the Reorderer code will call 'focus' on a hidden element. Should this be filed on jQuery or is it correct behaviour?

        