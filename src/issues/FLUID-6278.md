---json
{
  "title": "FLUID-6278",
  "summary": "The orator component should be able to handle reading/synthesizing text in different languages ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2018-04-30T08:11:39.026-0400",
  "updated": "2024-07-22T10:35:09.614-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-10-07T15:55:34.144-0400",
      "body": "Dev release for testing \n\n3.0.0-dev.20191007T194251Z.4ef5356a5.<https://fluidproject.atlassian.net/browse/FLUID-6278#icft=FLUID-6278>\n\n \n"
    }
  ]
}
---
The orator component should be able to read in text from different languages and synthesize it in the appropriate language. That is if a page is written in English and has text in a French or other language, the synthesizer should be directed to speak each part in the correct language.

This should be done based on the language code specified in the markup. If no language code is provided, the default synthesizer should be used.

Info about the lang attribute: <https://www.w3.org/International/questions/qa-html-language-declarations>

        