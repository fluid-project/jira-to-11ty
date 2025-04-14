---json
{
  "title": "FLUID-5545",
  "summary": "Adjust the overview panel to work with mobile devices",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2014-11-03T14:30:30.062-0500",
  "updated": "2016-07-11T14:34:03.597-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5532/",
      "key": "FLUID-5532",
      "summary": "responsive UIO: Fix the current UIO on mobile"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5545/overview-panel-mobile-closed.jpg",
      "filename": "overview-panel-mobile-closed.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5545/overview-panel-mobile-open.jpg",
      "filename": "overview-panel-mobile-open.jpg"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-11-10T11:01:54.359-0500",
      "body": "Since the decision made for <https://fluidproject.atlassian.net/browse/FLUID-5532#icft=FLUID-5532> is to redesign and implement a mobile-first UIO, instead of tweaking the styling for the overview panel, we tried another approach to simply hide the overview panel for mobile devices. However, in order for media query to kick in for smaller device width, especially for iOS devices, \"viewport meta tag\" needs to be used. The use of this meta tag causes some demos, such as pager and prefsFramework, only show their top left corner on mobile since those demos are designed for desktops. After a discussion with Dana and Justin, the decision is not to remove the overview panel, just leave as it is that shows the desktop versions on mobile to let users zoom.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-11T14:34:03.597-0400",
      "body": "@@Cindy Li could you please update these screenshots. They are missing, and I'm not exactly sure what they were of. ( e.g. current state, with the viewport meta tag, or a design )\n"
    }
  ]
}
---
1\. Border at top and bottom\
2\. Scroll entire panel\
3\. Add close link at bottom\
4\. Repalce star with open/close button\
5\. Replace text "Close" at bottom with "Try Demo"

        