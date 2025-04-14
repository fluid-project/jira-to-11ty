---json
{
  "title": "FLUID-1033",
  "summary": "Pass the item that was moved to the order changed callback in the Reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2008-07-28T10:53:43.000-0400",
  "updated": "2008-07-31T16:54:14.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1033/Fluid1033-patch.txt",
      "filename": "Fluid1033-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-07-28T12:28:55.000-0400",
      "body": "I'm attaching a patch for this issue.\n"
    }
  ]
}
---
At the moment, the orderChangedCallback is a zero-argument function. It simply notifies the implementor that a change in the DOM has occurred, but doesn't provide any specific information. We should, at minimum, pass back the item that was moved to the callback:

orderChangedCallback(item);

        