---json
{
  "title": "KETTLE-80",
  "summary": "Race conditions in a cloud CouchDB cluster can cause an unmarked request to escape",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Pull Request",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-10-24T05:39:56.086-0400",
  "updated": "2019-10-24T06:38:30.179-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
@@Tony Atkins \[RtF] is on the trail of an issue under <https://issues.gpii.net/browse/GPII-4201> in the GCP cluster running the GPII preference server in which it seems some inconsistency in the state of different members of a CouchDB cluster can generate an Kettle error with a stale request marked to the main thread.\
There is obviously some pattern of failures which can escape all of the request unmarking that we have throughout KettleRequest.js . We need to understand the particular failure pattern and add extra guard code to unmark the failing request.

        