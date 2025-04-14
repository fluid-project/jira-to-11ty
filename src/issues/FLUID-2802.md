---json
{
  "title": "FLUID-2802",
  "summary": "Radio button selection displays old values on first re-entry into the dialog: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-05-28T11:10:59.000-0400",
  "updated": "2013-10-04T10:24:07.750-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6 (Win XP)\\\nIE 7 (Win Vista, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3980/",
      "key": "FLUID-3980",
      "summary": "UI Options settings should reflect the actual default settings when the panel opens"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-08T13:00:02.000-0400",
      "body": "To add to this:\n\nI tested this using the simplified layout. I selected simplified layout (yes) and saved the change, then re-opened the UI Options dialog and found that (no was selected, but that simplified layout was still in place). Then when I re-submitted (no was selected), it did not switch back to \"complex\" layout even though the \"no\" radio button was selected.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T10:47:23.767-0400",
      "body": "The UIO dialog has been completely redesigned, and this issue is no longer present (there are no radio buttons anymore).\n"
    }
  ]
}
---
Radio button selection displays old values on first re-entry into the dialog

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Open the UI Options dialog, change one of the radio button selections and save the change

3\) Re-open the UI Options dialog, notice that the radio button selection is displaying the old selection

        