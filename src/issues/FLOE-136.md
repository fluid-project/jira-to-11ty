---json
{
  "title": "FLOE-136",
  "summary": "Cursor appears in the middle of the video placeholder",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "In Progress",
  "assignee": "Jonathan Hung",
  "reporter": "Dana",
  "date": "2014-01-06T12:32:31.379-0500",
  "updated": "2014-01-14T07:51:20.200-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": "Firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-01-07T10:55:30.941-0500",
      "body": "To reproduce:\\\n1\\. Open <http://metadata.floeproject.org/demos/html/metadata.html>\\\n2\\. Click edit pane to put cursor into the text editor\\\n3\\. Type something into a single row of text\\\n4\\. Go to the \"Enter web address for video\" field and enter a value and press \"OK\"\\\n5\\. Click anywhere in the editable pane except the first row of text\\\n6\\. Notice cursor appears to float somewhere inside the editable pane\\\n7\\. Now try typing something - nothing happens. This is the bug.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-01-07T11:07:10.404-0500",
      "body": "Part of the problem I suspect has to do with the way the containers used to create the placeholder. Because the inner-most div does not have any padding, the cursor appears in the middle of the placeholder. This placeholder should be modified so that the cursor should properly appear after the container.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-01-13T14:14:54.072-0500",
      "body": "I'm thinking that the current implementation of using styled div containers to resemble a placeholder is perhaps the wrong approach since the divs themselves lack any content or semantics.\n\nI think a better approach to this would be to use an image since it has more semantics and can be described as a representation / placeholder for a video using alt text.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-14T07:51:20.200-0500",
      "body": "It may also make sense to replace them to make it easier to remove them. Right now we have made the placeholders non-editable, which is why you get the issue of a cursor that can't do anything. This is because you wouldn't want to remove portions of the placeholder (i.e. just the play icon). If we do support removing, we need a way to notify that it has been removed.\n"
    }
  ]
}
---
Sometimes when placing the editing cursor in the editable area, the cursor appears in the center of the video place holder.  Nothing happens when typing. &#x20;

        