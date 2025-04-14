---json
{
  "title": "FLUID-860",
  "summary": "Double clicking does not properly activate checkbox: using FF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-07-08T15:36:59.000-0400",
  "updated": "2014-07-07T15:14:25.956-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "FF2 (Mac OS X)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-534/",
      "key": "FLUID-534",
      "summary": "Double-clicking in IE highlights text and does not activate checkbox."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-20T16:41:21.754-0500",
      "body": "Now that the CheckBox example has been removed, we have no easy way to double-check this one. Any thoughts on how we can create a test case for it? Can we effectively simulate double-clicks in a unit test?\n"
    }
  ]
}
---
This is essentially the opposite bug as a FLUID-534.

The double click seems to be registered as two individual clicks.  This means that the check box is activating and deactivating.

Steps to reproduce:

1\) open the Checkboxes keyboard accessibility example from the daily build site \
<http://build.fluidproject.org/fluid/sample-code/keyboard-a11y/checkboxes/CheckboxExample.html>

2\) double click a check box or its text description. Notice that the check box activates and deactivates.

According to Fluid-534, the checkbox should remain activated after a double click.

        