---json
{
  "title": "FLUID-1829",
  "summary": "Additional information needed for screen reader users (Uploader)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Michael Elledge",
  "date": "2008-11-19T20:19:16.000-0500",
  "updated": "2014-07-07T16:15:00.130-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility",
    "Uploader"
  ],
  "environment": "Firefox 3 and JAWS 9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-11-22T12:20:45.000-0500",
      "body": "The latest version of the template for Uploader 2 contains summaries for the tables. Take a look at it here and let me know if you think it is sufficient:\n\n<https://source.fluidproject.org/svn/fluid/components/trunk/src/webapp/fluid-components/html/templates/Uploader2.html>\n\nAs for the virtual cursor question, what do you think the message should say?\n\nAlso, given that screen readers are starting to interpret the \"application\" ARIA role as a cue to automatically switch off virtual cursor, do you think the instruction is still necessary?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:01:27.000-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-15T13:38:20.510-0500",
      "body": "Testing the latest Uploader (i.e. the HTML5 version) with Jaws, having the application mode does NOT cause Jaws to switch into cursor off mode automatically. Users still need to be told to turn the virtual PC cursor off. This was tested using Jaws 10\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-12T16:35:48.400-0500",
      "body": "I just tested this with Jaws 12, using IE8 and FF3.6: Jaws does NOT automatically turn the virtual PC cursor off.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T16:15:00.129-0400",
      "body": "I believe that we determined that users are accustomed to switching between modes on their own. Also, the uploader has more extensive use of aria now to describe the state of the queue and etc.\n"
    }
  ]
}
---
Screen reader users must be told to turn off virtual cursor for component to work. Table should include summary describing content and purpose.

        