---json
{
  "title": "FLUID-928",
  "summary": "Reorderer should provide callbacks for a variety of interesting moments",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2008-07-16T21:47:08.000-0400",
  "updated": "2011-02-22T16:27:51.951-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1048/",
      "key": "FLUID-1048"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-12T17:01:19.000-0400",
      "body": "As of revision 5530 event architecture is now generalised (see Fluid.js \"mergeListeners\" and \"instantiateFirers\" ) and it will be easy to freely add new \"moments\".\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-17T23:58:52.000-0400",
      "body": "Fixed at revision 5572. As of this revision the current set of supported events reads as follows:\\\nonShowKeyboardDropWarning: null,\\\nonSelect: null,\\\nonBeginMove: \"preventable\",\\\nonMove: null,\\\nafterMove: null,\\\nonHover: null\n\nThis can be duly expanded but should be sufficient to be going on with. afterMove reports as well as the moving item, its target position and the complete list of movables.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:51.949-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, the Reorderer provides a single callback: the orderChangedCallback. It is fired whenever the user has finished dropping an item.

However, there are a variety of interesting moments that should have callbacks:

* afterGrab(grabbedElement)
* afterMove(droppedElement)
* onSelect(selectedElement)

Other delegate-style predicate functions would be helpful to allow users to override the Reorderer's default behaviour?

* &#x20;shouldSelect()
* &#x20;shouldMove()

It would also be helpful if the orderChangedCallback was given a list of the new order of elements, saving users the effort of walking the DOM for simple cases.

dev-iteration43

        