---json
{
  "title": "DECA-157",
  "summary": "Exported PDF sometimes produces inverted images for none, some, or all pages",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "James Yoon",
  "date": "2010-07-22T16:49:34.158-0400",
  "updated": "2012-01-12T10:48:09.427-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5a"
  ],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/DECA-211/",
      "key": "DECA-211"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-157/decapod-0003.jpg",
      "filename": "decapod-0003.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-157/decapod-0003.tiff",
      "filename": "decapod-0003.tiff"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-07-22T16:50:43.985-0400",
      "body": "inverted images = colour inverted\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-22T18:11:53.457-0400",
      "body": "bug parade decapod 0.4\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-23T10:23:25.563-0400",
      "body": "decapod-0003.jpg consistently produces a colour inverted image using Ocropus 0.4.4 and genpdf rev 38.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-23T10:45:46.564-0400",
      "body": "Using the images located here: <http://source.fluidproject.org/svn/design/decapod/Resources/Images/Books/D-Day/colour/>\n\nThe 4th image \"04.jpg\" is inverted.\n\nAlso the 13th page is omitted (see issue <https://fluidproject.atlassian.net/browse/DECA-58#icft=DECA-58>)\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-10-07T11:26:09.569-0400",
      "body": "This problem still persists using Hasan's genpdf script checked out on Oct 6, 2011.\n\nTested using decapod-0003.jpg and D-Day04.jpg.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-10-07T11:27:56.668-0400",
      "body": "The higher level issue is that genpdf, for Type 1 PDF, should generate a faithful version of the images in PDF form.\n\nTherefore converting to binary, greyscale, or colour should all be user-specified.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-11-11T11:02:24.465-0500",
      "body": "Converting the file to PNG then running genpdf inverts the colour.\n\nBut, converting to TIFF, then running genpdf DOESN'T invert.\n\nSo a work-around would be to convert to TIFF first (use the attached TIFF file as an example).\n\nThe source of the bug, however, is in Ocropus. Tested with genpdf changeset 79:c7ade205dec2\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-11-14T13:11:57.500-0500",
      "body": "Added tiff conversion to the export workflow. tiff images are now sent to genpdf. This is currently in my bitbucket repo <https://bitbucket.org/jobara/decapod-server>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-12T10:48:09.407-0500",
      "body": "tiff conversion was just a workaround, the issue is now picked up in <https://fluidproject.atlassian.net/browse/DECA-211#icft=DECA-211>\n"
    }
  ]
}
---

        