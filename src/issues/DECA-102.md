---json
{
  "title": "DECA-102",
  "summary": "Split the Decapod threshold / binarization and greyscale code into its own script",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2010-04-21T09:39:07.000-0400",
  "updated": "2012-06-08T12:09:43.806-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently decapod-stitching script performs greyscale and threshold correction in addition to the stitching process.

The greyscale and binary conversion code should be split into their own scripts.

i.e.

decapod-binarize -v page0001.jpg -o ./bin/page0001.bin.png\
decapod-greyscale -v page0001.jpg -o ./bin/page0001.bin.png

        