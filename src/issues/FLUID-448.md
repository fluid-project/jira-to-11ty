---json
{
  "title": "FLUID-448",
  "summary": "Reorderer: generic lightbox item drag to end of items not accepted",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2008-04-04T14:45:34.000-0400",
  "updated": "2008-11-13T13:27:48.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-408/",
      "key": "FLUID-408",
      "summary": "Thumbnail container is not a valid drop target"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T14:00:33.000-0400",
      "body": "Duplicates <https://fluidproject.atlassian.net/browse/FLUID-408#icft=FLUID-408>\n"
    }
  ]
}
---
Dragging image item to empty space after the last image in the group: the item does not remain, it snaps back to original location. The red bar should appear to the right of the last item indicating a possible move to the new location much further over than it does now before it disappears. As it stands the move becomes illegal after the item to be moved is any more than half way past the right border of the last item. While this limitation is relatively easy to pick up on, the procedure of dropping the item fully into the blank space should work if possible as this is the strategy most users will try first.\
( <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/generic-lightbox/generic-lightbox.html> )

        