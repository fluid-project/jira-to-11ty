---json
{
  "title": "FLUID-3264",
  "summary": "Uploader does display a network disconnect only after reconnecting (and this is then very slow)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Armin Krauss",
  "date": "2009-10-08T15:10:07.000-0400",
  "updated": "2011-01-07T11:13:12.552-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Win XP (SP2) IE 6 - Flash 9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-07T11:13:12.550-0500",
      "body": "Related to <https://fluidproject.atlassian.net/browse/FLUID-2355#icft=FLUID-2355> with regards to the need of having more error handling. &#x20;\n"
    }
  ]
}
---
I did the "Test to fail"\
"Test 2: Disconnect Network During Upload"

I uploaded 4 files with 3MB each in a virtual machine. After disconnecting (shutting down WiFi on the Host)\
nothing happens.

Only after reconnecting and waiting for around 45-60 Seconds the server displays that the upload failed.

This only works on the server test. The demo does not recognize the disconnect at all and displays that everything worked well.

        