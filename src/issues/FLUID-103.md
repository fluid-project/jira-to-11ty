---json
{
  "title": "FLUID-103",
  "summary": "Remove the Fluid branch of the Gallery and switch over to using the version in UCB's contrib space.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2007-11-06T18:07:28.000-0500",
  "updated": "2007-11-09T12:19:15.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-11-07T15:02:55.000-0500",
      "body": "All references to the gallery source code on the Fluid wiki have now been updated to refer to the UCB space. If you spot any that I've missed, let me know.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-09T12:18:30.000-0500",
      "body": "Anastasia and I did the following tasks to resolve this issue:\n\n1\\. Upgraded the version of Sakai running against the daily build to the pre-2.5 trunk as of November 8, 2007.\\\n2\\. Fixed the evil hardcoded ModJK mount path to handle the new name for the gallery.\\\n3\\. Updated the Maven dependencies to reflect the new image-gallery artifact name\\\n4\\. Changed all daily build externals to point to UCB contrib space.\\\n5\\. Removed the branch of the gallery from utoronto/fluid in contrib.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-09T12:19:15.000-0500",
      "body": "New daily build process is tested and works.\n"
    }
  ]
}
---
Now that UCB has taken back active development of the Image Gallery tool, we should delete our copy of it located at:

<https://source.sakaiproject.org/contrib//utoronto/fluid/gallery/>

Along with this, we should update our daily build process to build the UCB version instead.

        