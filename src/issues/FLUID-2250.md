---json
{
  "title": "FLUID-2250",
  "summary": "The KB after the file size will wrap to a  new line when file size is more than 3 digits long: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-02-17T14:51:39.000-0500",
  "updated": "2011-01-05T10:49:17.823-0500",
  "versions": [
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 7 (Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2250/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-17T14:52:23.000-0500",
      "body": "'screenshot-1' shows the KB wrapped to a new line\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T10:47:41.251-0500",
      "body": "Can no longer reproduce the bug. &#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T10:49:17.818-0500",
      "body": "No longer an issue in Infusion 1.3\n"
    }
  ]
}
---
The KB after the file size will wrap to a  new line when file size is more than 3 digits long

Steps to reproduce:

1\) Open the uploader demo from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>

2\) Add a file that has a file size that is over 100 KB (e.g. 100.5 KB)

Notice that the KB wraps to a new line

        