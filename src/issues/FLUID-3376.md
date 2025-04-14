---json
{
  "title": "FLUID-3376",
  "summary": "jQuery UI dialog not technically accessible to JAWS 10 ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Alison Benjamin",
  "date": "2009-11-10T13:33:53.000-0500",
  "updated": "2010-04-15T14:47:15.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "XP, FF3, Jaws 10&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2010-04-15T14:47:15.000-0400",
      "body": "UI Options no longer use jQuery Dialog.\n"
    }
  ]
}
---
Use Sakai mock up.&#x20;

After activating the "edit appearance" button, it is impossible to get JAWS to read the jQuery dialog box containing the UI Options controls.&#x20;

This problem does not occur in IE 8. &#x20;

        