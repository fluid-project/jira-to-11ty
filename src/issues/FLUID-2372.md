---json
{
  "title": "FLUID-2372",
  "summary": "Rename classes based on newly established conventions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-03-17T13:18:05.000-0400",
  "updated": "2011-01-19T08:28:52.123-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:15:19.000-0400",
      "body": "Clean Up Parade 1.0\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-30T15:16:20.000-0400",
      "body": "Please see this article on naming conventions <http://wiki.fluidproject.org/pages/viewpage.action?pageId=5900972#FSSQuickGuide%26Conventions-NamingConventions>\n"
    }
  ]
}
---
Rename classes based on the following conventions

We decided that we would distinguish between class names used for visual styling, and class names used for finding DOM element for manipulation, etc. These different categories of classes will have different prefixes:

Visual styling class-name prefix:    fl-\
DOM-selection prefix:                flc-

Visual styling classnames:

The general pattern for visual styling class names is\
fl-\[thing]-\[role]

So, for example:\
fl-container-flex, fl-layout-linear...

If the visual styling is specifically for a component, then the component name is inserted:\
fl-\[componentname]~~\[thing]~~\[role]

So, for example:\
fl-reorderer-selected, fl-pager-links...

DOM-selection classnames:

The general pattern for DOM-selection classnames (i.e. default classnames used by a component to find its parts) is\
flc-\[componentname]~~\[thing]~~\[role]

So, for example:\
flc-reorderer-drop-warning, flc-inlineEdit-displayText...

        