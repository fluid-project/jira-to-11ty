---json
{
  "title": "SJRK-151",
  "summary": "Make changes to Spanish localization messages",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Reopened",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-06-13T13:38:52.452-0400",
  "updated": "2022-07-29T00:09:39.107-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-113/",
      "key": "SJRK-113",
      "summary": "Review and/or migrate multilingual UIO implementation"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-13T13:48:52.782-0400",
      "body": "There is no immediately-obvious value to update in the message bundles for the \"reset\" text. The initial value is hardcoded in the markup for UIO, and while some of those are overridden by the values in prefsEditor\\_\\*.json, the \"reset\" text is not changed.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-06-13T14:04:45.029-0400",
      "body": "in the source for infusion (fluid.slidingPanel, in SlidingPanel.js), there are selectors and listeners to manage the updating of the values already defined in prefsEditor\\_\\*.json, but there isn't one set for the \"reset\" text (selector is \".flc-prefsEditor-reset\"). This is something that will have to be changed when UIOMultilingualDemo is merged into Infusion in earnest. See <https://fluidproject.atlassian.net/browse/SJRK-113#icft=SJRK-113>\n"
    }
  ]
}
---
There are two messages that should be updated in the Spanish localization bundle:

* "reset" on UIO should be "reinciar"
* "palabras" should be "palabras claves"

        