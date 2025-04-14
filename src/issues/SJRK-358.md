---json
{
  "title": "SJRK-358",
  "summary": "Add ability to \"Clear all\" story blocks at once",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-05-27T13:49:21.058-0400",
  "updated": "2020-09-14T15:41:18.971-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-384/",
      "key": "SJRK-384"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-288/",
      "key": "SJRK-288"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-358/Clear All.png",
      "filename": "Clear All.png"
    }
  ],
  "comments": [
    {
      "author": "Dana",
      "date": "2020-07-27T16:13:04.088-0400",
      "body": "\"Clear all\" would clear content of the active page only (i.e. story blocks). Perhaps we could label it \"clear all blocks\", to be clear 😃\n\nWe could consider a clear all button on the Title/Author/Keyword page too.\n"
    }
  ]
}
---
Add a "Clear all" button that allows deletion of all story blocks at once.

(Mockup needs updating to show Clear All button along with existing block delete button.)

Note: this Jira previously included the implementation of individual block delete buttons (replacing the check boxes and delete button). This functionality has been separated out into SJRK-395.&#x20;

#### **Design questions:**

* Does "Clear all" clear the title, author and keywords as well, or only blocks?
* Is the "Delete block" button disabled at any point? If so, when? E.g. during upload?

        