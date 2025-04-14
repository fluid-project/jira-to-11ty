---json
{
  "title": "FLUID-6521",
  "summary": "Nexus writeDefaults and constructComponents endpoints should produce appropriate responses",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-06-18T12:54:18.277-0400",
  "updated": "2024-07-22T10:35:15.984-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/KETTLE-86/",
      "key": "KETTLE-86",
      "summary": "Enable Kettle HTTP requests to be fulfilled with variant status codes"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The Nexus endpoints for adding grade defaults and constructing components respond to HTTP PUT requests. Currently, they respond to those requests with `undefined,` which is not a legitimate JSON payload. Therefore the requests are liable to be considered rejected, e.g. by browser ajax calls. Instead, both endpoints should respond with a JSON payload containing the HTTP status code 201 'Created'.

        