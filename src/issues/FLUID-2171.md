---json
{
  "title": "FLUID-2171",
  "summary": "Reordering portlets containing Google components throws an error: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-01-28T12:30:27.000-0500",
  "updated": "2014-03-03T14:45:02.186-0500",
  "versions": [
    "0.7",
    "0.8",
    "0.8.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2171/fluid-2171.patch",
      "filename": "fluid-2171.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-05T12:40:51.000-0500",
      "body": "The example I have doesn't seem to work with the newer versions of Infusion, probably because of the api changes that were made at 1.0.\n\nHere is some further exploration information.\n\n1\\) The error seems to happen on the creation of the avatar\n\n2\\) There are script tags within the reorderable element (portlet)\\\n– if the script tags are located outside of the portlet, it works fine.\n\n3\\) There is a script that gets pulled in from google, it is what is causing the break.\\\nwithin this script is a call to google.loader.writeLoadTag (line 51) which seems to add a script (line 21)&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-06T14:08:08.000-0500",
      "body": "Some further investigation seems to suggest that the google script is being loaded asynchronously and that the load of it is happening as part of a call to clone.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-11-06T14:21:18.000-0500",
      "body": "Please try this patch to see if it resolves the issue. Cheers, Antranig.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-11-10T23:17:47.000-0500",
      "body": "Committing patch after informal reports from Justin suggest it works.\n"
    }
  ]
}
---
Reordering portlets contaning Google components throws an error

Error:  JScript runtime error: 'Google-exportSymbol' is underfined

        