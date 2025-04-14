---json
{
  "title": "FLUID-451",
  "summary": "Reorderer: Mouse pointer icon does not change appropriately",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-04-04T15:02:22.000-0400",
  "updated": "2008-04-21T12:43:34.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-117/",
      "key": "FLUID-117",
      "summary": "No indication that an image can be dragged."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T11:30:30.000-0400",
      "body": "Note that this style change doesn't happen on Firefox.\n\nIt should be reasonably easy to specify the cursor as part of the styling (except for the unstyled to-do list, which is an example of an unstyled list 🙂\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T11:38:34.000-0400",
      "body": "The unstyled sortable to do list has been removed from the list of test files in the protocol, since it is inappropriate for use in testing.\n\nThe issue is still relevant to the scheduler.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-07T14:41:27.000-0400",
      "body": "The cursor styling, for drag & drop, is not consistent across the various test sites.&#x20;\n\nCursor style: pointing finger (IE7 WinXp, FF2 Mac OS 10.5, FF2 WinXP)\n\n<http://build.fluidproject.org/sakai-imagegallery-tool/fluid-components/html/Lightbox.html>\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/generic-lightbox/generic-lightbox.html>\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/uportal-unordered-list-tabs/uportal-sortable-tabs-mockup.html>\n\nCursor style: four arrows (IE7 WinXp, FF2 WinXp), Open Hand (FF2 Mac OS 10.5)\n\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/todo-list/sortable-styled-todo-list.html>\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/unordered-list-tabs/unordered-list-tabs.html#>\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/uportal3-newskin/new_theme_sample_html.htm>\n\nCursor style: No cursor change to indicate drag capability\n\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/scheduler.html>\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/RSFStyleScheduler.html>\n"
    },
    {
      "author": "Herb Wideman",
      "date": "2008-04-07T15:01:57.000-0400",
      "body": "Re Justin's comment: the cursor does in fact change to indicate drag capability at\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/scheduler.html>\\\nbut just not to the type suitable for indicating its functional affordances... it chages to a text insertion point from an arrow.\n\nAlso true at:\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T12:43:34.000-0400",
      "body": "This is a styling issue that arose in test files that were not well styled, and which are now being removed from the distribution.\n"
    }
  ]
}
---
On the unstyled sortable to do list, and the scheduler list ( <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/scheduler.html> ), the mouse cursor changes to text insertion point style which is inappropriate for the movement task - it imputes editing affordances, not drag and drop affordances. Recommendation: use the same four-pointed arrow as appears with tetheh styled sortable list test page.

        