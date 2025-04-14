---json
{
  "title": "FLUID-6758",
  "summary": "Selection reading continues from where page reading stopped",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2022-12-07T12:00:59.671-0500",
  "updated": "2024-07-22T10:35:02.814-0400",
  "versions": [
    "4.5"
  ],
  "fixVersions": [
    "4.6"
  ],
  "components": [
    "Text To Speech"
  ],
  "environment": "Firefox 107.0.1 (macOS 13.0.1)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-12-07T12:35:13.469-0500",
      "body": "From some further investigation it appears that the selected text is being read after the page text. This would suggest that the speech synthesis queue isn't being cleared and the selected text is just being appended. \n"
    }
  ]
}
---
Steps to reproduce:

* Open the [Orator demo](https://build-infusion.fluidproject.org/demos/orator/)
* In the first paragraph select text starting from "Considering inclusion in all" until the end of the paragraph.
* Trigger the page reading to start
* Stop the page reading once the it gets to about the word "diversity" in the first sentence of the first paragraph.
* Start the selection reading by clicking the "Play" button in the popup
* Notice the reading continues from where it was stopped in the page reading, not from the selected text.

        