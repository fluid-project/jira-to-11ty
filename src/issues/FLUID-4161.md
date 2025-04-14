---json
{
  "title": "FLUID-4161",
  "summary": "Copyright comment in js files, still points at SVN",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-03-25T14:59:19.475-0400",
  "updated": "2011-03-25T15:32:40.369-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
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
      "date": "2011-03-25T15:32:25.562-0400",
      "body": "Pushed into the master branch of the Infusion repo at 5e3f25183e02e782fd65a697f8f2c06587a3cd9c\n"
    }
  ]
}
---
The copyright comment in the js files points at SVN for the license file. Unfortunately these links are all broken, now that we are using git.

Here's an example:

"You may obtain a copy of the ECL 2.0 License and BSD License at\
<https://source.fluidproject.org/svn/LICENSE.txt>"

This should be changed to.

"You may obtain a copy of the ECL 2.0 License and BSD License at\
<https://github.com/fluid-project/infusion/raw/master/Infusion-LICENSE.txt>"

        