---json
{
  "title": "FLUID-2253",
  "summary": "The radio button selection and the preview window can become out of sync: using IE",
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
  "date": "2009-02-17T15:29:57.000-0500",
  "updated": "2009-03-25T11:44:57.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 7 (Win XP, Win Vista)\\\nIE 6 (Win XP, Win 2000)\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-2392/",
      "key": "FLUID-2392"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2253/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-17T15:31:19.000-0500",
      "body": "'screenshot-1' shows simplified layout chosen, but the preview not displaying the simplified layout\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T11:29:24.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T15:54:55.000-0400",
      "body": "I think this bug is actually caused by the problem described in <https://fluidproject.atlassian.net/browse/FLUID-2392#icft=FLUID-2392> - I suspect fixing 2392 will fix this bug.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-23T21:27:10.000-0400",
      "body": "After going to the trouble of implementing the \"superApplier\", this bug actually appears to be a manifestation of this really disgraceful IE bug:\n\n<http://webbugtrack.blogspot.com/2007/11/bug-193-onchange-does-not-fire-properly.html>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-23T21:49:28.000-0400",
      "body": "Fixed at revision 6814.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-25T11:31:14.000-0400",
      "body": "Looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:44:57.000-0400",
      "body": "Verified fix using:\n\nIE 7 (Win Vista)\\\nIE 6 (Win XP)\n"
    }
  ]
}
---
The preview of the layout can become out of sync with the selection

Steps to reproduce:

1\) Open the UI Options example or the Sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Select yes for the Simplified Layout, or no for Background Images

Notice that the preview doesn't change. Switching back to the original selection will change the preview. If you click anywhere else on the page, it will update the preview to the correct option.

        