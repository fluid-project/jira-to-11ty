---json
{
  "title": "DECA-26",
  "summary": "Implement RESTful API for CherryPy server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Boyan Sheytanov",
  "date": "2010-02-12T09:08:29.000-0500",
  "updated": "2012-01-10T09:42:34.064-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The API for communication with the Decapod server should be more resource-oriented. This means GET, POST and DELETE request to URIs describing resources should be made. An example:

GET /images/ returns json object, describing the model.\
POST /images/ adds a new item to the model.\
GET /images/0/ returns a json object, describing an entry in the model.\
GET /images/0/full returns a jpeg image, the full-scaled version of the one taken.

As a start, the API should support the currently implemented functionality in Decapod and should be easily extensible to accomodate other functionality as well.

        