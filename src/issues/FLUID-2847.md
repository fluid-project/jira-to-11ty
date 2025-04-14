---json
{
  "title": "FLUID-2847",
  "summary": "Can't shift-tab: using IE 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-05-29T14:18:14.000-0400",
  "updated": "2009-06-02T09:35:12.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-02T09:35:12.000-0400",
      "body": "Tested on another IE 7 (Win Vista) system, and the error did not occur. Likely issue with test system used before.&#x20;\n"
    }
  ]
}
---
Can't shift-tab

Steps to reproduce:

1\) Open any example that uses the keyboard a11y plugin, such as\
<http://build.fluidproject.org/infusion/standalone-demos/keyboard-a11y/html/CheckboxExample.html>

2\) Tap the "tab" key until something on the page has focus

3\) Tap "shift-tab" notice, that focus isn't moved

        