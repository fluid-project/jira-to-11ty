---json
{
  "title": "FLUID-6108",
  "summary": "Redesign the Uploader component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-01-11T12:51:58.047-0500",
  "updated": "2021-07-29T01:49:00.498-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-989/",
      "key": "FLUID-989",
      "summary": "Implement the progress bar ARIA roles and states"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6045/",
      "key": "FLUID-6045",
      "summary": "The table header scrolls out of view as the file queue is scrolled"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4433/",
      "key": "FLUID-4433",
      "summary": "Can't delete file with keyboard & sometimes hitting delete makes browser go 'back'"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1809/",
      "key": "FLUID-1809"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The Uploader could use some redesign for the following things.

* Use of scrolling table makes it hard to style and have proper semantics ( <https://fluidproject.atlassian.net/browse/FLUID-6045#icft=FLUID-6045> )
* Multiple progress indicators firing at once are hard to communicate to an AT ( <https://fluidproject.atlassian.net/browse/FLUID-989#icft=FLUID-989> )
* Would like to remove the Progress component, only used for the Uploader. Could use standard HTML progress element instead.
* Forward delete for removing items with the keyboard is confusing ( <https://fluidproject.atlassian.net/browse/FLUID-4433#icft=FLUID-4433> )
* Most modern upload widgets support drag and drop
* etc.

        