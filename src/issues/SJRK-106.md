---json
{
  "title": "SJRK-106",
  "summary": "Review and normalize CSS class names",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T15:04:32.068-0400",
  "updated": "2018-12-04T11:25:10.369-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-12-03T11:00:43.827-0500",
      "body": "After careful consideration and reviewing other projects in fluid-project and fluid-lab repositories, I have chosen to make the following changes:\n\n* \"sjrk-storyTelling-...\" and \"sjrkc-storyTelling-...\" will become \"sjrk-st-...\" and \"sjrkc-st-...\" respectively\n* \"sjrk-storyblock-block-...\" and \"sjrkc-storyblock-block-...\" will \"sjrk-st-block-...\" and \"sjrkc-st-block-...\" respectively\n* \"sjrk-storyblock-...\" and \"sjrkc-storyblock-...\" will \"sjrk-st-block-...\" and \"sjrkc-st-block-...\" respectively\n\nthe latter two should not have any collisions within the newly-combined \"block\" classes\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-12-03T18:03:07.535-0500",
      "body": "Removed a couple of unused classes from the CSS file as well:\n\n* .sjrk-storyTelling-label-container (only a pseudoselector on this is being used, currently)\n* .sjrk-storyTelling-story-previewPane\n* .sjrk-storyTelling-storyPreview\n"
    }
  ]
}
---
The CSS class names used throughout the project are somewhat inconsistent, and should be brought into a more consistent state. They should also conform to CSS class name conventions.

E.g. we have classes like "sjrk-storyTelling-....", "sjrk-storyTelling-block-....", "sjrk-storyblock.." et cetera. This is inconsistent and potentially confusing. They are also using uppercase letters, which are verboten.

        