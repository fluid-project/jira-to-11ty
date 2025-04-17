---json
{
  "title": "FLUID-5581",
  "summary": "Typos in some examples of the documentation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Javier Hernández",
  "date": "2014-12-11T11:59:36.736-0500",
  "updated": "2014-12-12T12:04:43.291-0500",
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
      "author": "Javier Hernández",
      "date": "2014-12-11T12:11:42.080-0500",
      "body": "<https://github.com/fluid-project/infusion-docs/pull/38>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-12-12T10:40:16.471-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion-docs/pull/38> ) into the infusion-docs repo at d79cbce96e4e770aaeff093eb881379e9de0ad0e\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-12-12T10:40:44.394-0500",
      "body": "Javier Hernández thanks for the fix.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-12-12T11:50:59.825-0500",
      "body": "Just noticed that one of the changes was incorrect.&#x20;\n\nmodelListeners: {\\\nconvertedAmount: {\\\nfuncName: \"{that}.events.conversionUpdated.fire\",\\\nargs: \"{change}.value\"\\\n}\\\n}\n\nshould actually  be\n\nmodelListeners: {\\\nconvertedAmount: {\\\nfun: \"{that}.events.conversionUpdated.fire\",\\\nargs: \"{change}.value\"\\\n}\\\n}\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-12-12T11:54:47.337-0500",
      "body": "Added an new pull request to revert the change that was made in error.\n\n<https://github.com/fluid-project/infusion-docs/pull/39>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-12-12T12:04:43.273-0500",
      "body": "Merged the new pull request into the project repo @ 6e7a7b957270ccd27a80d76ca8b1ceeccbd66f6d\n"
    }
  ]
}
---
I found a few typos in some examples of the documentation, will issue a pull request with them

        