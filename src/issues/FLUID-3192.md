---json
{
  "title": "FLUID-3192",
  "summary": "Check licenses and copyrights",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-09-22T09:30:43.000-0400",
  "updated": "2011-01-13T16:54:18.978-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3192/FLUID-3192_all_again.txt",
      "filename": "FLUID-3192_all_again.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3192/FLUID-3192_components.txt",
      "filename": "FLUID-3192_components.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3192/FLUID-3192_date_changes.txt",
      "filename": "FLUID-3192_date_changes.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3192/FLUID-3192_framework.txt",
      "filename": "FLUID-3192_framework.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3192/FLUID-3192_integration_demos.txt",
      "filename": "FLUID-3192_integration_demos.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3192/FLUID-3192_standalone_demos.txt",
      "filename": "FLUID-3192_standalone_demos.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3192/FLUID-3192_tests.txt",
      "filename": "FLUID-3192_tests.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T09:41:12.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-28T15:37:35.000-0400",
      "body": "This patch changes the copyrights to reflect commits in the component directory of Infusion. I would like someone's opinion on these, since it seems to me that almost every js file copyright was altered. Could we really have gotten so many of these wrong or am I just being over enthusiastic.\n\nMy process.\\\n1\\) Open file and do svn history -> expand history to include all -> sort history by checkin name.\\\n2\\) look for checkins by antranig (if none, remove cambridge)\\\n3\\) look for checkins by eli (if none, remove california) - I did not see checkins from anyone else in california who's email I recognized.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-29T16:57:04.000-0400",
      "body": "This patch fixes the copyrights in the infusion framework files.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-30T12:53:52.000-0400",
      "body": "To add to this, we should check that the dates on the copyrights are appropriate (start date should not be before creation date).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-02T13:58:45.000-0400",
      "body": "I've code reviewed and committed the following patches.\n\nText File  FLUID-3192\\_integration\\_demos.txt \\\nText File FLUID-3192\\_standalone\\_demos.txt \\\nText File FLUID-3192\\_tests.txt&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-02T17:11:56.000-0400",
      "body": "This patch file changes copyright dates for all of infusion except for the demos directory. I'm not sure if the history of some of these files is entirely accurate.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-05T11:23:23.000-0400",
      "body": "I have checked the third party licenses in Infusion. They all seem to be ok.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-05T15:23:15.000-0400",
      "body": "rev. 8234  has been revied and looks good.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-05T16:33:23.000-0400",
      "body": "I've just added the patch called \"all\\_again\" which reviews the copyrights for the entire infusion (except for the demo's directory) and corrects both date and attributions in the js files.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-05T17:24:00.000-0400",
      "body": "Just reviewed Laurel's latest patch and committed it. All patches and committs have been code reviewed and tested.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-14T16:13:24.000-0400",
      "body": "reopenned for engage\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-15T09:56:45.000-0400",
      "body": "Yura and I did a pass through of the Engage and Kettle space, updating the copyrights and adding in license text files where needed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-16T12:59:46.000-0400",
      "body": "Have to update the dates in the new licence files for engage and kettle\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-16T18:46:50.000-0400",
      "body": "I've updated the last few license files with the correct information and reviewed the existing changes in Engage. We're good to go.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:10.387-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Ensure all javascript files have a license and copyright. Also make sure thirdparty code is compatibly licensed and a license file is included in the same directory as the code.

        