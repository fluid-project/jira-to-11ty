---json
{
  "title": "FLUID-1580",
  "summary": "64 BIT Flash Uploader Problems in FF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Greg Gay",
  "date": "2008-09-17T15:49:49.000-0400",
  "updated": "2014-05-22T14:25:47.636-0400",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Linux/Windows w/ Firefox flash plugin\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:25:47.618-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
When uploading a file with the uploader in firefox on 64 bit machines, it fails, producing the error.

"An error occurred on the server during upload. It could be that the file already exists on the server. (Error code: 404)"

Seems fine on all 32 bit systems. It could be an issue with the FF plugin not properly supporting 64 bits.&#x20;

        