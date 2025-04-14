---json
{
  "title": "FLUID-2032",
  "summary": "Cannot Tab to the 'Browse More\" button with Flash 10, using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-17T17:41:52.000-0500",
  "updated": "2009-06-04T09:01:31.000-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.1",
    "1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:58:56.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-04T09:01:30.000-0400",
      "body": "Appears to have been fixed, likely with the upgrade to the final version of swfupload 2.20\n\nTested using:\\\nFF2 (Flash 10)\n"
    }
  ]
}
---
Cannot Tab to the 'Browse More" button with Flash 10, using FF2

Steps to reproduce:

1\) Open either the demo or the server version of Uploader\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Attempt to tab to the "Browse Files" button

Notice that you the "Browse Files" button never seems to get focus, and you eventually lose the ability to tab or shift-tab to anywhere

        