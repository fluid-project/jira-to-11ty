---json
{
  "title": "DECA-153",
  "summary": "Export produces an empty document",
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
  "date": "2010-07-21T11:18:57.072-0400",
  "updated": "2012-05-25T15:41:54.017-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-07-21T11:54:36.657-0400",
      "body": "Console output when exporting:\n\n\\[info] selecting (new) BookStore\\\n\\[info] selecting (new) BookStore\\\n\\[info] found 0 pages\\\nFATAL: no pages found\\\n\\[info] selecting (new) BookStore\\\n\\[info] cmodel=/usr/local/share/ocropus/models/default.model\\\n\\[info] rate -nan errs 0 ntrue 0 npred 0 lines 0 nogt 0\\\n\\[info] selecting (new) BookStore\\\n\\[info] langmod\\_scale = 0.3\\\n127.0.0.1 - - \\[21/Jul/2010:11:54:01] \"POST /pdf/ HTTP/1.1\" 200 21 \"<http://localhost:8080/components/capture/html/Capture.html>\" \"Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.6) Gecko/20100628 Ubuntu/10.04 (lucid) Firefox/3.6.6\"\\\n127.0.0.1 - - \\[21/Jul/2010:11:54:01] \"GET /book/pdf/Decapod.pdf HTTP/1.1\" 200 1286 \"<http://localhost:8080/components/capture/html/Capture.html>\" \"Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.6) Gecko/20100628 Ubuntu/10.04 (lucid) Firefox/3.6.6\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-21T18:38:10.878-0400",
      "body": "This issue appears to be related to the fact that we are using an old revision for the genpdf script--the same version as was tagged for decapod-0.3. Unfortunately, this version of the script relies on a different API for command line arguments and is incompatible with recent changes made to the server as suggested on list. So, the server no longer converts pages to TIFF or creates a multipage TIFF before invoking genpdf.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-21T18:38:34.720-0400",
      "body": "Michael Cutter pinged me on IM and said he'll create a new version of genpdf that should be appropriate for using in Decapod 0.4\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T15:41:54.016-0400",
      "body": "This was resolved for Decapod 0.4\n"
    }
  ]
}
---

        