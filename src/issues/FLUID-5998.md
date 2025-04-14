---json
{
  "title": "FLUID-5998",
  "summary": "Focus is not visible after pressing Escape on an active Inline Edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Simon Bates",
  "date": "2016-10-26T16:05:38.363-0400",
  "updated": "2021-07-19T14:09:59.123-0400",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Firefox 49, Linux\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [],
  "comments": []
}
---
To reproduce:

* Open <http://build.fluidproject.org/infusion/demos/inlineEdit/>
* Activate the first Inline Edit control "Edit this"
* Press Escape

Expected:

* Focus to remain on the Inline Edit

Actual:

* There is no focus indicator on the page; focus appears to be positioned just after the Inline Edit control (pressing tab focuses the following control, and pressing shift-tab places focus back on the Inline Edit)

Note that this behaviour is inconsistent with pressing Enter to confirm the edit changes. In that case, the control also reverts to view mode but focus remains on the Inline Edit.

        