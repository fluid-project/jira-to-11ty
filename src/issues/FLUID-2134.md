---json
{
  "title": "FLUID-2134",
  "summary": "Errors occur in some browsers when using Fluid-all.js in documents without the character encoding specified",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2009-01-16T00:07:38.000-0500",
  "updated": "2009-01-16T09:37:13.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-16T09:31:00.000-0500",
      "body": "In firebug in FF3 the error displayed as follows\n\nError: illegal character\\\nline: 4684\\\nfile: fluid-all.js\n\nThat line appears like this:\\\nï»¿/\\*\n\nThe illegal character \" ï»¿ \" being directly in front of the comment&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-16T09:36:49.000-0500",
      "body": "Fixed at revision r6308.\n\nHad to use MS Word to view the file with the hidden characters visible. I deleted the problem character from ui.core.js, saved, and everthing seemed to work after that.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-01-16T09:37:13.000-0500",
      "body": "Note that the ui.core.js file works fine when used on its own even in documents that don't specify a character encoding. The problem is only visible when using the concatenated Fluid-all file.\n"
    }
  ]
}
---
In some browsers, use of the concatenated Fluid-all.js file causes erros with HTML documents that don't declare a character coding. We've traced this to a stray UTF-8 character in jQuery UI 1.5.3's ui.core.js file.

        