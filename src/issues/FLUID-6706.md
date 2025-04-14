---json
{
  "title": "FLUID-6706",
  "summary": "Race condition overwrites top-level resources entry with fast synchronous resource",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-12-16T12:01:23.344-0500",
  "updated": "2024-07-17T08:07:50.326-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-12-16T14:39:14.584-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1067> ) into the project repo at 0b24a595780b19f7367eb42e254964e77555e1a0\n"
    }
  ]
}
---
Demanding the fetch of a fast synchronous resource (e.g. a renderer template) ends up overwriting the resources entry with a "FetchOne" entry rather than the actual resourceSpec. This is because the entire transform event initialising "resource" concludes before the framework finishes the process of assigning the placeholder "FetchOne" entry mounted by fluid.resourceFromRecord

Best route is probably to install a specific guard in fluid.resourceFromRecord which returns any existing value found for the resource. This stateful handling of resources is deeply regrettable but at this point unavoidable.

        