---json
{
  "title": "ENGAGE-244",
  "summary": "Implement multiple views and a toggle for catalogue browse",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2010-01-15T13:30:10.000-0500",
  "updated": "2014-03-03T14:15:45.459-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [],
  "components": [
    "Catalogue"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-244/patch.txt",
      "filename": "patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-244/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-01-22T17:04:27.000-0500",
      "body": "This patch enables toggling on browse pages. However in order to do that browse has to go through the whole tree in order to find decorators (need to put check for navlist in place).\n\nother solution could be to pass a function as fluid decorator that will initialize nav list and attach click handler to the toggler.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-01-23T21:01:09.000-0500",
      "body": "This patch is promising, but needs more work before it can be committed. The structural dependence of the three nested search loops on the arrangement of the component tree is \"undesirable\"\n\nGeneral notes: Please avoid use of \"fluid.merge\" which has too heavyweight a workflow for these cases. Unless you need the extra power that it offers (property references, reverse merge, safety for fluid.VALUE, etc.) it is simplier and faster to use jQuery.extend(true, ...)\n\nAlso, please ensure that your editor is set up to use spaces rather than tabs.\n\nI believe the main problem with this approach stems from the use of utils.decoratedUIBound - this unnecessarily also copies the structures involved during attachment, thus \"killing\" them. Over the weekend I will be proposing a different approach for expressing trees that will hopefully lead to the disuse of these \"tiny renderer forest functions\" but in the meantime please build the \"listContents\" component as a data structure and then the references to the original navListDecorators elements will be preserved.\n\nNote that you don't need to run two fluid.transform loops to build the structure. Simply write var navListDecorators = \\[] at the outset of the loop, and then within the transform loop, write navListDecorators\\[index] = myDecorator;\\\nJavascript closure visibility rules are your friend 😛\n"
    },
    {
      "author": "y z",
      "date": "2010-01-27T17:32:02.000-0500",
      "body": "This is an initial patch, however styling for grid view still needs to be tweaked as well as the toggle link should be updated to the actual thumbnail.\n"
    }
  ]
}
---
Implement multiple views and a toggle for catalogue browse currently it only supports the list view with no preview

        