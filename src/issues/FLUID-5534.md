---json
{
  "title": "FLUID-5534",
  "summary": "responsive UIO: Add the arrow for the navigation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2014-10-22T10:44:05.603-0400",
  "updated": "2017-10-31T15:02:58.758-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6180/",
      "key": "FLUID-6180"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-04-25T13:05:15.372-0400",
      "body": "What should happen in cases where the panel is too big to fit on screen, should we allow horizontal scrolling just for the panel?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-04-25T13:57:03.396-0400",
      "body": "An initial step will be to just add the arrows into the panels by the headers to indicate that there is more content available. They will not be interactive to trigger scrolling between panels yet at this stage.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-27T15:18:01.097-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/828) of the initial implementation has been merged into the project repo master branch at c3b3cdf783cdc48f89e8b57ceb46552d02ec967a\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-04-27T16:32:15.184-0400",
      "body": "For the next phase try to get the arrows to trigger scrolling where the left edge of the window lines up with the left edge of the next/previous panel. That is, any overflow from a panel that is too large will be cropped at the right.\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2017-08-21T10:45:01.569-0400",
      "body": "Moved the panel number breadcrumbs to <https://fluidproject.atlassian.net/browse/FLUID-6186#icft=FLUID-6186>.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-10-31T15:02:55.335-0400",
      "body": "[The code pull request](https://github.com/fluid-project/infusion/pull/844) has been merged at 61f29d2051d3557fdac8a68060c51f861ea24cc0\n\n[The doc pull request](https://github.com/fluid-project/infusion-docs/pull/127) has been merged at 94efb87dd8cd53caa13600efd7a1f2322bd8e631\n"
    }
  ]
}
---
Implement arrow buttons to navigate between adjuster panels.

See designs: \
<https://wiki.fluidproject.org/display/fluid/%28Floe%29+User+Interface+%28Learner%29+Options+Mobile+and+Responsive+Design>

        