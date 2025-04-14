---json
{
  "title": "FLUID-873",
  "summary": "Tabbing through uploader breaks keyboard navigation, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-08T18:47:53.000-0400",
  "updated": "2009-01-14T13:24:48.000-0500",
  "versions": [
    "0.4beta1",
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 (win xp)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-494/",
      "key": "FLUID-494",
      "summary": "File Upload: Add keyboard support"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-956/",
      "key": "FLUID-956"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-15T17:34:08.000-0400",
      "body": "This issue may be addressed by <https://fluidproject.atlassian.net/browse/FLUID-494#icft=FLUID-494>, so that task should be carried out first, and then double-check if this bug is still present.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T16:31:48.000-0400",
      "body": "Interesting: in IE6 the swf in all its 1px by 1px glory is part of the tab order. This may be related to this bug. Which I'm having trouble reproducing.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T16:42:56.000-0400",
      "body": "I've forcibly removed the swf from the tab rotation by programattically adding tabindex=-1. Otherwise I could not reproduce this bug.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T08:24:31.000-0400",
      "body": "Verified fix using IE6 (Win XP)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-01T09:45:48.000-0500",
      "body": "The keyboard navigation stops after passing through all of the tabbable elements and returning to the address bar.\n\nThis doesn't seem to happen if there are files in the file queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-14T13:24:48.000-0500",
      "body": "Appears to have been fixed&#x20;\n\nTested using:\\\nIE6 (Win XP, flash 10)\n"
    }
  ]
}
---
Tabbing through the inline version of uploader will break keyboard navigation.

Steps to reproduce:

1\) open the uploader (inline) from the daily build page:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>

2\) click the 'add-files' button

3\) tap the 'tab' key and traverse through all of the uploader elements. Notice that after tabbing off the 'cancel' button, there is no longer any response to tapping the 'tab' key. shift-tab, will also no longer work.

dev-iteration39

        