---json
{
  "title": "SJRK-8",
  "summary": "Message loader doesn't fallback properly",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2017-09-08T17:11:48.687-0400",
  "updated": "2018-07-20T14:23:22.941-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When specifying the storyAuthoring.resourceLoaderConfig.locale setting, it will not locate the correct message file when the region is specified in addition to the language.

In this case, if the "locale" is set to "fr-CA" in the index\_fr.html file, the resource loader looks for message files that end in "fr-CA" (which don't exist), but then it falls back to "en" (which is the default) rather than "fr" (which is what is expected).

Needs further investigation and need to identify a replication case. Does the feature exist and the documentation is unclear about it? Does the feature not exist and the documentation is incorrect?

        