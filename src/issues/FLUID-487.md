---json
{
  "title": "FLUID-487",
  "summary": "Avatar for dragged portlet a small, offset  solid grey rectangle in FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2008-04-10T14:59:25.000-0400",
  "updated": "2008-04-28T16:14:17.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-521/",
      "key": "FLUID-521"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-395/",
      "key": "FLUID-395",
      "summary": "Change avatar to small grey rectangle, as in mockups"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-521/",
      "key": "FLUID-521"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T12:50:09.000-0400",
      "body": "The cursor position issue within this bug is related to comments in <https://fluidproject.atlassian.net/browse/FLUID-395#icft=FLUID-395>.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T12:51:41.000-0400",
      "body": "The sample file exhibiting this behaviour is now found at\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/portal/portal.html>\n\nThe appearance of the avatar is a general issue being discussed as part of the UX issues for reorderable portlets.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-28T16:14:05.000-0400",
      "body": "This is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-521#icft=FLUID-521>\n"
    }
  ]
}
---
When dragging a portal in FF2 on the portal movement test page\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/uportal3-newskin/new_theme_sample_html.htm>\
a portal "avatar" appears about 3 inches to the right of the mouse pointer and moves with the mouse. This avatar is a dark grey solid small rectangle. It does not serve any useful function and could confuse a user as to where the protal is acrtually being moved.

        