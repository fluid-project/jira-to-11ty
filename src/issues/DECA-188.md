---json
{
  "title": "DECA-188",
  "summary": "Type 2 output quality is poor for well photographed and scanned documents",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2011-10-31T12:13:01.330-0400",
  "updated": "2013-01-27T12:21:44.954-0500",
  "versions": [
    "0.5",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/DECA-238/",
      "key": "DECA-238"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-188/1-1-1.png",
      "filename": "1-1-1.png"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-188/1-1-1-t2.pdf",
      "filename": "1-1-1-t2.pdf"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-188/2-1-1[t2].pdf",
      "filename": "2-1-1[t2].pdf"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-10-31T12:15:10.263-0400",
      "body": "Original computer generated image.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-10-31T12:59:44.099-0400",
      "body": "generated PDF of image 1-1-1.png\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-10-31T13:01:01.362-0400",
      "body": "generated PDF of image 2-1-1.png (photograph of computer generated document).\n"
    },
    {
      "author": "tamir@tamirhassan.com",
      "date": "2013-01-27T12:21:44.954-0500",
      "body": "I've tried it out on the current (latest) version and can't notice any significant difference between the OCR quality of either document.\n"
    }
  ]
}
---
The quality of the OCR'ed text for Type 2 PDF is poor when using reasonably well photographed documents. The expectation is to have more legible / machine readable text generated.

Image 1 - generated using original computer generated document (See attached 1-1-1.png).\
Image 2 - photograph of Image 1 (see: <http://source.fluidproject.org/svn/design/decapod/testing-images/2-1-1.png> ).\
PDF 1 - the Type 2 generated PDF of Image 1 (See attached 1-1-1-t2.pdf).\
PDF 2 - the Type 2 generated PDF of Image 2 (See attached 2-1-1\[t2].pdf).

Type 2 results for PDF 1 and PDF 2 should be comparable quality?

        