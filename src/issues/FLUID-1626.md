---json
{
  "title": "FLUID-1626",
  "summary": "Keyboard reordering uses command (apple key) instead of ctrl: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-09-26T11:11:13.000-0400",
  "updated": "2009-08-13T12:58:41.000-0400",
  "versions": [
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Image Reorderer",
    "Keyboard Accessibility",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-834/",
      "key": "FLUID-834",
      "summary": "Keyboard reordering doesn't work in Opera"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1756/",
      "key": "FLUID-1756"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1756/",
      "key": "FLUID-1756"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-17T12:18:50.000-0500",
      "body": "The command key only seems to work for me if I press the direction key twice. ie. Command + up + up moves a portlet up once.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-13T12:58:41.000-0400",
      "body": "Browser support for Infusion 1.2 ( <http://wiki.fluidproject.org/display/fluid/Prior+Browser+Support> ) does not include Opera 9.6 for Mac OS\n"
    }
  ]
}
---
Keyboard reordering uses command (apple key) instead of ctrl, in Opera 9.5

Steps to reproduce:

1\) Open the image reorderer demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>

2\) Press the tab key until one of the images has focus

3\) Attempt keyboard drag and drop (Notice that the ctrl key doesn't work but the command (apple key) does work for keyboard drag and drop)

        