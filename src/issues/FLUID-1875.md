---json
{
  "title": "FLUID-1875",
  "summary": "Best Case Canned Demo for UI Options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Michelle D'Souza",
  "date": "2008-12-01T11:30:12.000-0500",
  "updated": "2008-12-15T13:58:00.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "FSS",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1928/",
      "key": "FLUID-1928"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1929/",
      "key": "FLUID-1929"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-01T13:14:39.000-0500",
      "body": "dev-iteration47\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-04T09:47:48.000-0500",
      "body": "We should start off with the Sakai content from the UX initiative\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-05T11:49:33.000-0500",
      "body": "The sakai example is now in the shared section of the sample-code examples.&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-05T12:45:29.000-0500",
      "body": "Demo can be found in sample-code/shared/sakai\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-09T14:02:43.000-0500",
      "body": "This needs to be updated to reflect the changes made in <https://fluidproject.atlassian.net/browse/FLUID-1925#icft=FLUID-1925>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-09T15:32:40.000-0500",
      "body": "Bug Parade 0.6 release&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-11T11:35:26.000-0500",
      "body": "Changed the preview window to iframe\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-11T11:59:44.000-0500",
      "body": "There are a few bugs that I have noticed.\n\n1\\) when you open the iFrame the selected settings are always the same, to start, no matter what the current style on the page is\n\n2\\) when in simple layout the \"Add Widgets\" and \"Edit Appearance\" buttons aren't displayed properly\n\n3\\) If you switch to the simple layout and close the iframe. Then edit preferences again, the top of the iFrame is out of view. You cannot access the close button. A work around is to switch back to the \"No Preference\" layout and click \"Edit Appearnce\" again.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-15T11:44:32.000-0500",
      "body": "Reviewing Justin's comments from Dec. 11:\n\n1\\) is still present: when you open the iFrame the selected settings are always the same, to start, no matter what the current style on the page is\n\n2\\) This seems to be fine now - in simple layout, the Add Widgets and Edit Appearance buttons look fine to me\n\n3\\) This also seems fine - I can see the close button and activate it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-15T11:50:54.000-0500",
      "body": "\\#1 has been moved to it's own jira <https://fluidproject.atlassian.net/browse/FLUID-1963#icft=FLUID-1963>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-15T13:58:00.000-0500",
      "body": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The uPortal example is serving as the 'worst case' canned demo of UI Options. We should also provide a 'best case' example for users.

        