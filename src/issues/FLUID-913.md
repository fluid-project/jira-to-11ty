---json
{
  "title": "FLUID-913",
  "summary": "Focus styling not properly removed from accessible checkboxes, using Opera 9.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-07-16T14:47:29.000-0400",
  "updated": "2011-01-12T13:21:55.557-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-913/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T14:48:43.000-0400",
      "body": "'screenshot-1' shows the focus styling remaining after focus moved\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-12T13:21:55.512-0500",
      "body": "The demo in question no longer exists.\n"
    }
  ]
}
---
When using the keyboard to navigate between accessible checkboxes, the focus styling is not properly removed.

Steps to reproduce:

1\) Open the Checkboxes example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/keyboard-a11y/checkboxes/CheckboxExample.html>

2\) Using the keyboard, tap the 'tab' key until one of the checkboxes has focus

3\) Using the keyboard, tap the 'arrow' keys to navigate around the checkboxes. Notice that the focus styling isn't properly removed.

        