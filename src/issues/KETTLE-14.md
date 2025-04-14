---json
{
  "title": "KETTLE-14",
  "summary": "Provide an abstraction for referring to internal URLs within a Kettle application",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Colin Clark",
  "date": "2010-08-19T18:45:43.813-0400",
  "updated": "2010-08-19T18:45:43.813-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
One of the common areas of brittleness when writing Web apps is the need to change URLs over time. Currently, Kettle developers are forced to hard code references to all URLs within the application in code or markup. If a particular URL mount point changes, the developer will need to manually update all references to the URL, which can be time-consuming and error prone.

Kettle should provide some kind of abstraction where developers don't need to hardcode URLs to the application itself. Instead, the Renderer should be able to automatically resolve abstract URL references and replace them with the correct values at run time.

RSF's UIInternalLink component is the obvious example of this sort of functionality.

        