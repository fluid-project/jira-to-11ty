---json
{
  "title": "INFRA-158",
  "summary": "Garbled text in docx attachment",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-04-09T10:19:23.269-0400",
  "updated": "2018-04-23T10:53:25.484-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-09T11:14:11.758-0400",
      "body": "Opening the file in LibreOffice 5 works. Saving it back as .docx (Word 2017-2013 format) and uploading also works.\n\nInstalling [MS TTF](https://confluence.atlassian.com/confkb/the-text-in-a-powerpoint-excel-or-word-document-looks-different-when-using-the-viewfile-macro-200213562.html) fonts did not help.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-23T10:53:25.390-0400",
      "body": "Closing as uploading a new copy seems to have worked around this issue.\n\nTTF fonts remain installed.\n"
    }
  ]
}
---
<https://wiki.fluidproject.org/display/fluid/Community+Meeting+Notes+%28April+11%2C+2018%29+-+Disability+Policy?preview=/158826787/158826790/Heeb%20Manuscript%203.25.18.docx>

Someone viewing this file will see garbled text.

        