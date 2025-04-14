---json
{
  "title": "FLUID-3462",
  "summary": "Autobinding not working for radio buttons when making a selection with the keyboard: using Safari 4",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-01-07T10:04:39.000-0500",
  "updated": "2013-09-06T14:02:26.118-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder",
    "Renderer"
  ],
  "environment": "Safari 4 (Mac OS 10.5, 10.6, Windows 7), Chrome nightly\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2263/",
      "key": "FLUID-2263",
      "summary": "Changing the radio buttons with the keyboard will no effect when changes are saved: using Safari"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3462/fluid-3462.patch",
      "filename": "fluid-3462.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-01-07T10:08:02.000-0500",
      "body": "Patch to manually trigger on \"keyup\" on radio buttons. Really disagreeable necessity.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-07T12:39:44.000-0500",
      "body": "Let's try a \"grown up patch\" without the crass comments. Otherwise the code looks reasonable.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-07T13:00:48.000-0500",
      "body": "I tried out the patch using Safari 4 and FF 3.5.\n\nSafari 4 is now working, and there are no changes to FF 3.5.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-01-07T13:12:17.000-0500",
      "body": "This issue has been reported upstream at Webkit as <https://bugs.webkit.org/show_bug.cgi?id=33328> - it appears to affect every browser based on recent webkit.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-01-07T13:13:59.000-0500",
      "body": "Patch without crass comment attached. Apologies for the early-morning red fog 😛\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-19T16:50:02.000-0500",
      "body": "tested the patch with the renderer demo, and it appears to working properly now in safari 4\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-01-19T21:35:40.000-0500",
      "body": "Fixed at revision 9045. Depending on the Chrome release schedule, we may need to make a detect for that browser too.\n"
    }
  ]
}
---
Autobinding not working for radio buttons when making a selection with the keyboard

Steps to reproduce:

1\) Open the renderer demo

2\) Click the render button to render out the data

3\) Using the keyboard  change the radio button selection

Notice that the data to the right isn't updated, but if you use the mouse to change the radio button the data is updated.

This means that for components that render out radio buttons (such as the Infusion Builder) changes made to the radio button selection with the keyboard will have no effect.

        