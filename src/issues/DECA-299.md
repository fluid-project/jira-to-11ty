---json
{
  "title": "DECA-299",
  "summary": "Orca screen reader re-reads disabled form fields just prior to Export process",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-08-30T12:35:01.986-0400",
  "updated": "2012-12-03T11:03:27.454-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Export"
  ],
  "environment": "Ubuntu 12.04 64bit, FF 12.01, Orca 3.4.2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
With orca screen reader running, it will repeat the custom form fields just after the Start Export button is selected. To reproduce:

1\. Turn on orca screen reader and load Exporter into Firefox.\
2\. Select / upload an image.\
3\. Expand Image PDF and select Custom.\
4\. Press "Start Export".\
5\. Notice that when the width, height, DPI fields are disabled, Orca will re-read the labels and values prior to reporting the progress.

Ideally Orca should just report the progress at this time and not repeat the fields.

        