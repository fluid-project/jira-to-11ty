---json
{
  "title": "FLUID-1980",
  "summary": "Uploader Springboard needs to be brought up-to-date with Uploader2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-12-15T18:06:14.000-0500",
  "updated": "2009-02-04T10:53:07.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1935/",
      "key": "FLUID-1935"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1980/FLUID-1980.a.patch",
      "filename": "FLUID-1980.a.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T18:13:23.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-1980#icft=FLUID-1980>.a.patch file fixes a few of the items listed above, specifically:\\\nA\\\nB\\\nC\\\nD\\\nE and \\\nF\n\nG is still not fixed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-04T10:53:07.000-0500",
      "body": "Current uploader springboard has been removed\n"
    }
  ]
}
---
There are a number of problems with the Uploader Springboard related to the new Uploader 2 way of doing things.\
Here are the one's that I know of that are currently unfixed:\
A) the Uploader would fail on init. Caused by more than one fl-uploader-queue object in markup. \
B) Remove buttons not working, because the selector had changed \
C) Row template in the second example being visible. \
D) Remove buttons are showing after upload\
E)  instructions are showing after load\
F) progress bars are showing before upload\
G) Upload button is active before load and after upload complete

        