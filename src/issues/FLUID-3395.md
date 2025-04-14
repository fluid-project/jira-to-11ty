---json
{
  "title": "FLUID-3395",
  "summary": "Improve Builder's error handling by providing polite error messages to the user from the PHP",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Colin Clark",
  "date": "2009-12-01T18:39:45.000-0500",
  "updated": "2014-03-03T11:20:11.573-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-02T14:32:30.000-0500",
      "body": "Clarified this issue with Colin. A 400 error is being returned for all errors. It would be better if the error string was logged and a single polite error was shown to users. \"I'm sorry.....etc\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:11.558-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
At the moment, it looks like we're returning a standard 200 "OK" response in cases where we've actually thrown an error in the PHP code. Let's improve the robustness of the implementation by returning the correct status codes when errors occur, and then, for user-facing requests show a polite error message.

        