---json
{
  "title": "DECA-190",
  "summary": "Implement a RESTful ROA architecture for decapod 0.5 a",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-11-10T14:38:58.894-0500",
  "updated": "2012-01-10T09:19:04.442-0500",
  "versions": [],
  "fixVersions": [
    "0.5a"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Implement a RESTful Resource Oriented Architecture (ROA) for decapod 0.5a based on the proposal in the wiki\
<http://wiki.fluidproject.org/display/fluid/Proposed+Decapod+Server+Architecture>

For decapod 0.5a only need the following:

<http://localhost:8080/books/decapod05a/>

* DELETE: removes all pages and export artifacts

<http://localhost:8080/books/decapod05a/pages/>

* POST: add new pages

<https://localhost:8080/books/decapod05a/export/pdf/type1>\
<https://localhost:8080/books/decapod05a/export/pdf/type2>\
<https://localhost:8080/books/decapod05a/export/pdf/type3>

* PUT: trigger the creation of the pdf
* GET: retrieve the status of export and path to the pdf if generated
* DELETE: remove all export artifacts including the pdf

\*\***NOTE: for decapod 0.5a only one pdf at a time, meaning if generating type 3 then type 2, type 3 will be overwritten by type 2.**\*\*

        