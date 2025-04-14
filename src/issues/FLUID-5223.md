---json
{
  "title": "FLUID-5223",
  "summary": "If there's exactly one text field in the prefs editor, pressing enter on most inputs causes form to submit ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2013-11-25T13:00:00.312-0500",
  "updated": "2022-02-03T10:24:06.608-0500",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-05-27T10:24:46.050-0400",
      "body": "I tested this on May 27, commit 7ad02491a7faa7f9f2125ed2fb1efbee07b93faa, and the problem is still happening.\n"
    }
  ]
}
---
If the entirety of a preferences editor contains exactly one text \<input> field, then pressing the return key when focus is on almost any one of the controls will cause the form that is containing the preferences editor to submit, which causes all of the panels to disappear.

A simple way to reproduce:\
1\) remove one of textfield sliders from the uiOptions interface by commenting out its entry in the aux schema\
2\) use keyboard interaction to tab to the various controls in the uio interface and press enter

Notes:

* The submit does not occur ONLY on the text field itself. If you put focus on a checkbox, a radio button, or a slider, enter will still submit the form. The only exception seems to be a drop-down, which does not cause a submit.
* The problem does NOT occur if there are no text fields or if there are more than one text field. The multipe text fields do not need to be in the same panel.

        