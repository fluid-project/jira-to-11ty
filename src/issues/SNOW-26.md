---json
{
  "title": "SNOW-26",
  "summary": "Sidebar navigation not following hierarchy ",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eloisa Guerrero",
  "reporter": "Caren Watkins",
  "date": "2018-07-04T17:44:36.297-0400",
  "updated": "2018-08-10T09:26:31.244-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-558/",
      "key": "FLOE-558",
      "summary": "Change category landing pages to use a better method "
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SNOW/SNOW-26/Screen Shot 2018-07-04 at 5.20.40 PM.png",
      "filename": "Screen Shot 2018-07-04 at 5.20.40 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-07-06T11:51:14.019-0400",
      "body": "> 1\\. when clicked on from primary navigation menu bar at top of home page, Assistive Tech intro page displays correctly to right of sidebar (where white page and red header is) BUT sidebar highlights Augmentative Processing.\n\n \n\nJonathan Hung and I found that as a limitation of Wordpress, only posts can support custom metadata (the \"is\\_landing\\_page\" custom field) and so only posts can be landing pages. We will need to figure out a way to generate landing pages from page types as well but that will require a custom metadata from pages and will need to extract that into a query. This will require at least a week's worth of work.\n\n \n\n> 2\\. Level sections directly under Assistive Technology in the sidebar should include Alternative Display, Augmentative Processing, Alternative control (and others which have yet to be input). Presently other items are listing in the sidebar at the same level as the three noted above however they should fall under those sections. For example Alternative Keyboards and Switches should be under Alternative Control.\n\nWith the current sidebar code we can only nest once. Jon and I talked about a possible solution which is to create two Wordpress queries: one to get the parents (the main categories that appear on the menu), and then another one to get the children of each of the parents, then generate the sidebar in a nested query. We'd need to spend some time to create those queries and make sure they return the results we want, test to make sure it is robust, and then style it. This might take 3-4 days worth of work, but Jon mentioned that somewhere down the line there is some refactoring that needs to be done for the sidebar so this might just be as short-term solution.\n"
    },
    {
      "author": "Caren Watkins",
      "date": "2018-07-06T14:41:20.710-0400",
      "body": "> 2\\. Level sections directly under Assistive Technology in the sidebar should include Alternative Display, Augmentative Processing, Alternative control (and others which have yet to be input). Presently other items are listing in the sidebar at the same level as the three noted above however they should fall under those sections. For example Alternative Keyboards and Switches should be under Alternative Control.\n\nWith the current sidebar code we can only nest once. Jon and I talked about a possible solution which is to create two Wordpress queries: one to get the parents (the main categories that appear on the menu), and then another one to get the children of each of the parents, then generate the sidebar in a nested query. We'd need to spend some time to create those queries and make sure they return the results we want, test to make sure it is robust, and then style it. This might take 3-4 days worth of work, but Jon mentioned that somewhere down the line there is some refactoring that needs to be done for the sidebar so this might just be as short-term solution.\n\n \n\nfrom Caren: I was thinking the deeper nesting would be transferred to the breadcrumbs, but as my conversation with Jon revealed, the back end does not transfer nesting levels over to breadcrumbs. \n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2018-07-12T15:50:56.786-0400",
      "body": "This issue should be tackled with <https://issues.fluidproject.org/browse/FLOE-558>\n\n \n\nI think this Jira can be closed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2018-07-12T15:52:48.918-0400",
      "body": "Fixing <https://fluidproject.atlassian.net/browse/FLOE-558#icft=FLOE-558> should fix this issue, but may require some testing and tweaks to work specifically with SNOW.\n"
    }
  ]
}
---
Assistive Technology page as example:

1\. when clicked on from primary navigation menu bar at top of home page, Assistive Tech intro page displays correctly to right of sidebar (where white page and red header is) BUT sidebar highlights Augmentative Processing.

2\. Level sections directly under Assistive Technology in the sidebar should include Alternative Display, Augmentative Processing, Alternative control (and others which have yet to be input). Presently other items are listing in the sidebar at the same level as the three noted above however they should fall under those sections. For example Alternative Keyboards and Switches should be under Alternative Control.

        