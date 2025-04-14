---json
{
  "title": "SJRK-90",
  "summary": "Implement multilingual UIO",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Gregor Moss",
  "reporter": "Alan Harnum",
  "date": "2018-05-08T11:57:27.615-0400",
  "updated": "2018-05-25T15:04:31.875-0400",
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
      "author": "Michelle D'Souza",
      "date": "2018-05-11T14:12:30.390-0400",
      "body": "Machine translated Spanish messages are available in this branch: <https://github.com/michelled/uio-multilingual/tree/SJRK-90>\n\n \n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-25T15:04:31.872-0400",
      "body": "We were able to have the UIO panels load different languages and redraw on demand, though we were not able to find a way to have the show/hide button nor the Table of Contents headers update their values dynamically.\n\nThis should be incorporated into UIO proper, and not as part of this project.\n\nAlan's previous work on the subject is still in a pull request:\\\n<https://github.com/fluid-project/infusion/pull/850>\n\nand here is what we came up with for the Storytelling Tool:\\\n<https://github.com/BlueSlug/sjrk-story-telling/blob/SJRK-91/src/js/storyTelling-page.js#L136-L164>\n"
    }
  ]
}
---
Following the example at <https://github.com/waharnum/uio-multilingual>, we should:

* Provide a Spanish-language translation pack for UIO
* Configure the interface to switch the UIO language when the interface language is switched
  * This may require reloading / rerendering UIO when the language is changed

        