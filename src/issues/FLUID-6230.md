---json
{
  "title": "FLUID-6230",
  "summary": "In responsive view the tab focusing the contrast panel doesn't centre it in the view.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-11-24T13:16:51.284-0500",
  "updated": "2021-07-29T01:51:47.967-0400",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6230/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-11-24T13:20:23.682-0500",
      "body": "For UIO+ we can modify the behaviour to add the a modelListener on panelIndex to scroll the panel. This effectively snaps the panels into place on scroll.\n\n```javascript\nmodelListeners: {\r\n    \"panelIndex\": {\r\n        listener: \"fluid.prefs.arrowScrolling.scrollToPanel\",\r\n        args: [\"{that}\", \"{that}.model.panelIndex\"],\r\n        includeSource: \"scrollEvent\"\r\n    }\r\n}\n```\n\nIn ArrowScrolling.js we can remove the \"excludeSource: \\[\"scrollEvent\"]\" from the \"panelIndex\" modelListener\" however, there are still some issues. In Firefox it doesn't scroll far enough to indicate that a new panel is on screen so the problem still remains. Also, because this code is still run in the desktop view, it makes scrolling appear jittery.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-24T14:01:25.860-0500",
      "body": "screenshot.png shows the the contrast panel misaligned after tab focusing it in the mobile view.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-27T08:52:58.695-0500",
      "body": "The styling of the panel should also be reviewed, as it seems they are slightly larger than the viewport width. I believe this has to do with extra padding in the panel and the border around each panel.\n"
    }
  ]
}
---
When tab focusing the contrast panel adjuster in the responsive view it isn't centred on screen like the other adjusters.

Steps to reproduce:

1. Open the UI Options demo
2. Adjust the window size ( on desktop ) so that the mobile presentation is shown
3. Open UI Options
4. Using the keyboard tab to the contrast adjuster

Notice that it isn't centred in the screen.

        