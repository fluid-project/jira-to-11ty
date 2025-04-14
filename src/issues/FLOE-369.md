---json
{
  "title": "FLOE-369",
  "summary": "The nav icon page scrolling is broken at text size change",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-06-02T15:55:15.736-0400",
  "updated": "2015-11-03T12:46:24.275-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-369/navIcons.jpeg",
      "filename": "navIcons.jpeg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-369/Screen Shot 2015-06-03 at 10.33.59 AM.png",
      "filename": "Screen Shot 2015-06-03 at 10.33.59 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-369/Screen Shot 2015-06-03 at 10.34.06 AM.png",
      "filename": "Screen Shot 2015-06-03 at 10.34.06 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-369/Screen Shot 2015-06-03 at 10.34.14 AM.png",
      "filename": "Screen Shot 2015-06-03 at 10.34.14 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-369/Screen Shot 2015-06-03 at 10.34.30 AM.png",
      "filename": "Screen Shot 2015-06-03 at 10.34.30 AM.png"
    }
  ],
  "comments": [
    {
      "author": "Kaye Mao",
      "date": "2015-06-03T10:33:08.859-0400",
      "body": "If the text size is continually decreased, eventually the nav bar icons from step 6 onwards will shift to the left until they completely disappear.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-03T10:45:04.372-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/82>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-03T13:28:02.089-0400",
      "body": "Merge pull request ( <https://github.com/fluid-project/first-discovery/pull/82> ) into the project repo at 7fbc298d282045ec966296e1f319d381f9c45120\n"
    }
  ]
}
---
1\. open the first discovery tool and navigate to the text size panel;\
2\. increase or decrease the text size;\
3\. click "next" until the nav icons scroll to the next page;\
4\. the display of the nav icons is messed up.

        