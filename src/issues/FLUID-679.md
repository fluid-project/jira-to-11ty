---json
{
  "title": "FLUID-679",
  "summary": "File Upload: IE6 throws a script error with the wrong version of the Flash plugin",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Jonathan Hung",
  "date": "2008-05-30T15:55:33.000-0400",
  "updated": "2011-02-22T16:27:46.099-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP IE6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-05-30T18:13:10.000-0400",
      "body": "This error is caused by the machine having an older version of the flash plugin installed. If you have Flash 8 instead of Flash 9 then you'll see this error.&#x20;\n\nWe need to be able to figure out which version of Flash is installed and put up the correct warning.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-14T14:33:08.000-0400",
      "body": "This was resolved when we added progressive enhancement support to Uploader.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:46.097-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
On Windows XP with IE6, hitting the "Browse files" button causes an immediate error at "Line 320".

Works fine in IE7 on WinXP on JH's Intel and AC's Mac.

        