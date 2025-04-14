---json
{
  "title": "FLUID-2813",
  "summary": "fluidproject.org: give context to breadcrumbs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Alison Benjamin",
  "date": "2009-05-28T12:56:10.000-0400",
  "updated": "2009-06-03T13:38:50.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-05-28T14:16:19.000-0400",
      "body": "Using images for the automatically generated breadcrumb separator was not an option in CMSMS. However I did switch to : as suggested. I also added hidden text saying \"you are here\" before the breadcrumbs.\n"
    }
  ]
}
---
1\. Add text prior to breadcrumbs: "You are here"\
Can be hidden text. See: <http://www.webaim.org/techniques/css/invisiblecontent/>

2\. Also using greater than symbol (" Home > About " ) reads literally as "Home greater than About" with a screen reader. Could try using colon instead, e.g: Home: About:&#x20;

Another possibility could be using an image of the greater than symbol that had a title attribute of some sort. &#x20;

        