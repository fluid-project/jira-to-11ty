---json
{
  "title": "FLUID-3898",
  "summary": "The dead man's blur is not handling the blur correctly anymore",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-12-13T18:19:37.021-0500",
  "updated": "2010-12-14T09:47:37.279-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3487/",
      "key": "FLUID-3487",
      "summary": "Promote fluid.deadMansBlur() to framework"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-14T09:47:19.385-0500",
      "body": "This issue came about through the promotion of DMB, <https://fluidproject.atlassian.net/browse/FLUID-3487#icft=FLUID-3487> has been re-opened to address this issue.\n"
    }
  ]
}
---
Yura pointed out that unit tests are failing under IE, I also noticed that in that the Dropdown inlineEdit is no longer working with the mouse. (note, that the file also wasn't updated properly and is also missing the fluidView\.js file, which I added locally when testing).

Steps to reproduce:

1\) Open the dropdown inline edit with the mouse

2\) Click on a different element to select.

Notice that when the dropdown closes the original item is  still displayed.

Note you can change selection with the keyboard.

        