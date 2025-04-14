---json
{
  "title": "KETTLE-63",
  "summary": "Add recursive file datasource",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2017-09-21T08:22:25.632-0400",
  "updated": "2017-09-25T10:24:18.827-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Kettle should have a recursive datasource that can be used to give a toplevel folder and a filename, and then expect kettle to search the given toplevel folder and all levels of subfolder recursively for the given filename.

The need for this has come up in GPII where we organize the NP sets in subfolders but would like to be able to log in an NP set found in any of these subfolders without having to specify which in a configuration or the like

        