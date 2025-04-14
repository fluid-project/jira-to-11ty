---json
{
  "title": "FLUID-3481",
  "summary": "Keyboard usage of Uploader breaks easily for Internet Explorer (IE)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Armin Krauss",
  "date": "2010-01-14T15:54:50.000-0500",
  "updated": "2011-01-05T16:08:12.166-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Windows 7 IE 8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:06:21.451-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T16:07:21.194-0500",
      "body": "Resolved for Infusion 1.3 release.\n"
    }
  ]
}
---
IE allows tab navigation of Uploader (<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>)

After clicking on "Upload File" and then leaving the pop-up dialogue (e.g. pressing ESC) the "Upload File" can not\
be reached by keyboard anymore.

Same happens if switch to simple uploader and back is done.

        