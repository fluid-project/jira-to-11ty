---json
{
  "title": "FLUID-5394",
  "summary": "tooltip moves to the top left corner of the window",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2014-06-03T11:57:41.519-0400",
  "updated": "2014-06-13T13:16:08.253-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Pager",
    "Tooltip"
  ],
  "environment": "Firefox 29, Chrome 35, Safari 7 (Mac OS 10.9)\\\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5394/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-03T11:58:21.459-0400",
      "body": "screenshot.png shows the tooltip at the top left corner of the window.\n"
    },
    {
      "author": "beth.mejsullivan",
      "date": "2014-06-10T16:29:46.181-0400",
      "body": "When you hover over a page number, the tooltip opens and sets the \"originalTarget\" variable to the anchor (\\<a id=\"page-link:link9\" href=\"#\" aria-describedby=\"ui-tooltip-0\">) within the list item (\\<li class=\"flc-pager-pageLink demo-pager-pageLink-default\">).\\\nWhen you mouse off of the page number, the tooltip closes based on the \"originalTarget\" variable set when the tooltip was originally opened and the .\n\nIf you click the next button before the tooltip still has lost it's opacity, then the close function isn't started until the page reloads. When the page reloads the \"makeCloseHandler\" from the Tooltip.js file fires, but the originalTarget is now the list item and not the anchor within the list item. \\\nThe \"that.events.afterClose.fire(...)\" function does not return a value to show whether it successfully did the afterClose event.\n\nThen tooltip remains on the screen at the top-left hand corner of the page.\n\nInvestigating more...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-13T13:16:04.697-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/531> ) into the project repo at 8dd9adde512559455b3d02a905938dffd7b0ec10\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the pager demo\
<http://build.fluidproject.org/infusion/demos/pager/>

2\) hover over one of the page links so that the tooltip is displayed

3\) quickly click on a different page link, previous, or next before the tooltip is removed\
Notice that the tooltip moves to the top left corner of the window.

        