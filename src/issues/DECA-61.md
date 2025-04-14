---json
{
  "title": "DECA-61",
  "summary": "Generating a PDF sometimes causes the server to time out.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2010-03-30T15:04:32.000-0400",
  "updated": "2012-06-01T10:20:24.989-0400",
  "versions": [
    "0.3",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export",
    "Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-57/",
      "key": "DECA-57"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-07-15T11:31:44.040-0400",
      "body": "Still an issue. Time out occurred after about 5 minutes of processing.\n\nUbuntu 9.10\\\nFirefox 3.6\\\ndecapod-server 133:bcfed03a94c7\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-15T11:46:44.710-0400",
      "body": "Here is the output:\n\n\\[... omitted, more genpdf output]\n\n\\[info] got 187 bboxes\\\n\\[note] page doesn't contain a lot of text\\\n\\[info] got 3624 bboxes\\\n\\[info] got 1737 bboxes\\\n\\[warn] graydeskew failed: too many character boxes for deskewing\\\n\\[warn] binarizer failed: too many connected components\\\n\\[warn] binclean2 failed: too many connected components\\\n\\[note] page doesn't contain a lot of text\\\n127.0.0.1 - - \\[15/Jul/2010:11:22:45] \"POST /pdf/ HTTP/1.1\" 200 21 \"<http://localhost:8080/components/capture/html/Capture.html>\" \"Mozilla/5.0 (X11; U; Linux x86\\_64; en-US; rv:1.9.2.6) Gecko/20100628 Ubuntu/9.10 (karmic) Firefox/3.6.6\"\\\n\\[15/Jul/2010:11:22:45]  Traceback (most recent call last):\\\nFile \"/usr/lib/pymodules/python2.6/cherrypy/\\_cpwsgi.py\", line 79, in setapp\\\ns, h, b = self.get\\_response()\\\nFile \"/usr/lib/pymodules/python2.6/cherrypy/\\_cpwsgi.py\", line 219, in get\\_response\\\nresponse = self.request.run(meth, path, qs, rproto, headers, rfile)\\\nFile \"/usr/lib/pymodules/python2.6/cherrypy/\\_cprequest.py\", line 567, in run\\\nraise cherrypy.TimeoutError()\\\nTimeoutError\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-10T09:30:04.133-0500",
      "body": "May have been resolved with changes to the export implemented in 0.5a (see <https://fluidproject.atlassian.net/browse/DECA-189#icft=DECA-189> and <https://fluidproject.atlassian.net/browse/DECA-180#icft=DECA-180>)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T15:42:50.987-0400",
      "body": "I generated a 108 page pdf for type 1, type 2, and type 3 export and didn't have any issues with the server timing out.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-01T10:20:18.247-0400",
      "body": "I tried this again with a 104 page pdf. The type 2 and type 3 took over 30 minutes to complete and the server never timed out.\n"
    }
  ]
}
---
Generating a PDF with many pages will take so long that the server times out. We should be running the pdf generation in the background - this will fix the issue of the server time out.&#x20;

        