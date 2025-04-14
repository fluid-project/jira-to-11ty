---json
{
  "title": "DECA-43",
  "summary": "[Decapod Design] incorporate cut and paste in Decapod ",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2009-11-17T11:03:21.000-0500",
  "updated": "2012-06-08T14:54:30.312-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Decapod should allow users to move content from one location to another (like using a cut and paste scheme).

There are 3 modes of cut and paste:

* cut and paste within the same document
* cut and paste from the OS to the document
* cut and paste between documents

Technical restriction is that both documents must exist in the same page (aka. DOM), and not in browser tabs or separate browser windows.

Design to be iterated and tested

Associated wiki page: <http://wiki.fluidproject.org/display/fluid/Thumbnail+Cut+and+Paste>

        