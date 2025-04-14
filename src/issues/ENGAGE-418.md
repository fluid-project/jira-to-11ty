---json
{
  "title": "ENGAGE-418",
  "summary": "Artifact names in list view of My Collection are stuck in the language they were collected in",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-02-19T14:32:11.000-0500",
  "updated": "2017-12-22T09:44:21.587-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Internationalization",
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-418/ENGAGE-418.patch",
      "filename": "ENGAGE-418.patch"
    }
  ],
  "comments": [
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-22T07:02:54.000-0500",
      "body": "Patch <https://fluidproject.atlassian.net/browse/ENGAGE-418#icft=ENGAGE-418>.patch changes My Collection to allow language switching.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:21.585-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
"Currently because the artifacts are collected by their document id, they are language specific. Thus when the user collected some artifacts in one language and then switched the system language those artifacts will still be displayed in the language they were collected."

        