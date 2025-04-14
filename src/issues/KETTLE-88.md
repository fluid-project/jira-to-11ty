---json
{
  "title": "KETTLE-88",
  "summary": "Kettle request with resource failure will hang rather than signalling error to client",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-07-22T10:44:51.959-0400",
  "updated": "2020-07-24T09:20:37.835-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6534/",
      "key": "FLUID-6534",
      "summary": "Failure to resolve \"fast path\" resource should not unconditionally cause component destruction"
    }
  ],
  "attachments": [],
  "comments": []
}
---
This problem only affects Kettle when operated against the upcoming <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> based version of Infusion.\
A Kettle request which depends on an "early" resource such as a renderer template will produce a connection reset and hang rather than signalling an HTTP error if the resource fetch fails. This is because such errors are signalled before the request component reaches "onCreate" which is the point at which request sequencing is set up. Even if the request explicitly fires to request.events.onError, this will simply result in the rejection of the isolated handlerPromise, and since the component will shortly destroy, this will never result in a proper HTTP response via kettle.request.http.errorHandler .

        