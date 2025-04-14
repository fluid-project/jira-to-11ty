---json
{
  "title": "FLUID-942",
  "summary": "Keyboard navigation for the keyboard-a11y examples is broken, using safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-07-18T13:44:58.000-0400",
  "updated": "2009-08-13T08:33:20.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "Safari 3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2039/",
      "key": "FLUID-2039"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2036/",
      "key": "FLUID-2036"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-940/",
      "key": "FLUID-940"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-941/",
      "key": "FLUID-941"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-18T14:56:15.000-0400",
      "body": "This is because Safari only supports tab focus of form elements\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-12T16:18:50.000-0400",
      "body": "This is a limitation of the browser\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-13T08:33:15.000-0400",
      "body": "closed with wrong resolution, reopenning and closing with \"Won't Fix\"\n"
    }
  ]
}
---
You are unable to 'tab' to any of the keyboard-a11y fields. This is even the case if you change the settings to "Press Tab to highlight each item on a web page"&#x20;

Steps to reproduce:

1\) Open one of the keyboard-a11y examples from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/keyboard-a11y/checkboxes/CheckboxExample.html>\
<http://build.fluidproject.org/fluid/sample-code/keyboard-a11y/jquery-ui-tabs/jquery-ui-accessible-tabs.html>

2\) Tap the 'tab' key. Notice that you are unable to put focus on any of the keyboard-a11y fields

        