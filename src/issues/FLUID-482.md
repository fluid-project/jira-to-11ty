---json
{
  "title": "FLUID-482",
  "summary": "Lightbox: red drop bar appears when item drop not possible",
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
  "date": "2008-04-10T13:54:41.000-0400",
  "updated": "2008-04-28T13:59:10.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7, FF2\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-407/",
      "key": "FLUID-407",
      "summary": "Nested drop targets sometimes display the drop marker in the wrong place."
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-479/",
      "key": "FLUID-479",
      "summary": "Drop marker incorrect when avatar is dropped in white space at end of row."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T16:20:08.000-0400",
      "body": "Since over and out events arrive in unpredictable order, we can't rely on these events to decide when to show/hide the drop marker. We need to either allow dropping at the end of the list (if dwelling past the end) or find a better way to determine the over/out.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T13:58:49.000-0400",
      "body": "This is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-479#icft=FLUID-479>\n"
    }
  ]
}
---
When dragging a Lightbox item, if you drag it over the last element in the order the red drop bar appears at the end of the order after that last element; but if you then drag the item past the last item and let go it will no longer be moved to the last elment position despite the fact that the red drop bar has not disappeared. (Note that if you do not drag the element to be moved over the last element in the order, but try to move it in from past the end of the element list, the red drop bar does not appear at all until you can successfully drop the element at the end of the order.)

        