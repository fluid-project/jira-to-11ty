---json
{
  "title": "FLUID-2639",
  "summary": "Prep for allowing the custom build to create a concatenated CSS file.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Michelle D'Souza",
  "date": "2009-05-01T11:32:45.000-0400",
  "updated": "2011-02-28T16:45:16.766-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "FSS",
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-05-01T15:05:54.000-0400",
      "body": "Each JSON Dependencies build file needs to have a list of dependent CSS files in order, eg:\n\n{\"ModuleName\": {\\\n\"files\": \\[\"File.js\", \"File.js\"],\\\n\"dependencies\": \\[\"ModuleName\", \"ModuleName\"]\\\n\"cssFiles\" : \\[\"fss-layout.css\", \"fss-text.css\"]\\\n}}\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-01T15:08:02.000-0400",
      "body": "This should be done at the same time as the custom builder page JSON reformatting\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-05T21:44:43.000-0400",
      "body": "moved the task of adding the css file dependencies into the json files to a subtask of this parent task.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-11T08:51:32.000-0400",
      "body": "With the two subtasks complete, I believe this task is resolved.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:16.758-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
<http://wiki.fluidproject.org/display/fluid/Component+Contact+Directory>\
Refer to the above list of component owners to confirm css order is correct and complete.

        