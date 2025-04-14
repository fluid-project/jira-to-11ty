---json
{
  "title": "SJRK-305",
  "summary": "Block field labels not appearing after receiving input",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-10-09T14:23:28.772-0400",
  "updated": "2020-07-27T15:55:26.424-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10 v1903\\\nEdge 44\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-305/2019-10-07 ST labels not appearing in Edge.PNG",
      "filename": "2019-10-07 ST labels not appearing in Edge.PNG"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-07-27T15:55:26.424-0400",
      "body": "We are planning not to support pre-Chromium Edge in the future (affects versions 44.\\* and earlier), so this may not be resolved for affected versions.\n\n* <https://issues.fluidproject.org/secure/AddComment!default.jspa?id=33848>\n"
    }
  ]
}
---
The block input field labels are not being shown once text has been entered into them in MS Edge

To reproduce:

* Add a new block
* Enter text into a field

Expected:

The placeholder text will disappear and the label will appear above the input

Actual:\
The label is not shown

        