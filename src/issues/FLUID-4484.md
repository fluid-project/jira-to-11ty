---json
{
  "title": "FLUID-4484",
  "summary": "File Queue doesn't scroll when using the keyboard in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Michelle D'Souza",
  "date": "2011-09-30T15:43:11.627-0400",
  "updated": "2015-06-26T10:05:08.976-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 8 XP, Win 7\\\nFine in FF 6 Win 7, IE9 Win 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:29:32.084-0400",
      "body": "Cannot reproduce in IE 11 (which is currently the latest supported version of IE)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:02.927-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
When using the keyboard to move focus between files in the file queue they do not scroll into view.&#x20;

Steps to recreate:

1\. Add several files to be uploaded.\
2\. Shift tab to the file queue.\
3\. Use the down arrow key to move focus to a file that is not currently visible.&#x20;

Notice that the file will get focus but does not scroll into view.&#x20;

        