---json
{
  "title": "FLUID-915",
  "summary": "Border padding issues with Uploader, using FF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-16T15:44:12.000-0400",
  "updated": "2008-07-24T13:07:01.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-915/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-23T19:11:34.000-0400",
      "body": "'screenshot-1' shows the lack of padding between the bottom border and the bottom buttons\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-23T19:56:22.000-0400",
      "body": "So this appears to be a bug in jQuery UI dialog. I'm not sure what we should do about it. OK, I can add a little workaround but it's not pretty.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-23T21:45:51.000-0400",
      "body": "using the obscure and slightly evil !important CSS directive, I've fixed this bug\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-24T13:07:01.000-0400",
      "body": "Verified Fix using FF2, FF3 (Mac OS 10.5)\n"
    }
  ]
}
---
In pop-up mode, the padding between the buttons and the bottom border is missing or very small.

Steps to reproduce:

1\) Open the pop-up version of the uploader demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) click the "Add Files" button

3\) close the OS File Open Dialog

4\) notice that there is little to no padding between the buttons and the bottom border of the uploader

        