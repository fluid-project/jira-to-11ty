---json
{
  "title": "FLUID-4915",
  "summary": "fluid.invokeGlobalFunction breaks in IE8 if args are undefined",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-02-06T12:09:56.725-0500",
  "updated": "2013-02-12T11:54:06.499-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": "IE 8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-02-12T11:54:06.430-0500",
      "body": "Merged into the project repo at 0e2814890cadfedc4d9bff72896f1a2cb5775f92\n"
    }
  ]
}
---
It seems that calls to apply require a valid object.\
<http://msdn.microsoft.com/en-us/library/ie/4zc42wh1(v=vs.94).aspx>

we can work around the issue by setting a default to an empty \[] when args are falsey.

        