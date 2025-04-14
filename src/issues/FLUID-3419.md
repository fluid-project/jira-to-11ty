---json
{
  "title": "FLUID-3419",
  "summary": "revise code to remove parts no longer needed since the new re-design",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-08T15:39:14.000-0500",
  "updated": "2009-12-15T19:02:12.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-08T15:46:44.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-09T13:23:32.000-0500",
      "body": "Removed references to groupDescriptions. Did not need to change anything related to moduleDescriptions.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-09T14:42:44.000-0500",
      "body": "Reviewed the changes. They seem to only remove the unused code, around group descriptions. The unit tests are all passing and the local version seems to be running fine. I did sit with laurel for this change as well, and it was still building after the change was made.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-09T15:47:46.000-0500",
      "body": "Changes to <https://fluidproject.atlassian.net/browse/FLUID-3412#icft=FLUID-3412> have necessitated the removal of some of the code related to the moduleDescriptions\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-09T16:05:55.000-0500",
      "body": "removed selectors for moduleDescription\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-15T19:02:12.000-0500",
      "body": "I reviewed this code awhile ago and it was fine. Since then, we've actually put most of the removed code back into the release so the issue is especially moot. We're good for Builder 1.1.2.\n"
    }
  ]
}
---
When the front end was re-designed, several selectors were removed and changed. In particular the moduleDescriptions and groupDescriptions, but there may be others. We need to remove the unused code.

        