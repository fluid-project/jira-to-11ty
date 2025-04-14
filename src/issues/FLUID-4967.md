---json
{
  "title": "FLUID-4967",
  "summary": "When font enlarged, slider obscures label in new panels",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2013-04-01T16:49:24.372-0400",
  "updated": "2014-06-16T09:35:54.333-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Textfield Slider"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4967/large-slider-thumb.png",
      "filename": "large-slider-thumb.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-04-01T16:50:13.136-0400",
      "body": "The attached image (large-slider-thumb.png) shows the text size slider with the enlarged thumb obscuring the large A.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-04T11:09:16.162-0400",
      "body": "Also happens in full page UIO\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-10T11:00:13.898-0400",
      "body": "This likely happening now because the size of the slider thumb increases with the font size.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-11T10:55:33.285-0400",
      "body": "A pull request is issued: <https://github.com/fluid-project/infusion/pull/529>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-16T09:35:45.484-0400",
      "body": "Merge pull request ( <https://github.com/fluid-project/infusion/pull/529> ) into the project repo at 4f4486957e964a914871ea485a72029c98d74586\n"
    }
  ]
}
---
When the text size is fully enlarged, the slider thumb in the new panels (text size and line spacing) obscures the icon at the maximum end of the slider.

To reproduce:\
1\) Open the fat panel and enlarge the text size to max.\
2\) Close and re-open the fat panel

Observe that the large "A" at the right end of the slider is obscured by the enlarged slider thumb.

        