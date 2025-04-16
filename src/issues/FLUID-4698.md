---json
{
  "title": "FLUID-4698",
  "summary": "UI Options won't resize text sized with rem",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Justin Obara",
  "date": "2012-04-17T08:55:06.738-0400",
  "updated": "2014-04-25T13:28:06.848-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-02-10T14:56:34.430-0500",
      "body": "If we shift the font-size adjuster to the \\<html> element, it seems to work a bit better with the rems. Still need to test in all browsers.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-02-11T07:45:25.679-0500",
      "body": "Anastasia Cheetham it seems that setting the size on \\<html> instead of \\<body> is the appropriate way to work with rems. The article that Johnny Taylor linked to in his post to the fluid-work list explains this.\n\n<http://snook.ca/archives/html_and_css/font-size-with-rem>\n\nIn general, it sounds like rems are the way to go, however, IE8 doesn't support them.\\\n<http://caniuse.com/#search=rem>\n\nThat being said, we have been considering dropping IE support post Infusion 1.5. If that is the case, I think we are fine to use rems, and move the font size setting from the \\<body> to \\<html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-23T10:07:52.270-0400",
      "body": "In looking into this issue, it seems that we need to change the strategy for adjusting font size a bit. Rather than setting the font size in ems, we will set it with a pixel value on the html element. All other font sizes can be set with rem or em values which will be based on this root.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-23T16:32:24.084-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/497>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-04-25T13:28:03.682-0400",
      "body": "Merged into the project repo @ c7c61c4e94f39c563bd6fa4227d82b2675029905\n"
    }
  ]
}
---
In working on the fluid studios site, Johnny spotted that text sized with rem values could not be resized by UI Options. \
He wrote a post on the fluid-work list describing the issue.

<http://old.nabble.com/Using-rem%27s-with-uiOptions...-to33682739.html>

        