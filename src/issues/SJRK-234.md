---json
{
  "title": "SJRK-234",
  "summary": "Page grade has race condition in UIO message reload",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-03-06T00:43:28.003-0500",
  "updated": "2019-08-02T16:33:08.496-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10\\\nChrome 72\\\nIntel i5-6600K @ 3.5 GHz\\\n16 GB DDR4 @ 2197 MHz\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-255/",
      "key": "SJRK-255"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The page grade seems to have a race condition related to the reloading of UIO messages after a language change. It appears this is because {page}.events.onUioReady is fired immediately after {that}.events.onPrefsEditorRefresh in the UIO component of the page grade.

It will sometimes pass, sometimes fail. This issue may be circumvented by implementing the multilingual UIO features introduced in <https://fluidproject.atlassian.net/browse/FLUID-6300#icft=FLUID-6300> and its kin.

        