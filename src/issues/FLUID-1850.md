---json
{
  "title": "FLUID-1850",
  "summary": "Add support for progressive enhancement to the template markup and code.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-11-27T13:20:10.000-0500",
  "updated": "2011-01-19T08:27:11.263-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-12-05T20:34:06.000-0500",
      "body": "Support for progressive enhancement was added through two mechanisms:\n\n1\\. A new JavaScript file called ProgressiveEnhancement.js that you can add to any page. It will hide any elements with a class of \".fl-progressive-enhanceable\" if JavaScript is present. On the other side, fluid.layout.css now hides anything with a class of .fl-progressive-enhancer using CSS.\n\n2\\. A new creator function for Uploader, somewhat awkwardly named progressiveEnhanceableUploader(), which checks for the necessary version of Flash. If it's not present, it unhides the enhanceable. If it is present, it unhides the enhancer.\n"
    }
  ]
}
---

        