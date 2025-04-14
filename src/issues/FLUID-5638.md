---json
{
  "title": "FLUID-5638",
  "summary": "Multi-line focus styling in Safari and Chrome looks a bit odd",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Anastasia Cheetham",
  "date": "2015-04-20T10:22:39.996-0400",
  "updated": "2015-06-18T10:00:30.038-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": "Safari, Chrome\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5638/Screen Shot 2015-04-20 at 10.22.57 AM.png",
      "filename": "Screen Shot 2015-04-20 at 10.22.57 AM.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-06-18T10:00:23.384-0400",
      "body": "This was fixed with the last round of infusion docs work.\n"
    }
  ]
}
---
In Safari and Chrome, focus styling on multi-line links in the ToC looks a little bit odd: there's a gap where the two borders "overlap" in the middle.

        