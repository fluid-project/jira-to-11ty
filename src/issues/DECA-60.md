---json
{
  "title": "DECA-60",
  "summary": "PDF cleanup and generation should be refined",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2010-03-30T15:09:49.000-0400",
  "updated": "2012-01-10T09:47:06.716-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-96/",
      "key": "DECA-96"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-04-20T09:51:24.000-0400",
      "body": "This issue may resolve itself when if Decapod uses the Ocropus book directory structure.\n\nLikely related to genpdf script expecting / supporting the Ocropus directory structure. (but works fine without it).\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:47:01.559-0400",
      "body": "I'm resolving this as fixed since the specific error Michelle reported has been fixed. We're still a bit heavy-handed about blasting away any previous working directories when generating a new PDF, and the issue of using the Ocropus book directory structure still stands and has its own JIRA.\n"
    }
  ]
}
---
Currently, the first time you try to generate a PDF this error is thrown:\
rm: cannot remove \`pdf/\*': No such file or directory

the process continues but we should handle the error more gracefully. Also, we should not be doing such heavy handed cleanup between pdf generations - we need to find out how to use the pdf generator for subsequent changes so that the second time a pdf is generated the process is faster.&#x20;

        