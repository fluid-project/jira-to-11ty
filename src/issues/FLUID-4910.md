---json
{
  "title": "FLUID-4910",
  "summary": "Create a consistent style guide across all Infusion components for default styles",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Reopened",
  "assignee": "Dana",
  "reporter": "James Yoon",
  "date": "2010-10-18T15:08:06.261-0400",
  "updated": "2021-07-29T01:45:45.359-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Inline Edit",
    "Layout Reorderer",
    "Pager",
    "Prefs Framework",
    "Progress",
    "Reorderer",
    "Sliding Panel",
    "Table of Contents",
    "Tabs",
    "Tooltip",
    "UI Options",
    "Undo",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4329/",
      "key": "FLUID-4329"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-07-07T10:34:22.348-0400",
      "body": "From testing components with UIO:\\\n-Reorderer: req'd css should be moved to FSS instead of req'd by implementer to add, and added to themes as well\\\n-Inline Edit: theming needed for icons, invitation text, invitation background hover/active. \"Make inputs larger\" doesn't affect it, but James says that is fine since it's a special case.\\\n-Pager: colour of links not themed (get dk blue on black links for w/b for ex)\\\n-Progress: for all themes, progress bar fill colour same as bg colour. There's a border around the bar which helps but seems like opposite colour would be better\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-12T11:58:29.702-0400",
      "body": "Dana I've assigned this jira to you, but feel free to pass it along to someone else if you think it is more appropriate.\n"
    }
  ]
}
---
Create an 'infusion' theme

        