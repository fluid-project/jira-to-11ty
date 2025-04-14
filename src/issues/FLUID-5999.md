---json
{
  "title": "FLUID-5999",
  "summary": "Contrast of \"Restart Demo\" link meet WCAG standards",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Justin Obara",
  "date": "2016-10-26T16:18:08.991-0400",
  "updated": "2016-11-01T16:15:39.980-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos",
    "Progress"
  ],
  "environment": "Safari 10 ( macOS 10.12 )\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6008/",
      "key": "FLUID-6008"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5999/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-26T16:18:53.543-0400",
      "body": "screenshot.png shows the low contrast of the \"Restart the Demo\" link.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-10-28T14:03:39.938-0400",
      "body": "Fixing as part of <https://fluidproject.atlassian.net/browse/FLUID-6008#icft=FLUID-6008>. The validator also reports a contrast issue for the \"Submit\" button in its inactive state, but this is an allowable exception per <https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html:> \"Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-01T16:15:39.978-0400",
      "body": "Addressed with work on <https://fluidproject.atlassian.net/browse/FLUID-6008#icft=FLUID-6008>\n"
    }
  ]
}
---
On the [progress demo](http://build.fluidproject.org/infusion/demos/progress/index.html) the "Restart the Demo" link is light blue on a green background; however, this does not pass WCAG contrast guidelines.

from tota11y:\
"The color combination #2199e8/#afddc5 has a contrast ratio of 2.06, which is not sufficient. At this size, you will need a ratio of at least 4.5."

a suggestion is to set the font colour to #006095

        