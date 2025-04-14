---json
{
  "title": "FLOE-376",
  "summary": "Tool tips persist on disabled items",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-06-04T11:18:32.053-0400",
  "updated": "2015-11-03T12:48:42.536-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-376/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-04T11:19:40.156-0400",
      "body": "screenshot.png shows the many tooltips that can be accumulated.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-04T11:58:14.184-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/87> ) into the project repo at 41fda7feda1b0c39d4d1550e5f1a348b014ed02e\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-04T13:51:06.053-0400",
      "body": "The merge of the pull request causes another issue:\n\nWhen landing on welcome page, clicking on \"back\" button, Or, landing on sticky key panel, clicking on \"next\" button, would hit the javascript error \"undefined originalTarget\" from the tooltip component. It results in a broken UI.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-04T14:09:27.959-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/88>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-04T14:25:29.521-0400",
      "body": "merged pull request ( <https://github.com/fluid-project/first-discovery/pull/88> ) into the project repo at 9d0ce6f81cee91b2d80ad5dc4a1d64685c879a89\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the first discovery tool\
<http://build.fluidproject.org/first-discovery/demos/>

2\) Navigate to the text size panel

3\) change to the maximum size so that the "+" button is disabled

4\) Hover over the disabled "+" button and off (but not over the "-" button)\
Notice that the tooltip doesn't go away

5\) click the "back" button\
Notice the tooltip is still there

6\) change the contrast

7\) go back to the text size panel

8\) change the text size\
Notice the accumulating tooltips

        