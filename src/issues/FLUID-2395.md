---json
{
  "title": "FLUID-2395",
  "summary": "remove the use of activedescendent in the reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2009-03-23T14:53:23.000-0400",
  "updated": "2009-03-24T10:04:33.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-565/",
      "key": "FLUID-565",
      "summary": "Consider removing the 'activedescendent' from the Reorderer, in light of new understanding of its purpose"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2009-03-24T09:56:01.000-0400",
      "body": "This was first noticed in JIRA-565.\n"
    }
  ]
}
---
remove the use of activedescendent in the reorderer

Here are some links explaining the use of activedescendent

<http://www.w3.org/WAI/PF/aria/#aria-activedescendant>\
<http://www.w3.org/WAI/PF/aria-practices/#focus_activedescendant>

Here is a link for how to do the same thing without activedescendant, which seems to be the way we are already doing things\
<http://www.w3.org/WAI/PF/aria-practices/#visualfocus>

        