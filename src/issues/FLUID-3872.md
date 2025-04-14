---json
{
  "title": "FLUID-3872",
  "summary": "Implement a new system for the progressive enhancement of Uploader using IoC",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2010-12-02T16:21:33.944-0500",
  "updated": "2014-03-03T13:40:05.307-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-03T08:45:28.273-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-11T16:57:35.688-0500",
      "body": "This issue was resolved at r10391 with the addition of unit tests for the fluid.progressiveChecker framework utility. The unit tests have been reviewed by Michelle, but the overall implementation could do with a last check-over.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-13T18:10:42.162-0500",
      "body": "Unit tests weren't committed at r10391 as stated. They need to be committed before freezing 1.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-13T18:12:39.006-0500",
      "body": "Unit tests actually committed at r10407.\n"
    }
  ]
}
---
When we introduced the HTML 5 version of the Uploader and IoC-ified its architecture, we temporarily disabled Uploader's progressive enhancement features. We would also like to deprecate the specialized progressivelyEnhanceableUploader() creator function, instead providing seamless progressive enhancement for all users via the IoC system.

In light of these changes, we should re-implement progressive enhancement so that we can degrade from HTML 5 to Flash to single file upload based on the capabilities of the user's browser and (optionally) specific overrides by the implementer.

        