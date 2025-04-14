---json
{
  "title": "FLUID-1741",
  "summary": "Renderer doesn't work in all browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2008-10-30T11:35:02.000-0400",
  "updated": "2008-10-31T14:57:06.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "IE6, IE7 or Opera (Windows and Mac)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1741/FLUID-1741.patch",
      "filename": "FLUID-1741.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-10-30T13:49:21.000-0400",
      "body": "This turned out to be quite a simple issue in the end - innerHTML on these other browsers maps nodes to upper case, which was not being compensated for when checking for the list of special \"HTML closed tags\" which are allowed to violate the XHTML spec. A patch is attached, in the hopes this can get in before this release.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-10-30T13:57:17.000-0400",
      "body": "I've tested this first patch. It fixes the problem in Opera (Mac and Windows) but not in IE.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-10-31T14:13:32.000-0400",
      "body": "Fixed at revision 5945\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-10-31T14:57:06.000-0400",
      "body": "I've tested the fix, and it works now: tests pass, and demos work.\n"
    }
  ]
}
---
Currently the Renderer tests and examples do NOT work in the following browsers:\
IE6, IE7 or Opera (neither Windows nor Mac)

They DO work in the following browsers:\
FF2, FF3 and Safari (both Windows and Mac)

        