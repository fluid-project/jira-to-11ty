---json
{
  "title": "FLUID-5588",
  "summary": "Fluid docpad build process should handle relative URLs / paths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-01-20T10:26:23.741-0500",
  "updated": "2020-03-12T09:00:40.238-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5590/",
      "key": "FLUID-5590"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6477/",
      "key": "FLUID-6477"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-29T16:19:21.976-0400",
      "body": "I'd like to add that hard-coding URLs in the website configuration makes it hard to deploy the website in various ad-hoc environments, specially for testing, because then a configuration file needs to be modified instead of relying on relative URLs working everywhere.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-03-11T12:33:42.162-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/fluidproject.org/pull/40> ) into the project repo. Note that this doesn't use a helper function, so it assumes that the site is always deployed at root. However both `npm run docpad` which runs a local server and our actual site are hosted at root. Because we are going to be changing the static site generation soon as part of this [GSoC project](https://wiki.fluidproject.org/display/fluid/Google+Summer+of+Code+2020+with+the+Fluid+Project#GoogleSummerofCode2020withtheFluidProject-MigrateFLOEandFluidprojectwebsitestoaModernStaticSiteGenerator), I figure we can handle other uses cases in the new site generator.\n"
    }
  ]
}
---
Docpad does not handle paths well for sites which are not deployed to root. To work around this, an url value is defined in docpad.coffee which must be changed prior to deployment to a new server. This URL value is being used in the scripts and styles partials to create absolute paths to javascript and CSS files.

This url value and the scripts and styles partials should be replaced with helper function that properly builds relative URLs to scripts and styles files so everything runs independently of deployment configuration.

        