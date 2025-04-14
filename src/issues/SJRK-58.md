---json
{
  "title": "SJRK-58",
  "summary": "Highlight each block as it's being read aloud",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-03-15T15:07:06.479-0400",
  "updated": "2019-09-12T13:35:28.633-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Dana",
      "date": "2018-03-19T16:39:34.573-0400",
      "body": "I think highlighting with a heavy black outline as each block is read is a good idea. I suppose we could also give the block background some colour - I can try a few things out. And it would be great to also have the block labels read out, such as \"text block\", \"image block\" etc\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-25T14:42:13.408-0400",
      "body": "We should discuss the issue with @@Justin Obara and see if there is any way to take advantage of his ongoing work on the new Orator self-voicing component, which will have highlighting as it reads each word.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-09-12T13:35:28.630-0400",
      "body": "@@Justin Obara has completed this work in <https://fluidproject.atlassian.net/browse/SJRK-274#icft=SJRK-274>\n"
    }
  ]
}
---
When "Listen to my story" has been clicked/activated, think about whether each block should be highlighted visually in some way, in order to assist in comprehension and to provide context for the audio as it's being spoken.

Some consideration will need to be paid to how best to highlight the blocks. For example, the Chart Authoring demo highlights individual pie slices with a black outline during sonification:

<https://build.fluidproject.org/chartAuthoring/demos>

        