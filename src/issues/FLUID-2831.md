---json
{
  "title": "FLUID-2831",
  "summary": "Links UI Option settings are not rettained in IE6 WinXP",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "y z",
  "date": "2009-05-28T16:29:43.000-0400",
  "updated": "2013-10-04T10:23:40.733-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6 - WinXP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T10:51:58.316-0400",
      "body": "This is no longer happening in v1.4\n"
    }
  ]
}
---
Steps to reproduce:

* open Sakai UI Options example: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>
* go to UI Options and click on "Easier to find" tab
* check all the checkboxes for "Links"
* save and close the dialogue
* open the UI Options again and notice that none of the check boxes stayed checked

        