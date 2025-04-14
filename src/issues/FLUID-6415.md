---json
{
  "title": "FLUID-6415",
  "summary": "Corruption in graph structure when instantiating lensed components",
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
  "date": "2019-10-19T03:57:53.209-0400",
  "updated": "2024-07-22T10:35:06.221-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
With the introduction of <https://fluidproject.atlassian.net/browse/FLUID-6390#icft=FLUID-6390> lensed components, it is now possible to re-enter fluid.initModelTransaction during the same tree transaction. Since we pollute the transaction records during fluid.stronglyConnected with the book-keeping records for the Tarjan algorithm and do not clear these out, the connected components computed on the 2nd run will be corrupted, leading to an incorrect init model application order and corruption of the whole model graph.\
This is observable if there is a group of initial components participating in a relay, a nested one of which then lenses some further components.

        