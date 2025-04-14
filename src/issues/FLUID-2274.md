---json
{
  "title": "FLUID-2274",
  "summary": "[Uploader] Flash 10 Security settings break the Uploader documentation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-02-19T18:51:08.000-0500",
  "updated": "2014-03-03T14:44:09.221-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-19T18:51:33.000-0500",
      "body": "We also need to update the documentation in the Wiki\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-19T19:01:51.000-0500",
      "body": "Have checked in the correct text. Need to update the wiki\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-19T19:07:51.000-0500",
      "body": "I've reviewed the Readme file, and it looks good.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-19T19:56:26.000-0500",
      "body": "I've fixed the wiki entry here: <http://wiki.fluidproject.org/display/fluid/Enabling+Uploader+on+Local+File+Systems>\n"
    }
  ]
}
---
With the update to Flash 10, we broke the instructions for how to work around the local Flash file restrictions.&#x20;

Current doc reads:\
5\. Click "Browse for files..."\
6\. Select the swfupload.swf file that is in your local /src/webapp/fluid-components/flash/ directory

Should read:\
5\. Click "Browse for folder..."\
6\. Select the local /src/webapp/fluid-components/flash/ directory that contains the swfupload.swf file

This has been confirmed to work with Flash 9 and Flash 10

        