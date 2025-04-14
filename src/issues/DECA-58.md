---json
{
  "title": "DECA-58",
  "summary": "Export to PDF skips over pages that do not have detected characters",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Reopened",
  "reporter": "Jonathan Hung",
  "date": "2010-03-30T15:50:32.000-0400",
  "updated": "2012-12-03T11:08:02.264-0500",
  "versions": [
    "0.3",
    "0.4",
    "0.5a",
    "0.5",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-04-20T09:37:19.000-0400",
      "body": "This may not be a bug.\n\n* Either by design or caused by differences in image resolution (one large image, and one small image).\n* May also be related to the version of Ocropus and Genpdf script.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-06-10T14:58:01.701-0400",
      "body": "This issue may be resolved with the latest gen-pdf script. If such pages are encountered, the script defauls to PDF level 1 (image based).\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-14T16:19:10.206-0400",
      "body": "Confirmed not an issue. Ubuntu 9.10, FF 3.6, genpdf changeset 34.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-23T10:45:13.233-0400",
      "body": "I have reopened this issue. I can reproduce it using the D-Day images: \\\n<http://source.fluidproject.org/svn/design/decapod/Resources/Images/Books/D-Day/colour/>\n\nPage 13 is omitted from the generated PDF.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T15:40:32.532-0400",
      "body": "I did a test of this and it appears to be fixed. When we update genpdf for the 0.5 release again, we'll have to double check it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-01T10:31:59.802-0400",
      "body": "Tried again with the supplied images. It skips D-Day-08.jpg still\n"
    }
  ]
}
---
If a set of pages does not contain any detectable characters, they are omitted from the exported PDF.\
All pages should be included.

To reproduce:

* take a series of photos (no of books)
* export to image PDF.
* view the resulting PDF file.

        