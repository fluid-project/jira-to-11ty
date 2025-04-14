---json
{
  "title": "DECA-227",
  "summary": "genpdf width and height options do not work - always outputs A4 dimensions",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2012-01-25T11:25:41.175-0500",
  "updated": "2012-05-25T13:56:52.325-0400",
  "versions": [
    "0.5a"
  ],
  "fixVersions": [],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/DECA-207/",
      "key": "DECA-207",
      "summary": "genpdf should allow for different dimensions aside from default A4"
    }
  ],
  "attachments": [],
  "comments": []
}
---
genpdf width and height options does not affect the document size of the output.

Example: decapod-genpdf.py -d foo -p foo.pdf -t 1 -W 50 -H 50 -v foo.png should produce a 50x50cm document, but will produce an A4 proportioned document.

        