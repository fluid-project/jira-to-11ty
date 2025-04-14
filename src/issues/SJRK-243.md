---json
{
  "title": "SJRK-243",
  "summary": "Fix the images on the website so that a caption is displayed below them.",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2019-04-05T14:58:15.351-0400",
  "updated": "2019-04-05T15:10:43.586-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "SoJustRepairIt.org"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2019-04-05T15:01:02.408-0400",
      "body": "Netlify had an issue opened against them for adding captions to images: <https://github.com/netlify/netlify-cms/issues/1058>\n\nThey closed the issue and suggested using a custom editor component or Hugo shortcode to solve the issue.\n\n@@Avtar Gill and I decided that the Hugo shortcode would result in easier to maintain code and we've gone that route.\n"
    }
  ]
}
---
Currently images added to the partners page using the Rich Text Editor in Netlify do not display the 'title' field.

        