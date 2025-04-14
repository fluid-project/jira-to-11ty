---json
{
  "title": "FLUID-2535",
  "summary": "Keyboard navigation on radio buttons is not consistent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jacob Farber",
  "date": "2009-04-06T11:28:45.000-0400",
  "updated": "2013-10-04T10:25:00.083-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "IE6, IE7, IE8 (Win XP), IE9(Win7)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:11:22.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:39:25.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-16T21:38:40.000-0400",
      "body": "Should it be possible to fix this? The low-level details of tabindex addressing will be browser-specific, and users who habitually use a particular browser for keyboard navigation will simply expect their browser's particular quirks to be perpetrated. The only real room for recourse we might have (short of the \"global focus manager\", which, with our new framework method, \"getLastFocusedElement\" does actually come one step closer) would be to give all the radio buttons tabindex 1, which I don't think would be particularly helpful.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-19T10:07:43.000-0400",
      "body": "I was looking at this the other day. If you go to this site (<http://www.echoecho.com/htmlforms10.htm>), tabbing between the sets of radio buttons works as expected (moving to the selected one in each field). The difference is that focus is placed on the radio button, and not the text.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:06:10.597-0400",
      "body": "The UIO dialog has been redesigned and no longer has radio buttons.\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

When tabbing between radio buttons sets, an unchecked radio button will be selected if it is the first button in the set.&#x20;

After a button in a set is checked, when tabbing between radio button sets, the selected radio button in a set will be jumped to.&#x20;

        