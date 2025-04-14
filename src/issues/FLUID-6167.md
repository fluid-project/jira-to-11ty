---json
{
  "title": "FLUID-6167",
  "summary": "Provide a way to override a container line-height so line-height adjuster can work on it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2017-07-07T11:44:03.282-0400",
  "updated": "2024-07-24T12:13:32.573-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4491/",
      "key": "FLUID-4491",
      "summary": "Line spacing doesn't affect elements that have a line-height style set"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2017-07-07T11:51:01.598-0400",
      "body": "A possible solution would be use a class to identify elements to apply line-height adjustments to. For example a tagline has a default line-height which gets adjusted via a selector.\n\n\\<body>\\\n\\<p class=\"flc-uio-line-height-adjust tagline\">\\\n     Foo\\\n\\</p>\\\n\\</body>\n\n.tagline {\\\n     line-height: 1.3rem;\\\n}\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2018-11-29T14:25:20.219-0500",
      "body": "Another approach is to inject a line-height class to the \\<body> element for the appropriate line-height scale to apply, and the integrator can specify custom CSS rules against that injected class.\n\n**Example HTML**\n\n\\<body class=\"fl-line-height-15\">\n\n\\<p class=\"some-text\">\n\nFoo\\<br/>\n\nBar\n\n\\</p>\n\n\\</body>\n\n \n\n**Example CSS**\n\n.some-text\n\n{ line-height: 1.2rem; }\n\n.fl-line-height-11 .some-text\n\n{ line-height: 1.2rem; /\\* Override UIO and keep line spacing at 1.2 \\*/ }\n\n.fl-line-height-15 .some-text\n\n{ line-height: 1.5rem; }\n"
    },
    {
      "author": "Sean F @ opin",
      "date": "2020-12-15T21:26:55.898-0500",
      "body": "I posted a quick way to get this working on the other issue: <https://issues.fluidproject.org/browse/FLUID-6167>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-24T12:13:32.372-0400",
      "body": "A css custom property, `--fl-lineSpace` was added as part of the work for FLUID-6260\n"
    }
  ]
}
---
UI Options currently has a limitation where the line-height for the line-height adjuster is injected inline to the body element. The problem is that this line-height can be overriden by line-height specified by CSS on elements in the document.

There should be a way to identify elements to apply line-height adjustments to.

        