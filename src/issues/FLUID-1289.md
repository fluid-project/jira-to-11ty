---json
{
  "title": "FLUID-1289",
  "summary": "Cursor does not change style when rolling over tab in Opera 9.5",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jacob Farber",
  "reporter": "Joseph Vernuccio",
  "date": "2008-08-21T13:45:02.000-0400",
  "updated": "2008-11-13T13:41:18.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-987/",
      "key": "FLUID-987",
      "summary": "When dragging a JQuery Tab, the pointer is an arrow unless it is over top of another JQuery Tab, using Opera"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1289/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-02T11:07:21.000-0400",
      "body": "'screenshot-1' shows the improper style of the pointer\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T08:33:05.000-0400",
      "body": "Still happens, but not all the time. Maybe it has to do with speed at which mouse is moved.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T10:24:12.000-0400",
      "body": "Cursor change solved many duplciate cursor related bugs\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T10:24:47.000-0400",
      "body": "See linked issue (<https://fluidproject.atlassian.net/browse/FLUID-987#icft=FLUID-987>)\n"
    }
  ]
}
---
When rolling over the tab the cursor changes from arrow to hand on some occasions, notices that the cursor really only changes rolling over from right to left.&#x20;

Steps to reproduce:&#x20;

1\) Open the browser and navigate to the specified URL: \
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) Roll over the tabs starting from left to right or up and down and the cursor does not change style.&#x20;

3\) Cursor will only change style when rolling over the tab going from right to left.&#x20;

        