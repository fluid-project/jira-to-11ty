---json
{
  "title": "ENGAGE-279",
  "summary": "For the catalogue group artifacts by theme",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-01-22T09:52:11.000-0500",
  "updated": "2010-02-01T11:20:33.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Catalogue"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-279/ENGAGE-279.patch",
      "filename": "ENGAGE-279.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-22T17:30:04.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-279#icft=ENGAGE-279>.patch is a start at refactoring the catalogue view page to bring it up-to-date with the current wireframes.\n\nThe rendering has been rewritten (needs to be updated with new render utility functions)  and a new model for the component is defined in the options structure. Need to make sure that it actually works (haven't had a chance to test it yet). Also the data feed and mapping needs to be changed to get the info required in the model. Yura suggested that a move to the data feed used by the catalogue browse page without a title passed along should probably get all the required data to be mapped.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-23T23:26:20.000-0500",
      "body": "Added another view to couch which is the same as the current catalogue/view but it returns the artifact data from the exhibit document as well.\n\n<http://titan.atrc.utoronto.ca:5984/_utils/database.html?mccord_exhibitions/_design%2Fcatalogue%2FviewWithArtifacts>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-24T18:37:43.000-0500",
      "body": "Noticed that there is a bug in the couch view that I made, but I don't seem to be able to edit it, at the moment.\n\nCurrently there is a line of code that looks like this:\n\nreturn \\[artefacts ? artefactData(artefacts) : null];\n\nHowever instead of returning null, it should have returned an empty array.\n\nreturn \\[artefacts ? artefactData(artefacts) : \\[]];\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-26T11:06:23.000-0500",
      "body": "So the above comment was slightly wrong.\n\nthe correct return statement should look like this\n\nreturn artefacts ? \\[artefactData(artefacts)] : \\[];\n\nThe view has now been updated to reflect this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-01T11:20:33.000-0500",
      "body": "It appears that the catalogue view page is now displaying that artifacts by theme with the correct styling applied.\n"
    }
  ]
}
---
For the catalogue group artifacts by theme

        