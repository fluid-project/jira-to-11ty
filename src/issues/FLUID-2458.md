---json
{
  "title": "FLUID-2458",
  "summary": "switching from the High Contrast theme to any other theme, removes the text from the preview",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-04-01T15:51:34.000-0400",
  "updated": "2009-05-25T16:04:32.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nIE6, IE7(Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2500/",
      "key": "FLUID-2500"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:01:17.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T14:49:12.000-0400",
      "body": "The changes made are only remotely related to the issue, but it is true that the issue was basically resolved by the fix to <https://fluidproject.atlassian.net/browse/FLUID-2500#icft=FLUID-2500>, and the changes made against this JIRA are good, so this looks fine to me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-25T16:04:32.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
switching from the High Contrast theme to any other theme, removes the text from the preview

Steps to reproduce:

1\) Open the Sakai Mock-up example

2\) Open the UI Options dialog

3\) change to the "High Contrast" theme

4\) select any other theme

Notice that the text in the preview window has vanished. Selected another them, now will clear up the issue. Also the actual text on the page isn't affected.&#x20;

        