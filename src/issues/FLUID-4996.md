---json
{
  "title": "FLUID-4996",
  "summary": "Convert icons used in Inline Edit to font icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2013-04-29T10:33:00.213-0400",
  "updated": "2021-07-29T01:40:33.653-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6142/",
      "key": "FLUID-6142",
      "summary": "convert icons used in Infusion to use SVG icons"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4996/InfusionIcons-InlineEdit.eot",
      "filename": "InfusionIcons-InlineEdit.eot"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4996/InfusionIcons-InlineEdit.ttf",
      "filename": "InfusionIcons-InlineEdit.ttf"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2013-05-14T10:58:48.388-0400",
      "body": "Need pencil icon from <http://192.168.2.11/git_heidi/infusion/src/webapp/demos/inlineEdit/simple/html/inlineEdit.html>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-06-10T11:19:29.044-0400",
      "body": "Attached font with pencil, undo, redo, and save.\\\nIcons generated from the AI file attached to this JIRA:\\\n<http://issues.fluidproject.org/browse/FLUID-3801>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-06-21T08:00:04.785-0400",
      "body": "There is a problem with the pencil icon. Currently the icon is in the editable field which appears and disappears when editing / viewing. However, any text within the field will become part of the editable text - including the icon font.\n\nOne possible way to fix this is to put the icon in a span after the editable field and allow the integrator ability to position as they please via CSS.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-06-21T11:13:10.365-0400",
      "body": "Fleshing out the previous solution some more:\n\n* by default the edit icon appears immediately to the right of the editable text field.\n* edit mode can be activated by selecting the icon or by selecting the text field.&#x20;\n* the edit icon by default dims when edit field is activated\n* hovering over the edit icon will produce an outline\n\nUsing CSS, the user will be able to:\n\n* position the edit icon to where ever they want\n* modify dim style or hide the icon all together when edit mode is activated\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:18:21.546-0400",
      "body": "Jonathan Hung do you know the state of this jira?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-22T15:19:19.139-0400",
      "body": "May need to convert to SVGs instead, see: <https://fluidproject.atlassian.net/browse/FLUID-6142#icft=FLUID-6142>\n"
    }
  ]
}
---
Create font icons for all the icons used by Inline Edit, and updated Inline Edit to make use of them.

        