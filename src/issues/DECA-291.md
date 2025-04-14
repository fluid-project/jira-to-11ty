---json
{
  "title": "DECA-291",
  "summary": "Error compiling binnednn.cc with Ocropus 0.5.x: Header files missing",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2012-07-06T16:18:42.779-0400",
  "updated": "2012-09-04T15:57:07.396-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-07-09T09:40:00.816-0400",
      "body": "There seems to be dependencies on Ocropus 0.4.4 in genpdf. These dependencies were moved to the ocroold sub repository.\n\nIt seems that we will need to update genpdf to not rely on these components, or update the genpdf install script to pull from the old directory?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-09T11:05:44.890-0400",
      "body": "My vote would be to update genpdf. I don't think it's a good idea for us to be mixing Ocropus 0.4.4 and 0.5 for use in decapod.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2012-09-04T15:57:02.963-0400",
      "body": "We will be moving to Ocrous 0.6 which has a better installation procedure and less dependencies.\n"
    }
  ]
}
---
After running:\
1\. cd \genpdf\src\
2\. scons

One of the following error messages occur:\
token.h:30:31: fatal error: ocropus/ocr-utils.h: No such file or directory\
ocr-utils.h:30:21: fatal error: ocropus.h: No such file or directory\
ocropus.h:32:27: fatal error: ocrinterfaces.h: No such file or directory\
ocropus.h:51:24: fatal error: ocr-layout.h: No such file or directory

Note: The first error is the only fatal error I've got first. After putting a copy of ocr-utils.h in the /genpdf/src/ folder I start getting the second error, and so forth.

        