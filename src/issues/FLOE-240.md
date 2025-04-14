---json
{
  "title": "FLOE-240",
  "summary": "Tug-of-War script does not load in some readers",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-09-08T10:52:11.047-0400",
  "updated": "2015-03-25T15:41:37.339-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "EPUB"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-10-01T14:12:41.358-0400",
      "body": "The PhET team investigated:\n\n<https://github.com/phetsims/chipper/issues/70>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-10-24T10:09:04.425-0400",
      "body": "The PhET team apparently fixed this with an update to their 'chipper' module. On Oct. 1, I updated to their latest code and tried rebuilding the script and re-inserting it into our epub, but the script still didn't work in the affected browsers. I did not get the chance to delve deeply into exactly whether or not the offending character was still present in the obfuscated code or not; Jon is  probably in a better position to assess that, since he discovered the problem initially and is more familiar with where to look. My code is in github: <https://github.com/acheetham/EPUB/tree/FLOE-240>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-11-14T12:15:33.535-0500",
      "body": "The simulation works with the following caveat: If the keyboard accessibility flag is enabled in the PHeT simulation, the simulation appear then disappear in iBooks. However, if the accessibility flag is set to false, the simulation renders as expected.\n"
    }
  ]
}
---
The tug-of-war script does not load in iBooks or Lucifox, but it loads in Readium.

Investigate the issue and find a solution if possible.

        