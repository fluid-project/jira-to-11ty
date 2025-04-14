---json
{
  "title": "SJRK-172",
  "summary": "Consider adding Markdown blocks",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-01-07T17:25:50.471-0500",
  "updated": "2020-08-04T13:15:37.711-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-250/",
      "key": "SJRK-250",
      "summary": "Text of some stories breaks outside of its container"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Dana",
      "date": "2020-04-14T17:30:08.627-0400",
      "body": "Provide markdown support in text block as-is\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-04-14T17:41:48.670-0400",
      "body": "That's the easiest option from a coding perspective 🙂 Should we document this feature somewhere in the site? I.e. on text blocks there could be something that says \"Markdown supported\" or similar, perhaps with a link to a brief [cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or tutorial.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-07-14T07:33:45.353-0400",
      "body": "Functionality has been added to automatically detect links in text blocks. Should determine whether to add the same for other fields such as block headings and media block descriptions.\n"
    },
    {
      "author": "Dana",
      "date": "2020-07-14T12:04:38.394-0400",
      "body": "Thanks @@Gregor Moss this is great. I don't think we'd want to have links in the description or alt-text, but I'm thinking we should allow them in headings.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-07-17T14:04:43.749-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/90) for supporting markdown has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/70bce4e75b4e9ccfa1b17c431b3c61f88cea7a0d).\n"
    }
  ]
}
---
Think about whether it's worth adding blocks which consist of user-authored Markdown content. This could be implemented using the [md helper in gpii handlebars](https://github.com/GPII/gpii-handlebars/blob/master/docs/helper.md#md).

Make sure to account for possible cross-site scripting attacks:\
<https://github.com/showdownjs/showdown/wiki/Markdown's-XSS-Vulnerability-(and-how-to-mitigate-it>)

        