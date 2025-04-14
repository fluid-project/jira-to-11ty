---json
{
  "title": "FLUID-1935",
  "summary": "Consolidate Uploader.css and infusion-theme.css with the Fluid Skinning System.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Colin Clark",
  "date": "2008-12-05T18:08:05.000-0500",
  "updated": "2008-12-16T09:23:57.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1980/",
      "key": "FLUID-1980",
      "summary": "Uploader Springboard needs to be brought up-to-date with Uploader2"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1935/FLUID-1935.patch",
      "filename": "FLUID-1935.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1935/FLUID-1935-just-css-file.patch",
      "filename": "FLUID-1935-just-css-file.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-08T10:44:29.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-12T12:25:36.000-0500",
      "body": "This is a pretty big patch that touches a number of files including tests. Note I also need to make sure that the server version is working but since that is another code-base, any changes to that will be in another patch.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-12T13:16:37.000-0500",
      "body": "For some reason the new fluid.components.uploader.css file was not coming through in the patch. This is just that file.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-12T17:19:59.000-0500",
      "body": "I'm seeing some inconsistency in naming of styles for components. The uploader styles all start with \"fl-uploader-\" i.e. \"fl-\" followed by the component name (see fluid.components.uploader.css).\n\nBut other components use style names that start with the component name i.e. there is no \"fl-\" prefix (e.g. \"ui\\_options\\_container\" and \"ui-dialog\" and \"inlineEdit-invitation\" and \"orderable-\\*\")\n\nShould we decide on a convention and stick to it, or was there a reason for the existing scheme?\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T12:22:47.000-0500",
      "body": "I'm marking this fixed. There is certainly other tweaking that could be done to improve this integration but for the moment the CSS is consistent, we've removed a file, and significantly tightened up another. I am happy.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T14:22:39.000-0500",
      "body": "Three problems were introduced in the refactoring of the CSS, both of which only appear in the Uploader Springboard.&#x20;\n\nWhile the springboard uses it's own CSS declaration, it was brought into line with the new selectors. Otherwise we would have had to override every selector in the springboard initter. (Which would have been a great test but for another time.)\n\nThe three bugs are:&#x20;\n\n* the Uploader would fail on init. Caused by more than one fl-uploader-queue object in markup.&#x20;\n* Remove buttons not working, because the selector had changed\n* Row template in the second example being visible. This one puzzles me... this markup didn't change\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T14:32:31.000-0500",
      "body": "New patch with fixes for the three problems listed above. Plus some detabbifying just to make it hard to see what's what 😉\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T18:06:55.000-0500",
      "body": "Moving Springboard problems to there own JIRA (<https://fluidproject.atlassian.net/browse/FLUID-1980#icft=FLUID-1980>).&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T18:09:11.000-0500",
      "body": "I removed the <https://fluidproject.atlassian.net/browse/FLUID-1935#icft=FLUID-1935>.b.patch file because it is no longer part of this JIRA and is now superseded by the patch attached to <https://fluidproject.atlassian.net/browse/FLUID-1980#icft=FLUID-1980>\n"
    }
  ]
}
---
At the moment, Uploader uses a different set of conventions for CSS classes, calling the namespace "fluid-" instead of "fl-." We also have a file called infusion-theme.css which could be confused with the other themes we've got. Let's consolidate the Uploader's CSS with the skinning system.

        