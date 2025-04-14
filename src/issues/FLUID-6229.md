---json
{
  "title": "FLUID-6229",
  "summary": "Add markdown linting rules to enforce line length and fix linting errors.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-11-24T08:55:52.029-0500",
  "updated": "2024-07-22T10:35:01.014-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-24T08:59:29.723-0500",
      "body": "So, in working through the tremendous volume of failing lines, I discovered a lot of other problems, which are included in the branch I created here.  For example:\n\n1. Missing closing tags in HTML table content.\n2. Missing tbody tags in HTML table content.\n3. inline fenced-code blocks (triple backticks) better expressed using single backticks.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-02-08T03:53:40.993-0500",
      "body": "This was merged ages ago and appears to have been resurrected by some automated activity.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-02-08T04:03:05.130-0500",
      "body": "Turns out I was confusing this with <https://fluidproject.atlassian.net/browse/FLUID-6224#icft=FLUID-6224>, I still need to submit these changes.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-02-08T04:04:07.263-0500",
      "body": "<https://github.com/fluid-project/infusion-docs/pull/132>\n"
    }
  ]
}
---
In recent work on the infusion docs repo, I have been carefully reviewing various pages.  There is a fair amount of content where entire paragraphs are placed on a single line.  This makes it easy to miss changes in context.  I can see many examples where editors have obviously attempted to break down content into lines of a reasonable length, such as breaking up a long bullet point into two lines.  We seem to have a mixture of content with no line length constraints, some with 80 characters, and some with 120.

I propose enabling the markdown-lint rule to enforce a line length, and cleaning up anything fails the lint check.  As a starting point, I would propose 120 characters, which is not too long, but which is friendlier to longer markdown blocks such as links.

        