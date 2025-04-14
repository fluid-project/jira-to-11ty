---json
{
  "title": "FLUID-2392",
  "summary": "In IE6 & IE7: Auto-binding not working properly - gets \"behind\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-03-20T15:52:52.000-0400",
  "updated": "2009-03-26T11:18:35.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Data Binder",
    "Renderer"
  ],
  "environment": "IE6 & IE7\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-2253/",
      "key": "FLUID-2253",
      "summary": "The radio button selection and the preview window can become out of sync: using IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-20T15:54:45.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-23T21:48:37.000-0400",
      "body": "IE is bloody stupid and suffers from this bug <http://webbugtrack.blogspot.com/2007/11/bug-193-onchange-does-not-fire-properly.html> which causes a \"change\" event to only actually fire when a checkbox or radio button receives a blur, rather than when it is actually changed. Code has been added to the autobind functionality of the renderer to compensate for this - this actually represents added value now to the renderer infrastructure since it is possible to abstract over this issue - previous code used \"change\" just attached to the document. THE CATT is here.\n\nResolved at revision 6814\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-26T11:14:38.000-0400",
      "body": "This now works and the code looks fine.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-26T11:18:35.000-0400",
      "body": "Verified fix using:\n\nIE6 (Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
For some reason, in IE the auto-binding is not updating the model right away. When a UI control that is auto-bound to the model is changed, the model doesn't seem to be updated until focus moves away from the UI control, either by tabbing away or by clicking on another control.

This can be observed in the UI Options template:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>\
as described in FLUID-2253, which I think is just a manifestation of this issue.

It can also be seen in the auto-bound parts these renderer examples:\
<http://build.fluidproject.org/fluid/sample-code/renderer/data-binding/menu.html>\
<http://build.fluidproject.org/fluid/sample-code/renderer/programmatic-tree/menu.html>\
In these examples, the checkboxes on the right side of the pages are auto-bound to the model (click the Render button at the top to actually render the data first). As soon as a checkbox is set or unset, the model (displayed below the menus) should update immediately, but in IE, a change only shows up in the model after another checkbox is changed.

        