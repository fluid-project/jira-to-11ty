---json
{
  "title": "ENGAGE-531",
  "summary": "Cabinet doesn't implement all of the necessary aria roles",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-03-22T13:19:13.000-0400",
  "updated": "2014-03-03T13:44:23.585-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-22T13:19:29.000-0400",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-22T17:08:33.000-0400",
      "body": "Moved the tab role and aria states from the Drawer to the Handle. Also added the tabpanel role to the Contents.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T10:11:15.000-0400",
      "body": "Assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T09:35:35.000-0400",
      "body": "The fix looks ok to me in terms of code, but assigning to Colin to verify that the use of ARIA roles is indeed correct. I suggest that the variable \"selector\" in drawerAdjust be renamed since by line 91 its use is deceptive, it is clearly no longer a selector but represents DOM nodes. This clarity should cascade upwards to the methods \"openDrawers\" and \"closeDrawers\" whose APIs should be better documented to explain their expectations - an idiom used elsewhere is to refer to a \"jQueryable\".\\\nI also suggest the uses of \"move\" be replaced with \"adjust\" - \"move\" suggests that the drawer nodes are to be physically shifted around the DOM, rather than just have their visual state adjusted. This would make consistency with the internal method named \"drawerAdjust\".\n"
    }
  ]
}
---
Cabinet doesn't implement all of the necessary aria roles

Each of the contents sections should be tabpanels

<http://dev.aol.com/dhtml_style_guide#tabpanel>

<http://www.w3.org/WAI/PF/aria/roles#tabpanel>

        