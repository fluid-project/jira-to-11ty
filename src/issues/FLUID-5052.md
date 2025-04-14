---json
{
  "title": "FLUID-5052",
  "summary": "UIO Integrators shouldn't have to edit Infusion's copy of the iFrame html to reference MyInfusion.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-06-13T13:20:16.603-0400",
  "updated": "2024-07-22T14:42:35.115-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4394/",
      "key": "FLUID-4394",
      "summary": "Separated Panel UI Options' iFrame HTML page (SeparatedPanelFrame.html) doesn't play nice with a concatenated build of Infusion"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5066/",
      "key": "FLUID-5066"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-13T13:38:18.648-0400",
      "body": "This issue is very closely related to <https://fluidproject.atlassian.net/browse/FLUID-4394#icft=FLUID-4394>, but I wonder about use cases where the integrator's path to MyInfusion.js might not be what an automatic head rewrite script would assume. We might still want to consider allowing integrators to override the file path altogether.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:42:13.240-0400",
      "body": "iframew was remove with work on FLUID-6749\n"
    }
  ]
}
---
Currently, integrators of UIO (such as the VideoPlayer) usually have to edit the header of the iFrame HTML to remove the references to the individual JS files and replace it with a reference to the MyInfusion.js file.

The re-writing is not necessarily unreasonable, but our current practice is to actually re-write the copy that lives in the integration's lib/infusion folder.

A better approach would be to copy the file, edit the copy, and tell UIO where to find the edited copy through a demands block, the same way the VideoPlayer adds panels currently. This is technically possible right now, but the integrator needs to know about the "iFrameRenderer", which seems unreasonable. Can we make it a little bit easier for the integrator?

        