---json
{
  "title": "FLUID-2100",
  "summary": "Tool tip should be on by default",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Daphne Ogle",
  "date": "2009-01-08T13:53:35.000-0500",
  "updated": "2010-08-11T13:53:15.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2beta1",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2100/FLUID-2100.patch.txt",
      "filename": "FLUID-2100.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:15:32.919-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-08-06T15:25:19.569-0400",
      "body": "1\\. set the default value of \"useTooltip\" to \"true\", from \"false\";\\\n2\\. add test case to check the default value of \"useTooltip\" is true.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-08-10T18:56:34.941-0400",
      "body": "I have reviewed Cindy's patch and it looks good. I committed it to Infusion at r9988.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-08-10T18:57:31.577-0400",
      "body": "Justin, can you verify that the fix is indeed in place and close this issue if you're happy with it?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-08-11T13:53:14.997-0400",
      "body": "I tested out the demo, which now displays the tooltip\n"
    }
  ]
}
---
As per our (Eli, Allison & Daphne) discussion, the tool tip should be on by default in the simple text inline edit component.

        