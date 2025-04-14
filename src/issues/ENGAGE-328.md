---json
{
  "title": "ENGAGE-328",
  "summary": "Styling issues with the upcoming exhibition detail page",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "James Yoon",
  "date": "2010-02-05T14:25:55.000-0500",
  "updated": "2010-02-22T16:58:53.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-328/ENGAGE-328-trunk.patch",
      "filename": "ENGAGE-328-trunk.patch"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-05T16:03:36.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-22T11:55:29.000-0500",
      "body": "changed the image size to 72x72 and changed the font size of the title and date as well as the left margin of the exhibition-title-date\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-22T12:04:37.000-0500",
      "body": "i imagine the dateUtils.js is where to change the date issue stated above, but i'm not sure how to do that.\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-22T16:22:48.000-0500",
      "body": "date format is coming from the data feed from McCord\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-22T16:31:30.000-0500",
      "body": "Styling patch committed at revision 9472 - issue with date representation cannot be fixed here since these strings come from the gallery. Should be adjusted either upstream or else in the CouchDB\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-22T16:58:53.000-0500",
      "body": "Tested on 02/22/2010, 4:23 PM EST.\n\nLooks good. Minor issues persist (text alignment on second line of date, date format), but nothing to fret about for 0.3. Issue closed.\n"
    }
  ]
}
---
* Exhibition thumbnail should be 72x72 (not the wide aspect ratio one currently on there)
* Dates should read "month day, year - month day, year", not "from month day, year to month day, year")

        