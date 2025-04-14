---json
{
  "title": "FLUID-1941",
  "summary": "Closing saves changes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-08T11:47:03.000-0500",
  "updated": "2010-04-15T13:33:44.000-0400",
  "versions": [
    "0.6",
    "0.7",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1963/",
      "key": "FLUID-1963"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-10T11:06:17.000-0500",
      "body": "Note that the styling doesn't change\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:57:56.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T15:51:50.000-0500",
      "body": "This implementation looks, good, except for the same thing that seems to be happening in <https://fluidproject.atlassian.net/browse/FLUID-2241#icft=FLUID-2241>. Since the change fixes the bug, and there is another JIRA for the new issue, I think it's safe to close this one. I'll comment on 2241 regarding Cancel behaviour.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-13T15:58:03.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-06-01T12:20:37.000-0400",
      "body": "This issue came back likely in revision 7210 when the 'close' icon was removed in favour of the close icon in the jQuery UI dialog.&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-04-15T13:33:44.000-0400",
      "body": "Can't reproduce anymore.\n"
    }
  ]
}
---
Closing saves changes

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click the "Edit Appearance" button

3\) change some of the selected stylings, but don't save the changes just close the dialog

4\) Click the "Edit Appearance" button\
Notice that the changes made in step 3 are preserved instead of being reset to the current style

        