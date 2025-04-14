---json
{
  "title": "SJRK-351",
  "summary": "Display meaningful error message for publishing errors",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-04-29T19:28:05.863-0400",
  "updated": "2020-09-14T15:16:30.449-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-356/",
      "key": "SJRK-356"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-351/File size too big.png",
      "filename": "File size too big.png"
    }
  ],
  "comments": []
}
---
In situations where the server reports an error during publishing, where there are no security concerns for reporting said errors, show the message on the Edit page rather than the vague "Internal server error" message.

E.g. for a story being too big, the message is available to the client, but it is not displayed. Show something like "Total story size (X MB) is too large. The maximum total story size, including all files, is Y MB"

#### **Design question:**

What should the "files too big" warning look like? I.e. appearance, copy, & persistence

<https://files.inclusivedesign.ca/s/zjNQBP2HCd2x4bJ>

 

        