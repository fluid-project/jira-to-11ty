---json
{
  "title": "FLUID-462",
  "summary": "Mouse pointer changes type over immovable elements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Herb Wideman",
  "date": "2008-04-07T15:34:48.000-0400",
  "updated": "2008-04-08T15:53:26.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-08T15:37:00.000-0400",
      "body": "This is not a bug. The cursor is changing to an I-beam because it is over top of text. The same change happens over any text.\n"
    },
    {
      "author": "Herb Wideman",
      "date": "2008-04-08T15:53:26.000-0400",
      "body": "Then the real issue is the same as mentioned in another issue: the failure of the mouse pointer to distinguish by its shape between moveable and immovable elements...\n"
    }
  ]
}
---
On the portlet reordering page \
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>\
the cursor changes type over the the immovable portlets as well as the moveable ones.

        