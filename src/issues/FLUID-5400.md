---json
{
  "title": "FLUID-5400",
  "summary": "On list item drag the avatar width is not as long as the item",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "beth.mejsullivan",
  "date": "2014-06-03T17:58:20.627-0400",
  "updated": "2024-07-22T15:09:19.564-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "Mac OS 10.8.5 Safari Version 6.1 (8537.71)\\\nmacOS 14.5 Safari v17.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
State Tests:\
Mouse

Test 2: Mouse, Pickup Avatar

Procedure\
Complete Test 1\
Using the mouse, press and hold the 'left-mouse-button' down\
Using the mouse, drag slightly to the right

Expected Results\
An avatar (representing the item) should be created\
The avatar should remain under the pointer as you drag around

Actual Results\
An avatar (representing the item) is created but the width is not the same as the list item\
The avatar does not appear to be under the pointer as you drag around, because the avatar is too small

        