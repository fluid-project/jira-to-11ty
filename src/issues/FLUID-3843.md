---json
{
  "title": "FLUID-3843",
  "summary": "Browse files/Add more button in HTML5 uploader is inconsistent across browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "James Yoon",
  "date": "2010-11-16T17:03:07.832-0500",
  "updated": "2014-03-03T13:40:36.796-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3843/FLUID-3843_patch_2.txt",
      "filename": "FLUID-3843_patch_2.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3843/FLUID-3843_patch.txt",
      "filename": "FLUID-3843_patch.txt"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-11-16T17:05:20.716-0500",
      "body": "FLUID-3843\\_patch.txt: patch for style sheet.\n\nThis style sheet allows for the following solution to be applied:\\\n1\\. Create a fake \"Browse files\"/\"Add more\" button\\\n2\\. Make the real button invisible\\\n3\\. Put the real, invisible button on top of the fake button\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-16T17:08:38.150-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-16T21:51:58.106-0500",
      "body": "Browse files button now consistent with SWF Uploader and all browsers.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-11-17T09:49:49.903-0500",
      "body": "Markup ended up reversing the text and input tag within the anchor, which affected positioning of the button\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-11-17T09:50:35.369-0500",
      "body": "FLUID-3843\\_patch\\_2.txt: adjustments so that the real, invisible button is properly placed on top of the fake button.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-17T10:26:26.809-0500",
      "body": "Added missing style to 'Add more' button\n"
    }
  ]
}
---

        