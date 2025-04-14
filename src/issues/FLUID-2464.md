---json
{
  "title": "FLUID-2464",
  "summary": "Can't upload file's with the server version of uploader: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-04-02T08:58:00.000-0400",
  "updated": "2009-04-07T16:08:34.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 7 (Win Vista)\\\nIE 6, IE 7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2464/FLUID-2464.a.patch",
      "filename": "FLUID-2464.a.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-02T14:53:52.000-0400",
      "body": "Will require a full set of QA tests after it is resolved.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-06T14:54:03.000-0400",
      "body": "Here's a patch that includes a fix: there's something really weird going on with the way Flash resolves relative paths. In IE, it appears to be correctly relative to the HTML file, but on FF, weirdness ensure. We're using an absolute path to ensure it works across all browsers.\n\nThis patch also includes modifications to the clean-build-run.sh script based on the changes in the Infusion WAR file structure. It also includes signfiicant cleanup and simplification of the image-gallery.js file.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-06T15:21:33.000-0400",
      "body": "I have reviewed Colin's patch, <https://fluidproject.atlassian.net/browse/FLUID-2464#icft=FLUID-2464>.a.patch. Looks good, tests well.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-06T16:49:08.000-0400",
      "body": "I committed a fix for this at r7049 with permission from the King,\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-07T16:08:34.000-0400",
      "body": "Verified fix using:\n\nIE 7 (Win Vista)\\\nIE 6, IE 7 (Win XP)&#x20;\n"
    }
  ]
}
---
Can't upload file's flash 9 server version of uploader

Steps to reproduce:

1\) Open the server version of the uploader

2\) Add an appropriate file to the queue

3\) Attempt to upload the file

Notice that even with valid files, an error message is displayed in the file queue and the file is not uploaded

        