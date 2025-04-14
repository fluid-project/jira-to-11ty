---json
{
  "title": "FLUID-6338",
  "summary": "Infusion can't be installed as an NPM dependency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-09-10T14:00:42.272-0400",
  "updated": "2024-07-22T08:52:49.644-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
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
      "date": "2018-09-10T14:14:30.852-0400",
      "body": "Looking at the NPM scripts ( <https://docs.npmjs.com/misc/scripts> ). I think we could fix this by moving the buildStylus to \"prepare\". This would mean that buildStylus is run twice on publish. It is needed in the prepublishOnly script too so that the stylus files are regenerated in the development directory after publishing; they are removed as part of the buildDist task.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-09-13T10:56:43.484-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/931) has been merged into the project repo master branch at 4a66b154e7728fe09d012cb2327b2d4d23eb5d35\n"
    }
  ]
}
---
When trying to install infusion through NPM as a dependency in another project, the install fails because the call to "grunt buildStylus" is missing dependencies. These are all installed for infusion as dev dependencies.

The change originated from the FLUID-6309 PR ( <https://github.com/fluid-project/infusion/pull/916> ) and may be needed to CI.

        