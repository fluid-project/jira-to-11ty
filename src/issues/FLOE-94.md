---json
{
  "title": "FLOE-94",
  "summary": " Users cannot remove headings using a keyboard only. Headings do not have screen reader support if they converted to HTML",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alexey Novak",
  "reporter": "Alexey Novak",
  "date": "2012-10-31T16:16:22.440-0400",
  "updated": "2014-03-03T12:38:45.425-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alexey Novak",
      "date": "2012-11-13T16:15:44.982-0500",
      "body": "The issue of screen reader not being able to read the heading was present when new line breaks would be converted into HTML \\<br> tags.\n"
    }
  ]
}
---
Headings and Subheadings do not announce themselves if they were added by the user and header is converted into HTML markup\
They announced properly when server loads and existing resource with existing headings or subheadings (django generated content)\
But they are not announced after user created them and have not saved and refreshed the page (javascript generation)

Related assembla ticket <https://www.assembla.com/spaces/iskme/tickets/891>

        