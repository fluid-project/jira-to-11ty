---json
{
  "title": "FLUID-672",
  "summary": "ATutor Fluid theme break when name=\"id\" is a form attribute",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Greg Gay",
  "date": "2008-05-29T15:20:37.000-0400",
  "updated": "2008-06-05T11:31:35.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "ATutor\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-04T09:40:57.000-0400",
      "body": "I was unable to recreate this issue using the Fluid samples. I'm going to work with Greg to try to isolate the issue.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-05T09:40:12.000-0400",
      "body": "The issue is a bug in jQuery where using a selector with the  id starts with filter causes a 'z.indexOf is not a function' error when there is a radio button with the name 'id'\\\nI've opened a ticket in jQuery's Trac: <http://dev.jquery.com/ticket/2990>\n\nThe work around for ATutor is to use a different selector. One selector which will work is: \"div\n\n<!-- media: file UNKNOWN_MEDIA_=atutor -->\n\n\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-05T11:31:35.000-0400",
      "body": "I got confirmation from Greg that the issue in ATutor is now solved.&#x20;\n"
    }
  ]
}
---
Fluid V.0.2/ATutor 1.6.1

In ATutor when the Fluid theme is enabled, and there is a form on the page that has either name="id" or id="id" as an attribute in the form, which ever area of the theme is floating to the right is forced to the bottom of the screen. The HTML validates so its not an HTML error, and it does not happen in any other ATutor themes, so can only be coming from the fluid libs. When the values "id" are changed to something else. everything works fine.

dev-iteration35

        