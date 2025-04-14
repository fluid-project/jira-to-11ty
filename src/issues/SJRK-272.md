---json
{
  "title": "SJRK-272",
  "summary": "Custom theme script loading may cause race condition",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-09-03T16:52:25.379-0400",
  "updated": "2019-09-03T16:52:25.379-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The current method of loading custom theme CSS files (via sjrk.storyTelling.loadCustomThemeFiles) can potentially lead to a race condition. The files are loaded via a call to \[$.getScript|<https://api.jquery.com/jQuery.getScript/>], which will call its "success" callback after the script is loaded *but not necessarily executed*. The time between this loading and execution could therefore cause problems.

Look into how probable and/or possible this race condition is, and address it accordingly.

For further context on this issue, please refer to the discussion in the pull request review for SJRK-268: <https://github.com/fluid-project/sjrk-story-telling/pull/39>

        