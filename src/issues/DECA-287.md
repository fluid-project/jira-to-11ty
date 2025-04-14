---json
{
  "title": "DECA-287",
  "summary": "genpdf omits large sections of human-readable text when generating Type 3 or 4 PDF",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-06-27T15:51:37.201-0400",
  "updated": "2013-01-27T12:05:45.948-0500",
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
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-287/2-1-1.jpg",
      "filename": "2-1-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-287/4-1-01-grey.jpg",
      "filename": "4-1-01-grey.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-287/faithful-to-the-book-page-4-copy.jpeg",
      "filename": "faithful-to-the-book-page-4-copy.jpeg"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-287/faithful-to-the-book-page-4-copy-t3.PDF",
      "filename": "faithful-to-the-book-page-4-copy-t3.PDF"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-287/Image_0016-grey.png",
      "filename": "Image_0016-grey.png"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-287/test-t3.pdf",
      "filename": "test-t3.pdf"
    }
  ],
  "comments": [
    {
      "author": "tamir@tamirhassan.com",
      "date": "2013-01-27T12:03:52.545-0500",
      "body": "The reason is because the line-finding stage of layout analysis has failed and the lines have not been found – and used for further processing.\n\nI've tried it out with the current version and get a much better result – only the page number at the top is missing.\n\nIdeally, all content not recognized as text lines would be included as part of a background image.&#x20;\n"
    },
    {
      "author": "tamir@tamirhassan.com",
      "date": "2013-01-27T12:05:08.641-0500",
      "body": "(this comment relates to the file test-t3.pdf) This is the output that I got when running genpdf on the same pdf (t3).  Only the page number at the top (not recognized as text?) is missing.  Tamir\n"
    }
  ]
}
---
For some images, large sections of text are omitted when generating Type 3 or Type 4. Typically the top few lines of text would be missing.

To reproduce, run the following on the relevant image:\
./decapod-genpdf.py -d test-t4 -t 4 -p test-t4.PDF filename.png/jpeg \
./decapod-genpdf.py -d test-t3 -t 3 -p test-t3.PDF filename.png/jpeg

The following two images reproduce this error:\
2-1-1.jpg\
faithful-to-the-book-page-4-copy.jpeg (see attached PDF to see the results of a Type 3 export)

The following two images do not produce this error (despite being somewhat similar):\
4-1-01-grey.jpg\
Image\_0016-grey.png

Format and colour do not appear to play a role as colour or TIFF versions of problematic images exhibit the same behaviour.

        