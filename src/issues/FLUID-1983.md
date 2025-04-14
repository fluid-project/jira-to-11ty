---json
{
  "title": "FLUID-1983",
  "summary": "Uploader not working with flash 9: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-16T11:20:39.000-0500",
  "updated": "2009-02-11T16:00:52.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2030/",
      "key": "FLUID-2030"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-14T09:45:13.000-0500",
      "body": "Current work around is to use graceful degradation. See <https://fluidproject.atlassian.net/browse/FLUID-2073#icft=FLUID-2073>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-11T08:54:12.000-0500",
      "body": "It appears that swfupload 2.20 beta 5 should give us this support back. We should upgrade to beta 5.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-11T08:54:18.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-11T12:30:17.000-0500",
      "body": "* upgraded to SWFUpload beta 5\n* removed graceful degradation for Flash 9/IE\n* removed specific configuration for Flash 9 required for older versions of SWFUpload but kept backwards compat.\n* added code to mimic the SWFUpload 2.10 behaviour of hiding the flash movie in a 1px container at the end of the body\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-11T13:22:08.000-0500",
      "body": "Eli and I pair programmed on this commit, so it has been code reviewed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-11T16:00:52.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n"
    }
  ]
}
---
Uploader not working with flash 9: using IE&#x20;

Steps to reproduce:

1\) Open the uploader:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Attempt to add files to the file queue

Notice that the browse button doesn't seem to do anything, and/or it will throw an error

        