---json
{
  "title": "SJRK-422",
  "summary": "Clicking on a newly added block shifts focus to the previously focused block",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-11-12T16:03:38.156-0500",
  "updated": "2020-11-12T16:06:29.133-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-369/",
      "key": "SJRK-369",
      "summary": "Solve potential reorderer race condition on block addition"
    }
  ],
  "attachments": [],
  "comments": []
}
---
 Steps to reproduce:

 

1. Open the StoryTelling tool and create a new story ( <https://staging-stories.floeproject.org/storyEdit.html> )
2. Add a couple of blocks 
3. Focus one of the blocks
4. Add a new block
5. Click on the newly added block
6. Notice that focus moves back to the previously focused block

 

It is likely this is happening due to the delayed refresh of the reorder able elements (blocks). With the Reorderer when you move focus away from the reorderable elements it tracks what was last focused. When you refocus the group of reorderable elements it pushes focus to what had last been focused. In this case the new block is part of the reorderable container but not one of the reorderable elements yet, which is applied on focus. So the Reorderer tries to move focus to the previously selected reorderable element.

        