---json
{
  "title": "FLUID-567",
  "summary": "File Upload: File Queue sizing is bizarrely messed up in IE",
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
  "date": "2008-05-05T18:30:10.000-0400",
  "updated": "2008-12-02T15:10:20.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Windows XP, Internet Explorer 7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-616/",
      "key": "FLUID-616",
      "summary": "Height of upload queue does not decrease as files are removed from the list"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-05-23T12:06:50.000-0400",
      "body": "IE doesn't support height and scrolling on tbody elements.\n\nAnd so, I exploded the table into three separate parts so I could scroll the middle. All because IE is wack!\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-05-23T12:07:51.000-0400",
      "body": "Different bug same fix as <https://fluidproject.atlassian.net/browse/FLUID-616#icft=FLUID-616>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-02T15:10:20.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
In Internet Explorer 7 under Windows XP: \
1\) Queue up five files in the file queue. \
2\) One by one add additional files to the queue.

Observe: at some point, probably 7 or 8 files individual  rows in the queue will expand to 200 pixels tall.&#x20;

What should happen is that the file queue outer wrapper should become a scrolling area and that the inner rows should not change size. This is what it does in FF (both platforms) and Safari on the Mac.&#x20;

Note: this bug may also be present in IE6 and/or Windows Vista, not tested in those configurations yet.&#x20;

        