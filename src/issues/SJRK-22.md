---json
{
  "title": "SJRK-22",
  "summary": "Remove query string handling from site, use routing instead",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T15:54:45.501-0400",
  "updated": "2018-12-18T14:44:01.540-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-12-18T14:44:01.540-0500",
      "body": "Consider whether to keep query string handling around as a backwards-compatibility measure. There are some stories which may be created and shared on social media. This implies that we will be hosting the tool, so this may not be desired.\n"
    }
  ]
}
---
Remove query string static request handling from site, use routing instead to serve the UI from a "nice-looking" URL such as "..../story/id/" or similar

Consider the case of story sharing. URL shortening

<https://expressjs.com/en/3x/api.html> see res.sendfile() function

GPII-Handlebars may also have some functionality to do this

        