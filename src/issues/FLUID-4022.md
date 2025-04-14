---json
{
  "title": "FLUID-4022",
  "summary": "Reconsider using important! tag",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-01-07T10:19:43.269-0500",
  "updated": "2011-06-07T14:00:44.695-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-03-07T16:40:35.503-0500",
      "body": "How enhancer applies styles now:\\\n-remove clashing classes from container (\\<body>)\\\n-add styles for font, spacing, theme, layout on container\\\n-remove background images if chosen\\\n-sets text size on container\\\n-sets line spacing on container\\\n-sets table of contents\\\n-styles links\\\n-styles inputs\n\nAll FSS stylesheets are added by user into the \\<head>, Enhancer adds/removes fl- classnames as appropriate to reflect user's options.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-15T12:12:22.564-0400",
      "body": "Pull request sent for branch in my github. !importants removed except for where they make sense in fss-layout (linear and no bg imgs).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-19T14:42:18.056-0400",
      "body": "I've pushed the changes, from heidi's branch for this issue, into the project repo at fd9978f0dbe114c186eca0d95493e5861acc17ae\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-06-02T14:30:26.013-0400",
      "body": "There are still four !important tags in the HCI theme that are unrelated to background images. Removing them doesn't seem make any of the FSS styles/widgets look any different, except for actually improving the widget by making the border visible. This might want to be addressed in conjunction with <https://fluidproject.atlassian.net/browse/FLUID-4219#icft=FLUID-4219>.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-06-06T10:20:46.125-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/65>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-07T14:00:30.646-0400",
      "body": "setting resolution\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-07T14:00:44.694-0400",
      "body": "Merged into the project repo at e2281c2845b279948bb579b7e0d07591ea6c3bc8\n"
    }
  ]
}
---
The important! tag is a problem as it's not over-ride-able, forcing the user to edit fss itself. With uportal, it is often the case that stylesheets are added in layers (site->skin->portlet), making fss on the site level especially frustrating.

!important is used in:

fss-layout.css\
fss-text.css\
fss-theme-coal.css\
fss-theme-hc.css\
fss-theme-hci.css\
fss-theme-mist.css\
fss-theme-rust.css\
fss-theme-slate.css

        