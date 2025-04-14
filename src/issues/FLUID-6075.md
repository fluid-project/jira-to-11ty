---json
{
  "title": "FLUID-6075",
  "summary": "In IE11 NVDA does not announce presence of Delete button in the file table",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2016-11-16T09:56:38.696-0500",
  "updated": "2016-11-16T09:56:38.696-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Win 10, IE11, NVDA 2016.3\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In IE11 with NVDA 2016.3, the Delete button in the File Queue does not get announced. To reproduce:

1\. Load the Uploader demo.\
2\. Using keyboard, add some files to the File Queue.\
3\. Tab around until an item in the table is focused.\
4\. Listen to NVDA's feedback - notice it will only read back the filename and size, but not the button.

Appears to be okay in Edge. Have not confirmed with other screen readers on Windows.

        