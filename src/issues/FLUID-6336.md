---json
{
  "title": "FLUID-6336",
  "summary": "Page level tts should read from selected text, instead of always from the top",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2018-08-31T08:59:17.362-0400",
  "updated": "2021-07-29T01:53:20.736-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the current implementation of the Orator, the page level tts starts from the top of the main content and reads through to the end. The selected text reading will only read the selected text. However, this should be adjusted so that the reading of the page level tts will start from the selected text and proceed to the end of the main content.

 see: <https://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Design+Walkthrough%2C+C.1>

Things to Consider:

At the moment any text on the page can be selected to be read back. However, only text in the "main" content area is read back as part of the page level reading. Either we'll have to restrict the read back of selected text to the main content, or ignore that selection for reading back of text at the page level.

Another issue is how to determine where the selected text is to start the read back of the page level text. That is, we'll need to find exactly where the selection is within a node and the selection may actually cross nodes.

        