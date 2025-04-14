---json
{
  "title": "FLUID-3288",
  "summary": "Moving an item with the keyboard \"loses\" the \"ctrl-key is down\" status",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-13T17:26:48.000-0400",
  "updated": "2010-12-13T14:52:37.641-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "Safari 4 on Mac OS X and Windows\\\nChrome 4 (Win XP)\\\nUbuntu 9.10, Firefox 3.5.3\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-54/",
      "key": "DECA-54"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3568/",
      "key": "FLUID-3568"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3578/",
      "key": "FLUID-3578"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3876/",
      "key": "FLUID-3876"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3291/",
      "key": "FLUID-3291",
      "summary": "Safari crashes when using side arrows in vertical list reorderer"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3288/FLUID-3288.patch.txt",
      "filename": "FLUID-3288.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3288/FLUID-3288.v2.patch.txt",
      "filename": "FLUID-3288.v2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3288/FLUID-3288.v3.patch.txt",
      "filename": "FLUID-3288.v3.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Alison Benjamin",
      "date": "2009-10-14T10:42:05.000-0400",
      "body": "I had the same problem in image reorderer so I have added this component to the jira.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-03T13:50:05.851-0500",
      "body": "Did some investigation using Safari. It appears that this is all related to a blur event being called on the selectable element.\n\nIn Reorderer.js\n\nLine: 395\\\nselectable.blur(handleBlur) is called\n\nLine: 380\\\nThe handleBlur function calls changeSelectedToDefault\n\nLine: 358\\\nThe changeSelectedToDefault function removes the dragging style\n\nLine: 218\n\nThere is a conditional to see if the dragging style is applied. \\\nSince the dragging style was removed, it has to be re-added before the movement can happen.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-03T16:07:43.353-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3288#icft=FLUID-3288>.patch.txt has a potential fix. Please let me know if it is good enough to go in. Note I haven't had a chance to write any unit tests yet.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-07T12:53:14.335-0500",
      "body": "Attached patch (<https://fluidproject.atlassian.net/browse/FLUID-3288#icft=FLUID-3288>.v2.patch.txt) which fixes the event namespacing from the previous patch.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-07T14:04:25.845-0500",
      "body": "Attaching patch <https://fluidproject.atlassian.net/browse/FLUID-3288#icft=FLUID-3288>.v3.patch.txt which is the same as <https://fluidproject.atlassian.net/browse/FLUID-3288#icft=FLUID-3288>.v2.patch.txt but with unit tests\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-07T14:08:42.805-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-07T14:08:52.169-0500",
      "body": "committed the patch, <https://fluidproject.atlassian.net/browse/FLUID-3288#icft=FLUID-3288>.v3.patch.txt, but it still needs to be code reviewed. for the bug parade.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-13T14:40:07.169-0500",
      "body": "I have reviewed the changes in the patch and the changes seem sound, also the test cases thoroughly exercise the behaviour which is fixed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-13T14:52:37.633-0500",
      "body": "I committed, antranig review, it was tested.. time to close\n"
    }
  ]
}
---
In Safari on Mac OS X and Windows:\
When using the keyboard to move items, once the item is moved once, the fact that the Ctrl key is still held down seems to be forgotten. The arrow key must be pressed again to restore the status, and then yet again to actually move.

To reproduce:\
1\) Open any reorderer demo, like <http://build.fluidproject.org/infusion/demos/reorderer/listReorderer/demo.html>\
2\) Tab to the list, and use the arrow keys to select something to move\
3\) Press and hold down the Ctrl key - note the styling change, which is appropriate\
4\) Use the arrow key to move the item once - do NOT release the Ctrl key

* Note that the item moves properly, but the styling has reverted\
  5\) Press the arrow key again
* Note that the styling changes back, but the item doesn't move\
  6\) Press the arrow key again
* Note that the item now moves

        