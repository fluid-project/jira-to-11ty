---json
{
  "title": "FLUID-3594",
  "summary": "For tab reordering, ctrl-m has the same behavior as 'enter' (it goes into the selected tab) (Safari 4/OS X 10.5)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Escalated",
  "reporter": "James Yoon",
  "date": "2010-04-05T11:19:35.000-0400",
  "updated": "2011-01-11T10:49:26.982-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Safari 4 (OS X 10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-04-06T13:19:41.000-0400",
      "body": "Issue has to do with the js key code. In Safari, ctrl-m and \"Enter\" are both key code 13 on key press, whereas in Firefox they are separate key codes (109 and 13, respectively).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T10:49:26.979-0500",
      "body": "No longer have this demo. Issue appears to be with Safari. This can be demonstrated by testing out the keystrokes on this site ( <http://asquare.net/javascript/tests/KeyCode.html> ).\n"
    }
  ]
}
---
To replicate:\
1\. Go to <http://build.fluidproject.org/infusion/standalone-demos/reorderer/html/jquery-tabs.html>\
2\. Select "Butternut" using the keyboard\
3\. Press ctrl-m

Expected behavior:\
Nothing should happen

Actual behavior:\
Goes into the "Butternut" tab

(issue doesn't occur in FF3.5/10.5)

        