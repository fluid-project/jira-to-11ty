---json
{
  "title": "FLUID-714",
  "summary": "Upgrade Fluid to latest jQuery (1.2.6)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-09T12:33:39.000-0400",
  "updated": "2011-01-30T11:58:19.156-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-09T12:34:59.000-0400",
      "body": "This should also include upgrading jQuery UI to 1.5 (released today, June 9, 2008)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-25T16:06:32.000-0400",
      "body": "Make that jQuery UI 1.5.1 (released tomorrow, June 26, 2008)&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-03T21:09:06.000-0400",
      "body": "Other than the fact that the fix to <http://dev.jquery.com/ticket/2599> doesn't seem to have address the Reorderer issue of destroying the 'droppable' of the avatar, the port seems complete. I've handed it off to Justin for a thorough testing (on the branch). Once he's confirmed that it's working well, I'll merge the branch into trunk.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-07T16:52:24.000-0400",
      "body": "Justin found the following issue that seems to be apparent only in the upgraded branch. I'll investigate.\n\n1\\) nested reorderables slow to move (mouse dnd)  after portlet moved\n\na) drag lightbox portlet to right column\\\nb) attempt to drag one of the fruit to a new location\n\nseems to be mainly in FF, but also a bit in IE\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-07T17:20:16.000-0400",
      "body": "Indeed - it is slower, and the drop marker becomes fatter as well.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-08T13:45:26.000-0400",
      "body": "This performance issue is actually related to a bug that was present before the upgrade, but has only become apparent since the upgrade: <https://fluidproject.atlassian.net/browse/FLUID-856#icft=FLUID-856>.&#x20;\n\nIn the given test case, a second Reorderer is being created for the Lightbox, and hence a second dropMarker. Before the upgrade, it didn't actually affect anything, but something in the upgrade resulted in the second dropMarker actually being moved/shown/hidden (it wasn't before), which resulted in the increased width and performance degradation.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-30T11:56:38.703-0500",
      "body": "Reopening these issues to add the frameworkcomponent\n"
    }
  ]
}
---
The upgrade should be done in a branch, and QAd thoroughly.

When the upgrade is being done, we should check if there is an new version of QUnit and upgrade that as well.

dev-iteration38

        