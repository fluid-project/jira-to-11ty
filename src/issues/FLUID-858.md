---json
{
  "title": "FLUID-858",
  "summary": "Portlet Columns load with no padding between them in IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-07-08T14:50:26.000-0400",
  "updated": "2014-05-26T15:25:40.114-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "IE7 (Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-858/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-02T13:33:58.000-0400",
      "body": "'screenshot-1' shows that there is no padding between portlets\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-03T09:02:58.000-0500",
      "body": "closed in error, reopenned\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-26T15:25:40.095-0400",
      "body": "This demo has been removed.\n"
    }
  ]
}
---
Load the Uportal site off of the daily build page using IE7:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

Notice that the portlets from the two columns are touching.

If you drag and drop a portlet from one column to the other, the spacing between the columns will appear correctly.

        