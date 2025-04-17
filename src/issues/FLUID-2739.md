---json
{
  "title": "FLUID-2739",
  "summary": "Default reorder avatar in IE invisible in some cases.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Steven Githens",
  "date": "2009-05-15T13:48:14.000-0400",
  "updated": "2024-07-22T12:04:14.047-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Steven Githens",
      "date": "2009-05-15T14:48:31.000-0400",
      "body": "TEST CASE SETUP\\\n\\---------------------------\n\\\nThere is a test case in progress here:  <https://source.sakaiproject.org/contrib/assignment2/branches/FLUID-2739>\n\nTo test, copy <https://fluidproject.atlassian.net/browse/FLUID-2439#icft=FLUID-2439> as a webapp to a tomcat and use the following page:\\\n<http://149.166.143.211:8080/FLUID-2739/content/templates/inst-asnn-list.jsp>\n\nHowever, the static portion of it is working in FF but not even rendering yet in IE.  I will comment again if/when I get it working.\n\nr60493 | swgithen\\@mtu.edu | 2009-05-15 14:41:50 -0400 (Fri, 15 May 2009) | 1 line\n\nONC-1324 <https://fluidproject.atlassian.net/browse/FLUID-2739#icft=FLUID-2739> Static test case.. which works in Firefox, but in IE is silently failing upon calling the renderer... &<sup>%&</sup>%\\* so it's not quite yet a test case for the real issue at hand.\n\nTO REPRODUCE\\\n\\------------------------\n\\\nIn order to reorder a row, you must hover over teh row, and grab the 4 Arrows icon.  You can't just grab anywhere on the row.  Have to grab the 4 arrows icon.  In Firefox, you can see by default that this sort of shows the row being dragged. In IE, the dragging still works, but the drag avatar is invisible so it's not immediately visible that you are actually dragging.  I have experimented with overloading the avatarCreator, and I can get random Div's to show up in IE as draggers.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-13T10:42:57.481-0500",
      "body": "I'm not entirely sure how to test this, I think I'm misunderstanding the instructions when it says copy <https://fluidproject.atlassian.net/browse/FLUID-2439#icft=FLUID-2439>. If there is a new test case or if the issue has been solved already, could you please update the jira.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:30:28.216-0400",
      "body": "Steven Githens any new info on this issue?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T12:04:14.047-0400",
      "body": "Internet Explorer is not longer supported\n"
    }
  ]
}
---
I am creating a branch for this issue at the moment to show the issue, and will update the ticket when it's ready.

        