---json
{
  "title": "SJRK-79",
  "summary": "Image uploader won't clear preview on cancel in Edge",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-04-11T16:29:39.021-0400",
  "updated": "2020-07-27T15:52:44.069-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10 Pro, build 16299.309\\\nEdge 41.16299.248.0\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-13T14:58:24.196-0400",
      "body": "Confirmed still an issue in Edge 42.17134.1.0\n\nI think the behaviour of the image being cleared when the uploader \"Cancel\" button is pressed is unexpected, and I recommend the button simply closes the upload dialogue without actually making any changes to what's been chosen. I.e. if nothing has been uploaded/chosen yet, it remains such, but if an image has been uploaded/chosen, it stays and is not cleared away.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-07-27T15:52:44.069-0400",
      "body": "This \"issue\" persists in Edge 44, cannot confirm Edge 79+ (Chromium) at this time. Firefox 74 is also presenting this behaviour, but as described above this may not actually be a problem.\n\nBeyond that, the work of <https://fluidproject.atlassian.net/browse/SJRK-289#icft=SJRK-289> may change this behaviour, so it's worth revisiting this issue after that point.\n\nFinally, we are planning not to support pre-Chromium Edge in the future (affects versions 44.\\* and earlier), so this may not be resolved in that browser even if it is decided that this is an issue.\n"
    }
  ]
}
---
The Image block single image uploader won't clear a previously chosen image's preview when the uploader control is opened and then canceled. This means that the manual image block editor tests are failing (step 6 in the sequence).

Two possible solutions:

1 - find a way to fix this bug in Edge

2 - if the expected behaviour is not actually desired, simply remove the code for it

        