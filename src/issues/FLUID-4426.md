---json
{
  "title": "FLUID-4426",
  "summary": "Sliding Panel needs ARIA and/or to move focus to beginning of panel when opened to alert screen readers of new content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Anastasia Cheetham",
  "reporter": "heidi valles",
  "date": "2011-09-01T14:32:32.603-0400",
  "updated": "2015-06-26T10:05:38.087-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "Sliding Panel",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5682/",
      "key": "FLUID-5682"
    },
    {
      "type": "Duplicate",
      "url": "/browse/STUDIO-22/",
      "key": "STUDIO-22"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5685/",
      "key": "FLUID-5685"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-09-01T14:39:21.267-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-16T15:34:15.342-0500",
      "body": "I have experimented with a number of ways to address this issue, without much success. The most \"correct\" seeming approach is to mark the panel up as an accordion using tablist/tab/tabpanel. I experimented with that here:\n\n<https://github.com/acheetham/infusion/tree/FLUID-4426-tabpanel>\n\nbut it doesn't cause a screen reader to say anything.\n\nAmong other things, I tried forcing focus onto one of the tabs after the panel opens (albeit using a total hack that is obviously not the proper way to do it):\n\n<https://github.com/acheetham/infusion/tree/FLUID-4426-focus-on-tab>\n\nThis at least causes the screen reader to read the tab text, which at least indicates to the user that something has happened. I'm not sure why we don't move focus into the panel already.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:06.866-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
When a screen reader users uses the panel button to show panel content, he/she isn't given any alerts as to the panel being open. Should focus jump to the beginning of the panel? Is there an expected behaviour for screen reader users/opening panels?

        