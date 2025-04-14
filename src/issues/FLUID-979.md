---json
{
  "title": "FLUID-979",
  "summary": "Make each file row in the queue selectable with the arrow keys.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-07-22T18:45:49.000-0400",
  "updated": "2011-02-22T16:27:43.452-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-23T18:22:31.000-0400",
      "body": "Fixed at revision 5262 - arrow selection now works, although the styling effect is a bit \"minimal\" (just a dotted border for me) so could be beefed up a little (perhaps to agree with the \"hover\" style)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:43.440-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The file queue should be navigable using the arrow keys. Since items are dynamically added and removed from the file queue, the new addSelectable() and removeSelectable() methods should be used.

        