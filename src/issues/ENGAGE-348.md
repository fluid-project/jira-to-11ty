---json
{
  "title": "ENGAGE-348",
  "summary": "Ensure that My Collection is internationalizable ",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Justin Obara",
  "date": "2010-02-08T17:03:30.000-0500",
  "updated": "2010-02-18T11:06:45.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-08T17:03:58.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T17:15:29.000-0500",
      "body": "We just need to double-check that this has been done fully. Sveto, can you confirm?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T10:18:57.000-0500",
      "body": "Justin committed new translations for Artifact Collect View against <https://fluidproject.atlassian.net/browse/ENGAGE-352#icft=ENGAGE-352>, and Sveto tells me that there are a handful of other strings that still need to be translated.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T11:06:35.000-0500",
      "body": "My Collection is indeed internationalizable. A few lingering strings need to be translated, which have been filed under <https://fluidproject.atlassian.net/browse/ENGAGE-403#icft=ENGAGE-403>.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T11:06:45.000-0500",
      "body": "This one is ready to go for Engage 0.3b\n"
    }
  ]
}
---
Ensure that My Collection is internationalizable&#x20;

The component should have a strings options object for any strings used by the component. The service for it should be able to locate the correct message bundle (as identified in the lang url parameter) and send it to the component.

        