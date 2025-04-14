---json
{
  "title": "FLUID-3835",
  "summary": "HTML5 Uploader: Screen Reader doesn't tell user the file queue is empty",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-11-15T12:15:22.494-0500",
  "updated": "2010-11-19T12:33:40.175-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Win XP + FF3.6 + (Jaws 11 or NVDA)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-15T12:48:59.502-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-15T16:23:17.733-0500",
      "body": "Added \"The file queue is empty\" text to table summary containing all the queued files if there are no files in the queue.   Whenever the focus is back on the queue, NVDA reads the table summary to update the user on the queue state.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-16T11:19:23.926-0500",
      "body": "Confirmed. Much clearer now.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-19T12:33:39.933-0500",
      "body": "I've reviewed the code for this (actually committed against <https://fluidproject.atlassian.net/browse/FLUID-3852#icft=FLUID-3852>) and it looks fine.\n"
    }
  ]
}
---
Using a screen reader,\
When focus lands on the empty file queue, the screen reader announces "queue of files to upload, table" but doesn't make any specific mention of the fact that the queue is empty. The only clue is that no file name is read out. It would be more helpful if it was more explicit.

        