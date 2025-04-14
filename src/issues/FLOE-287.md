---json
{
  "title": "FLOE-287",
  "summary": "Put keyboard accessible PhET simulation in the EPUB exemplar",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-03-10T15:32:41.545-0400",
  "updated": "2020-10-21T11:42:21.578-0400",
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
      "author": "Jonathan Hung",
      "date": "2015-03-25T16:25:27.398-0400",
      "body": "Dev 9 version of the sim is now working in the EPUB.&#x20;\n\nGithub: <https://github.com/jhung/EPUB/tree/FLOE-287>\n\nOriginal version: <http://www.colorado.edu/physics/phet/dev/html/forces-and-motion-basics/1.1.5-dev.9/forces-and-motion-basics_en.html?screens=1>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2016-07-29T10:10:42.217-0400",
      "body": "The forces and motion basics sim isn't really an ideal choice now. John Travoltage may be more appropriate. This would require changing the chapter in the exemplar though which is additional work.\n"
    }
  ]
}
---
Currently the script in the EPUB 3 exemplar does not have a keyboard accessible version of the PhET simulation. An accessible version to be added to the EPUB 3 example.

Previous attempts at adding the accessible version have been unsuccessful (the canvas shows up blank, but elements can still be interacted with even though it is invisible).

        