---json
{
  "title": "FLUID-940",
  "summary": "Keyboard navigation for Reorderer broken, using Safari",
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
  "date": "2008-07-18T13:38:15.000-0400",
  "updated": "2008-08-11T08:26:21.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Safari 3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-942/",
      "key": "FLUID-942",
      "summary": "Keyboard navigation for the keyboard-a11y examples is broken, using safari"
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
      "date": "2008-07-18T14:56:54.000-0400",
      "body": "This is because Safari only supports tab focus of form elements\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-07T14:25:25.000-0400",
      "body": "There's nothing we can do about this.\n"
    }
  ]
}
---
You are unable to 'tab' to any of the reorderable elements. This is even the case if you change the settings to "Press Tab to highlight each item on a web page"

In the Uportal example you can tab to the contents in the portlet and the title, but not the portlet itself.

Steps to reproduce:

1\) Open the generic lightbox example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Tap the tab key. Notice that none of the elements ever gets focus

3\) Using the mouse, drag an element. This will give it focus, but you are still unable to use any of the keyboard keys to navigate around the lightbox, or move the items.

        