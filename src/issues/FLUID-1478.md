---json
{
  "title": "FLUID-1478",
  "summary": "Runtime Error when loading the Layout Customizer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-08T10:28:17.000-0400",
  "updated": "2008-09-08T13:32:07.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-08T13:32:07.000-0400",
      "body": "Appears to have been fixed with changes in r5481\n"
    }
  ]
}
---
A runtime error is thrown when loading the uPortal example

Steps to reproduce

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Notice that a runtime error is thrown.

Line 52: return fluid.initLayoutCustomizer (layout, dropTargetPerms, null, options);\
file: portal.js\
Error: Object doesn't support this property or method

        