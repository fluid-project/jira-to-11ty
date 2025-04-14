---json
{
  "title": "FLUID-2369",
  "summary": "The thumb of the slider is positioned to the far left when the dialog opens",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-03-17T12:39:54.000-0400",
  "updated": "2009-03-23T15:31:33.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-19T09:19:55.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-19T09:21:14.000-0400",
      "body": "also happens on cancel\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-23T12:03:50.000-0400",
      "body": "I've reviewed the code changes for this issue. They look good, but:\n\nThe fix essentially implements the ability to set a default for min. text size and for text spacing. Given that all other values in the UI Options dialog have defaults set, I'm wondering if we should set defaults for these two now?\n\nI'm not sure if this question should be addressed as part of this issue, or if we should open another one.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-23T12:19:12.000-0400",
      "body": "It's not actually a default that the fix sets - at least, that wasn't my intention. My intention was to read the saved settings of the user and show them on the user interface. I think it would be fine to set a default for line spacing since there is a natural default of 1. The problem with setting a default for minimum text size is that it has side effects that we may not want. Setting a minimum text size is the user saying \"I can't see anything smaller then this\", so we remove FSS styling that would make the font size smaller such as 'fl-font-size-90'. We shouldn't do this unless the user actually says they have a minimum text size.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-23T14:10:59.000-0400",
      "body": "After discussing this issue with Michelle and Jacob, this has been clarified. The implementation of the fix to this issue is good, and default values are not required.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-23T15:31:33.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The thumb of the slider is positioned to the far left when the dialog opens

Steps to reproduce

1\) Open the sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Open the UI Options dialog

Notice that the thumbs of the sliders are positioned to the far left. This is even the case if you have previously increased the size.

        