---json
{
  "title": "FLUID-2483",
  "summary": "uPortal skinning sample shows black lines around every control in IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T15:09:13.000-0400",
  "updated": "2011-01-06T14:58:54.444-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "FSS"
  ],
  "environment": "IE6\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2483/uPortal-fss-ie6.png",
      "filename": "uPortal-fss-ie6.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-06T08:43:40.000-0400",
      "body": "may have been fixed\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-06T10:58:35.000-0400",
      "body": "To reproduce this issue - \\\ni) open the uPortal layour reorderer demo at <http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html#>\\\nii) click on the \"Mist\" skin\\\nThe black lines will appear in IE6.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T14:58:03.367-0500",
      "body": "Tested in WinXP with IE6. Bug no longer present.\n"
    }
  ]
}
---
See attached image. The lines are not present in other browsers.

        