---json
{
  "title": "FLUID-2786",
  "summary": "Alt text persists on the page after the page number is changed in Pager in IE 6 and IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "y z",
  "date": "2009-05-27T12:13:25.000-0400",
  "updated": "2014-06-25T15:58:45.321-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "IE 6 and IE7 - WIN XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-05-29T12:41:51.000-0400",
      "body": "I just found this in IE7 as well.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:58:45.313-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
to reproduce:

* open Sakai example: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>
* hover over the page number you want to switch to and wait until the alt text appears
* click on the page number and move the cursor away from the page number
* notice that after loading the new page (takes a while in IE 6 WIN XP), the alt text is still up, even though the cursor is moved away

        