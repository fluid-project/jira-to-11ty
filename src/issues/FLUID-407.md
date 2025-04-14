---json
{
  "title": "FLUID-407",
  "summary": "Nested drop targets sometimes display the drop marker in the wrong place.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2008-03-28T10:56:34.000-0400",
  "updated": "2008-07-11T14:33:48.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-482/",
      "key": "FLUID-482"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-465/",
      "key": "FLUID-465"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-458/",
      "key": "FLUID-458"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-187/",
      "key": "FLUID-187",
      "summary": "Allow portlets to be dragged into empty columns"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-479/",
      "key": "FLUID-479"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-563/",
      "key": "FLUID-563"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-31T13:28:36.000-0400",
      "body": "Actually, the jQuery ticket mentioned in Michelle's comment is not related to this issue (it's related to an issue I encountered trying to remove the droppability from the avatar - the ticket is mentioned in the Reorderer.js, in case it is fixed.)\\\n(the incorrect jQuery link has now been removed.)\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-31T15:47:37.000-0400",
      "body": "The real issue seems to be unpredictability of the occurrance of the relevant over and out events.\n\nWhen the cursor moves from the inner drop target to the outer drop target (and vice versa) both targets get appropriate over and out events, but the order that they occur in is not predictable. Sometimes, the over on the column might occur before the out on the portlet. The test file at\\\n<http://anastasia.atrc.utoronto.ca/jquery-testing/ui/demos/ui.droppable.html>\\\nillustrates this clearly if you view the console logs as you drag the droppable in and out of the drop targets.\n\nWe use the over and out to decide when to show and hide the drop marker, and we re-use a single drop marker (we just move it around and show/hide it), so when the over and out occur in the 'wrong' order, we end up showing and hiding the drop marker inappropriately.\n\nI think we will need to rethink how we handle the drop marker in light of the unpredictability of the necessary events.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-01T16:46:33.000-0400",
      "body": "Another scenario that occurs with the unpredictability of the over/out events occurs with the portlets scenario.\n\nWhen the avatar is dragged from one portlet to another, it passes over the column space between portets. This results (correctly) in an 'over' and 'out' on the column. On the over, the mouse tracker is bound to the column, and on the out it is unbound.\n\nIf the drag happens quickly, it's possible for the out to come before the over, leaving a mouse movement handler incorrectly bound to the column after it should have been removed.\n\nThis can be duplicated with the portlets example file: sample-code/reorderer/abstract/portal/portlets.html\\\n1\\) Pick up Portlet 6 and drag it over top of Portlet 8 (without dropping).\\\n2\\) Without dropping, drag the portlet between Portlets 8 and 9. If this is done quickly, the drop marker will sometimes be shown at the bottom of the column when it is supposed to be shown relative to a portlet. This is most noticable when it is supposed to be either before or after Portlet 8.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-08T19:20:11.000-0400",
      "body": "The implementation was changed to only pay attention to the 'over'. This reduces the likely-hood of seeing the bug but it still happens. To reproduce, make sure the mouse pointer is over the avatar when dragging around.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-05-14T15:18:06.000-0400",
      "body": "We changed the drop marker handling to use mousemove events instead of over/out events.\n"
    }
  ]
}
---
Information related to this issue moved from from FLUID-187:

Sometimes in the uPortal mockup file, if a portlet is dragged **quickly** over another portlet, the drop marker is incorrectly displayed at the end of the column instead of relative to the target portlet.

With the 'greedy' flag on (which it is), the column should get an 'out' event when the dragging cursor moves from the column space into the portlet space, and on this out, we unbind the mousemove handler, trackMouseMovement() (which is what displays the dropMarker) from the column (and bind it to the portlet on the portlet's 'over').

We **are** getting the out event, and hence we are calling unbind(), but the mousemove handler continues fire, and hence continues to incorrectly display the dropMarker. So it looks like the unbind() is not properly unbinding.

dev-iteration33

        