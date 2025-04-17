---json
{
  "title": "SJRK-183",
  "summary": "Ensure empty stories can be saved",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2019-01-17T13:14:26.096-0500",
  "updated": "2019-01-22T14:20:26.110-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-182/",
      "key": "SJRK-182",
      "summary": "Cannot publish a story with an empty image"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-01-17T17:38:41.728-0500",
      "body": "Sepideh Shahi left a comment on our Google doc saying \"we have removed the term \"optional\" from all text fields in the updated design\" today. With this in mind, we will be proceeding with Option 1 laid out above. This will require handling the case of totally empty stories. We will allow their submission, though we will need to make sure the tool will allow publishing of empty blocks. <https://fluidproject.atlassian.net/browse/SJRK-182#icft=SJRK-182> will have to be solved before this is possible.\n"
    }
  ]
}
---
Some fields are marked as "(optional)", implying that other fields are required. However, there is no messaging saying that required fields are not filled in.

Potentially related: we are seeing some failures when a story is submitted with empty blocks <https://issues.fluidproject.org/browse/SJRK-182>

* Option 1: We always save regardless of whether anything is filled in
* Option 2: We require some fields to be filled in and we message the user appropriately

 

At a minimum we should be able to save a story that contains a block of each type where that block has no fields filled in.

 

        