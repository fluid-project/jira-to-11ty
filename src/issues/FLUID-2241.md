---json
{
  "title": "FLUID-2241",
  "summary": "UI Options in Sakai: Preview doesn't reflect previously saved changes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2009-02-13T15:07:06.000-0500",
  "updated": "2009-03-03T10:47:03.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2215/",
      "key": "FLUID-2215",
      "summary": "UI Options unit test fails"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T15:54:27.000-0500",
      "body": "This behaviour happens on Cancel, too:\n\n1\\) Click \"Edit Appearances\"\\\n2\\) Make some changes and \"Save and Apply\" them.\\\n3\\) Close the dialog.\\\n4\\) Click \"Edit Appearances\" again \\\n5\\) Make some choices that are different than the previously saved changes\\\n6\\) Click Cancel\n\nThe controls properly revert to the previously saved values, but the Preview does not reflect those values.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T16:20:33.000-0500",
      "body": "Pondering whether this failing test (<https://fluidproject.atlassian.net/browse/FLUID-2215#icft=FLUID-2215>) might be related?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-02-24T20:54:08.000-0500",
      "body": "This appears to be a timing issue. Putting in a break point causes the preview to render correctly.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-03T10:16:54.000-0500",
      "body": "I can no longer reproduce this issue. It's possible that Jacob's fix to <https://fluidproject.atlassian.net/browse/FLUID-2248#icft=FLUID-2248> eliminated this problem?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-03T10:24:06.000-0500",
      "body": "Justin, if you can confirm that this issue can't be reproduced, maybe you could close it officially.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-03T10:47:03.000-0500",
      "body": "Tested using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n\nCould not reproduce the issue\n"
    }
  ]
}
---
In the Sakai demo of UI Options:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

1\) Click "Edit Appearances"\
2\) Make some changes and "Save and Apply" them.\
3\) Close the dialog.\
4\) Click "Edit Appearances" again

In the dialog, the preview now does NOT reflect the saved options (even though the rest of the interface correctly does).

        