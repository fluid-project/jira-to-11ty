---json
{
  "title": "FLUID-6268",
  "summary": "In FF, not all fonts are resized - works fine in Chrome",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Mike Gifford",
  "date": "2018-03-29T13:23:00.382-0400",
  "updated": "2024-07-24T12:55:04.440-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "Drupal 8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-04-03T13:29:33.543-0400",
      "body": "Regarding the line-height. Unfortunately the line spacing enactor isn't able to adjust the line-height for nested elements which already have their line-height set. See <https://fluidproject.atlassian.net/browse/FLUID-4491#icft=FLUID-4491>. \n\nFor the fontsize, if an element is set with a size in px it will not be resized. Only values set with relative sizes e.g. em, rem will be resized. Is there a specific element you can point us at that should resize but isn't?\n\n \n"
    },
    {
      "author": "Mike Gifford",
      "date": "2018-04-03T13:43:18.515-0400",
      "body": "Thanks Justin. \n\nInteresting to think about the nested elements with line-height.\n\nNot using pixels..  Good reminder, but interesting that it limits things like this.  Makes sense as it isn't relative.\n\nAre these written up somewhere?  Would be great to be able to review to see that best practices are followed and which ones actually matter for this widget.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-04-04T09:30:23.127-0400",
      "body": "Mike Gifford I think this tutorial will help a bit\n\n<https://docs.fluidproject.org/infusion/development/tutorial-userInterfaceOptions/WorkingWithUserInterfaceOptions.html>\n\n \n\nThere are other tutorials there that might help with other aspects, including some on contrast.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-24T12:55:04.440-0400",
      "body": "While the adjustments had been working as designed, css custom properties have been added and can be hooked into to allow for more integrator controlled adjustments.\n"
    }
  ]
}
---
In the demo here we set up <http://test-cela.pantheonsite.io/>

The page resize doesn't work properly in FF.  Similar isssue with line heights.

        