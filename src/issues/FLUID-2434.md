---json
{
  "title": "FLUID-2434",
  "summary": "Text doesnt align with form element properly when text size is very small or very large: using IE",
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
  "date": "2009-04-01T10:45:14.000-0400",
  "updated": "2015-06-26T10:14:22.760-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS"
  ],
  "environment": "IE 7 (Win Vista, Win XP)\\\nIE 8 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2433/",
      "key": "FLUID-2433",
      "summary": "The textfield does not expand vertically to fit the increased text size: using IE"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2434/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-06T11:37:51.000-0400",
      "body": "'screenshot-1' shows the vertical alignment issue in the text fields. This is most noticeable in the small text size and large ones\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:27.276-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:24.792-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
At a very small text size, the text is not centered

Steps to reproduce:

1\) Open the FSS.Text.Size example\
<http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/4.fss.text.size.html>

2\) Notice that the very small text, at the top, is not centered (vertically) in the button nor the text field

        