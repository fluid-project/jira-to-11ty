---json
{
  "title": "FLUID-1061",
  "summary": "Reorderer-Vertical List and IE6: styling issue: red target indicator is too big and clunky",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Eli Cochran",
  "date": "2008-07-29T13:20:04.000-0400",
  "updated": "2008-11-13T13:38:46.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6, XPs2\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1061/FLUID-1061.patch",
      "filename": "FLUID-1061.patch"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-08-15T14:24:43.000-0400",
      "body": "This includes some CSS tweaks to solve this JIRA ticket as well : <http://issues.fluidproject.org/browse/FLUID-1060>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:38:46.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
When dragging list items up and down the list, the drop target indicator in IE6 is really huge!

        