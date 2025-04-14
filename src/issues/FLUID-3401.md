---json
{
  "title": "FLUID-3401",
  "summary": "request to delete through the changeApplier deletes the entire value at the EL path",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-12-02T16:42:25.000-0500",
  "updated": "2014-03-03T14:18:58.484-0500",
  "versions": [
    "1.2",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-05-19T01:55:27.175-0400",
      "body": "This will be fixed in the upcoming merge of the ChangeApplier from work in the <https://fluidproject.atlassian.net/browse/FLUID-2881#icft=FLUID-2881> branch. However, the behaviour expected in this comment will not be implemented - the actual key of the string \"itemToRemove\" as presented is actually \"0\" as a result of appearing at the 0th element in the selections list - and deletions by index from a list will (probably) not be implemented.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-08-02T03:17:45.571-0400",
      "body": "This functionality is now corrected by the merge of the <https://fluidproject.atlassian.net/browse/FLUID-3680#icft=FLUID-3680> functionality. However, as noted in the previous comment, the functionality requested in the original report is not implemented.\n"
    }
  ]
}
---
request to delete through the changeApplier deletes the entire array at the EL path.

It should only remove the specified item from the array, indicated by the EL path.

applier.requestChange("elPath", "itemToRemove", "DELETE");

If the model looked like this

model.selections === \["itemToRemove", "itemToStay"];

after the change request, it will look like this

model.selections === undefined

        