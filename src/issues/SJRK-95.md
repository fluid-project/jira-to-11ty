---json
{
  "title": "SJRK-95",
  "summary": "Display: grid doesn't work on older devices",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-05-25T13:24:19.416-0400",
  "updated": "2020-03-18T23:34:11.771-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-307/",
      "key": "SJRK-307",
      "summary": "Add feature detection to keep site from breaking"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-110/",
      "key": "SJRK-110",
      "summary": "Make hasMobileCamera detection more robust"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-95/2018-05-25 display grid fail.jpg",
      "filename": "2018-05-25 display grid fail.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-95/2018-05-25 display grid working.jpg",
      "filename": "2018-05-25 display grid working.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-95/2019-01-15 iPhone 6 storyEdit screenshot.png",
      "filename": "2019-01-15 iPhone 6 storyEdit screenshot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-95/2019-10-07 ST Grid layout broken and masthead missing in IE11.PNG",
      "filename": "2019-10-07 ST Grid layout broken and masthead missing in IE11.PNG"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-05-31T14:57:46.146-0400",
      "body": "Consider feature detection using Modernizr or similar, maybe using polyfills\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-01-17T23:57:07.979-0500",
      "body": "Could be solved by using an older specification of the grid property alongside the new one and using an -ms prefix:\\\n<https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/>\\\n<https://www.smashingmagazine.com/2017/11/css-grid-supporting-browsers-without-grid/>\n\nor potentially using floats or this:\n\n```java\ndisplay: table-cell\n```\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2019-01-18T08:51:15.304-0500",
      "body": "Note that it was discovered during the crit testing that this includes IE11\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-01-21T20:13:46.460-0500",
      "body": "This has also been confirmed on an iPad 2 running iOS 9.3.5\n"
    }
  ]
}
---
Consider graceful degradation for older browsers so that certain elements of the site look reasonable when support for grid layouts is not present.\
List of supported browsers and versions: <https://caniuse.com/#feat=css-grid>

Specifically, the editor buttons are stacked vertically if grid is not supported.

        