---json
{
  "title": "FLUID-4173",
  "summary": "Add an \"active\" style for fl-list-menu",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-04-04T10:24:37.604-0400",
  "updated": "2011-04-19T14:45:08.633-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4173/list-test.html",
      "filename": "list-test.html"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-04-11T12:03:37.384-0400",
      "body": "webapp/demos/fss/layout/css/layout.css has fl-activemenu , seems like it just needs to be renamed/added to fss-layout\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-12T09:35:46.263-0400",
      "body": "Branch up at <https://github.com/heidiv/infusion/tree/FLUID-4173> -  Added activemenu and hover styles to fss-layout.css for fl-list-menu. Also edited the theme styles to apply activemenu correctly by styling the link, not the li. Was not being applied before. The colour choices for some of the themes activemenu (light grey text on a lighter grey background - hard to read) seem wrong, but will leave as is for now.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-12T09:37:15.373-0400",
      "body": "Hey Justin, can you have a look at this and let me know what you think? Attached is a test page for a list I put in /demos/fss if that helps.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-14T12:54:50.439-0400",
      "body": "Heidi I've tried the fss themes demo in your branch. I'm noticing that there are some contrast issues for some of the themes. For example, with slate and coal it is hard to read the text of the active menu. For Mist the text changes to white when it is hovered over, which is the same colour as it's background.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-14T15:39:01.882-0400",
      "body": "Colours updated/fixed and added to my github branch.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-19T14:45:08.631-0400",
      "body": "I've pushed the <https://fluidproject.atlassian.net/browse/FLUID-4173#icft=FLUID-4173> changes from heidi's branch into the project repo at fd9978f0dbe114c186eca0d95493e5861acc17ae, also had to fix a minor merge conflict\n"
    }
  ]
}
---
It seems like the list-menu styles should include an "active" option.

        