---json
{
  "title": "FLUID-1585",
  "summary": "Double clicking of space in between words on inline edit will select more then one word.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-18T13:42:05.000-0400",
  "updated": "2011-01-14T09:53:24.075-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF2, FF3 on Mac OX S 10.5&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-04T13:00:43.000-0500",
      "body": "This seems to be the way that firefox handles it.\n"
    }
  ]
}
---
When double clicking space between words on the inline editor, will select both words in around the space.&#x20;

Steps to reproduce:&#x20;

1\. Open url: <http://build.fluidproject.org/fluid/fluid-components/html/InlineEdit.html>

2\. With mouse, click one of the inline editors

3\. With mouse, double click space in between words.

        