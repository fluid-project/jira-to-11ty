---json
{
  "title": "FLOE-574",
  "summary": "disclosure widgets (details elements) do not display the arrow indicator in Firefox",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2019-11-05T12:33:30.182-0500",
  "updated": "2020-01-28T18:35:03.627-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FLOE Website"
  ],
  "environment": "FF 70.0.1 (macOS 10.15.1)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-574/Chrome_details_closed.png",
      "filename": "Chrome_details_closed.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-574/Chrome_details_open.png",
      "filename": "Chrome_details_open.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-574/FF_details_closed.png",
      "filename": "FF_details_closed.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-574/FF_details_open.png",
      "filename": "FF_details_open.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-11-05T12:37:46.841-0500",
      "body": "* Chrome\\_details\\_closed.png shows arrow indicator pointing right.\n* Chrome\\_details\\_open.png shows arrow indicator pointing down.\n* FF\\_details\\_closed.png shows arrow indicator missing when closed.\n* FF\\_details\\_open.png shows arrow indicator missing when open.\n"
    }
  ]
}
---
The disclosure widgets are made using the details element. However, in Firefox the arrow indicator is not displayed. This makes it look like there is no additional details other than the summary that is always displayed. 

It seems that this is caused by the normalize v4.1.1 (source through the infusion package) which is setting the display type of the summary element to `display: block`. It should be `display: list-item` which is properly set in the latest normalize (currently v8.0.1).

 

Steps to reproduce:

1. Navigate to a page that uses the details element 
   1. e.g. <https://floeproject.org/news/2018-08-30-Cities-Co-Design.html> (details element used for the image caption)
2. Notice that the arrow indicator is not rendered, but if you click on the summary the details expand.

        