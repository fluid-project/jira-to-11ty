---json
{
  "title": "FLUID-999",
  "summary": "Keyboard-a11y unit tests failing in FF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-23T18:11:36.000-0400",
  "updated": "2008-07-25T11:34:03.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "FF2 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-25T11:34:03.000-0400",
      "body": "appears fixed in latest build\n\nverified using:\n\nFF2 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\n"
    }
  ]
}
---
Currently failing most unit tests. Only completely passing tests 1 and 6

Fails the following tests:

2\. keyboard-a11y module: selectable() sets correct tabindexes (3, 2, 5)\
2\. Each menu item should have a tabindex of -1 expected: -1 actual: 0\
3\. Each menu item should have a tabindex of -1 expected: -1 actual: undefined\
4\. Each menu item should have a tabindex of -1 expected: -1 actual: 1\
3\. keyboard-a11y module: Selects first item when container is focusssed by default (1, 3, 4)\
4\. A selected element should have the selected class.\
4\. keyboard-a11y module: Selects first item when container is focussed--explicit argument (1, 3, 4)\
4\. A selected element should have the selected class.\
5\. keyboard-a11y module: Doesn't select first item when container is focussed--boolean arg (1, 6, 7)\
7\. A selected element should have the selected class.\
7\. keyboard-a11y module: select() (3, 5, 8)\
1\. A selected element should have the selected class.\
4\. A selected element should have the selected class.\
7\. A selected element should have the selected class.\
8\. keyboard-a11y module: Doesn't select non-selectables (2, 3, 5)\
1\. A selected element should have the selected class.\
5\. A selected element should have the selected class.\
9\. keyboard-a11y module: Allows selection via programmatic focus() calls. (4, 11, 15)\
4\. A selected element should have the selected class.\
7\. A selected element should have the selected class.\
10\. A selected element should have the selected class.\
13\. A selected element should have the selected class.\
10\. keyboard-a11y module: selectNext() (2, 4, 6)\
1\. A selected element should have the selected class.\
5\. A selected element should have the selected class.\
11\. keyboard-a11y module: selectPrevious() (3, 3, 6)\
1\. A selected element should have the selected class.\
4\. A selected element should have the selected class.\
6\. A selected element should have the selected class.\
12\. keyboard-a11y module: selectNext() with wrapping (2, 0, 2)\
1\. A selected element should have the selected class.\
2\. A selected element should have the selected class.\
13\. keyboard-a11y module: selectPrevious() with wrapping (2, 3, 5)\
1\. A selected element should have the selected class.\
5\. A selected element should have the selected class.\
14\. keyboard-a11y module: Focus persists after leaving container (3, 7, 10)\
1\. A selected element should have the selected class.\
4\. A selected element should have the selected class.\
8\. A selected element should have the selected class.\
15\. keyboard-a11y module: Selection is cleaned up upon blur (1, 6, 7)\
1\. A selected element should have the selected class.\
16\. keyboard-a11y module: activate() (1, 5, 6)\
1\. A selected element should have the selected class.\
17\. keyboard-a11y module: activate with Enter key (1, 4, 5)\
1\. A selected element should have the selected class.\
18\. keyboard-a11y module: activate with Spacebar (1, 4, 5)\
1\. A selected element should have the selected class.\
19\. keyboard-a11y module: One custom activate binding (1, 4, 5)\
1\. A selected element should have the selected class.\
20\. keyboard-a11y module: Multiple custom activate bindings (1, 6, 7)\
1\. A selected element should have the selected class.\
21\. keyboard-a11y module: currentSelection (3, 3, 6)\
1\. A selected element should have the selected class.\
4\. A selected element should have the selected class.\
6\. The current selection should be the second menu item. expected: \[object HTMLSpanElement] actual: \[object HTMLParagraphElement]

        