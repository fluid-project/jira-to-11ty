---json
{
  "title": "ENGAGE-282",
  "summary": "Catalogue Preview doesn't correctly handle cases where no artifacts are included in the catalogue",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-01-23T13:33:16.000-0500",
  "updated": "2010-02-04T15:56:17.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
At the moment, we don't handle the case where no artifacts have been included in the catalogue in a very graceful manner. The Catalogue Preview component, upon encountering an empty catalogue of artifacts, will just blast its container's parent. This is extremely brittle and the sort of thing that could cause hours of debugging if the parent component's (Exhibition View) markup ever changes.&#x20;

Here's the suspect code:

if (that.model.length && that.model.length > 0) {\
that.refreshView();\
} else {\
that.container.parent().remove();\
}

We should remove this code entirely and ensure that Exhibition View doesn't render the catalogue section at all--or instantiate the preview component--unless there are actually artifacts in the exhibition.

        