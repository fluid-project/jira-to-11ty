---json
{
  "title": "FLUID-2260",
  "summary": "Activating the Reset or Cancel button will remove all elements of the UI Options dialog: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-02-18T10:37:18.000-0500",
  "updated": "2009-03-04T12:33:25.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2261/",
      "key": "FLUID-2261"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2260/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-18T10:37:51.000-0500",
      "body": "'screenshot-1' shows all of the elements missing, except for the header\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-18T10:40:40.000-0500",
      "body": "Does not seem to happen in the Sakai mock-up example\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-18T10:44:35.000-0500",
      "body": "Also doesn't seem to happen if you change one of the options first\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-18T11:50:31.000-0500",
      "body": "The following Error is displayed in Mac OS\n\nJavaScript - <http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>\\\nEvent thread: click\\\nError:\\\nname: TypeError\\\nmessage: Statement on line 1351: Cannot convert undefined or null to Object\\\nBacktrace:\\\nLine 1351 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/renderer/fluidRenderer.js>\\\nvar template = templates\\[0];\\\nLine 1395 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/renderer/fluidRenderer.js>\\\nvar rendered = fluid.renderTemplates(templates, tree, options, fossils);\\\nLine 200 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/UIOptions.js>\\\nfluid.reRender(template, that.container, fluid.copy(tree), {model: that.renderModel, autoBind: true, debugMode: true});\\\nLine 190 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/UIOptions.js>\\\nthat.refreshView();\\\nLine 136 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/fluid/UIOptions.js>\\\nthat.reset();\\\n...  Line 2577 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\\\nvar ret = handler.apply(this, arguments);\\\n...  Line 2352 of linked script <http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.3.1.js>\\\nreturn typeof jQuery !== \"undefined\" && !jQuery.event.triggered ?\\\n...\\\nstacktrace: n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-04T12:33:25.000-0500",
      "body": "Cannot reproduce\n\nTested using:\n\nOpera 9.6 (Mac OS 10.5, Win XP)&#x20;\n"
    }
  ]
}
---
Activating the Reset or Cancel button will remove all elements of the UI Options dialog

Steps to reproduce:

1\) Open the UI Options example from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Activate either the "Reset" or the "Cancel" button

Notice that all of the elements are removed except for the header.

        