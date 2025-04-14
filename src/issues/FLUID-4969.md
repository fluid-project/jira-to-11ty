---json
{
  "title": "FLUID-4969",
  "summary": "Research the possibility of changing the highlight color while changing the contrast",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Arash Sadr",
  "date": "2013-04-02T14:05:03.882-0400",
  "updated": "2016-07-08T11:12:59.011-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4719/",
      "key": "FLUID-4719"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-04-02T14:43:26.983-0400",
      "body": "This is definitely possible using the :selection pseudo class.\n\ni.e.\\\np.red::selection {\\\nbackground: #ffb7b7;\\\n}\n\nSource: <http://css-tricks.com/overriding-the-default-text-selection-color-with-css/>\n"
    },
    {
      "author": "Arash Sadr",
      "date": "2013-04-03T10:43:08.892-0400",
      "body": "Thats great,\\\nI found a similar article (<http://www.paulund.co.uk/change-browser-highlight-colour>) about this issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T11:11:47.132-0400",
      "body": "Removed missing images\n"
    }
  ]
}
---
Research the possibility of changing the highlight color while changing the contrast

        