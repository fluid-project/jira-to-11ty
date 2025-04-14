---json
{
  "title": "SNOW-4",
  "summary": "Customize pages and posts and fix home page oddities",
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
  "reporter": "Eloisa Guerrero",
  "date": "2017-12-08T10:48:34.634-0500",
  "updated": "2018-07-12T15:37:21.602-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SNOW/SNOW-4/Screen Shot 2017-12-08 at 10.48.14.png",
      "filename": "Screen Shot 2017-12-08 at 10.48.14.png"
    }
  ],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-02T13:23:15.356-0500",
      "body": "Tasks left for this Jira are:\n\n* Fix About Us page so that the content width fits in with the rest of the layout.\n* Change colours for the links to the SNOW colour palette.\n* Adjust margins in the front panel headers.\n* Display the a11y-theme div with block to override flex.\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-07T08:59:48.973-0500",
      "body": "* About Us and front panel header margins showing correctly on SNOW devsite but not on my local machine; ask someone else (@@Jonathan Hung?) to view it on theirs to double check?\n* Colours changed.\n* Instead of applying a display: block !important, using existing UIO overriding classes to set display: flex. Renamed class to new UIO classes (the newer version has a .smallScreen and wideScreen class): .fl-panelBar-wideScreen.\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-07T09:17:33.783-0500",
      "body": "Also had to put back category.php – I had actually overwritten the main content block as:\n\n```java\n<main id=\"content\" class=\"a11y-site-main columns\">\n```\n\nWhere the original parent class was not consistent with the rest of the site.\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-09T12:00:21.329-0500",
      "body": "Tasks left for this Jira are:\n\n* ~~Fix About Us page so that the content width fits in with the rest of the layout.~~\n* ~~Change colours for the links to the SNOW colour palette.~~\n* ~~Adjust margins in the front panel headers.~~\n* ~~Display the a11y-theme div with block to override flex.~~\n\n@@Jonathan Hung had some comments on my PR:\n\n<https://github.com/grrrero/snow-theme/pull/5/files#r166647582>\n\n\"We try to use !important sparingly as it can cause problems with UIO and custom style sheets because our !important will take precedence.\n\nInstead try being more specific with the CSS rule / criteria. So instead of h1.entry-title, maybe something like:\\\n.a11y-theme .ally-site-main-container .ally-site-main h1.entry-title\n\nThe more specific the CSS rule, the higher the precedence. This can help avoid the use of !important.\"\n\nAnd maybe set box-shadow to a grey line to the side so we don't need to do a z-index or move the aside after the main.\n"
    }
  ]
}
---
See attachment for mockup.

        