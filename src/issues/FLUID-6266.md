---json
{
  "title": "FLUID-6266",
  "summary": "CI builds Infusion 2x and runs `npm install` 3x",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-28T10:22:30.583-0400",
  "updated": "2018-04-12T08:12:49.868-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-03-28T10:24:50.471-0400",
      "body": "Reducing the needless steps seems completely reasonable to me, +1.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-28T16:39:09.985-0400",
      "body": "Alan Harnum thanks! Could you review my PR when you have some free time? I did a few more changes to it that are detailed in the PR's comments.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-04-12T08:12:49.864-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/896> ) into the project repo at 0144ae46b193478a3d7068ff164bba3c1701d23e\n"
    }
  ]
}
---
The CI pipeline for Infusion has not evolved over time to adapt for changes in the build process and other dependencies. As such, it's building Infusion 2 times inside the VM and running \`npm install\` 3 times – on \`vagrant up\` (see provisioning/vars.yml where grunt is called), immediately after that outside the VM and final time inside the VM once more.

According to [provisioning/vars.yml](https://github.com/fluid-project/infusion/blob/master/provisioning/vars.yml), simply running \`vagrant up\` should:

* setup VM
* install node/npm
* npm install
* grunt (builds infusion)

From that point on, it's just a matter of running the tests with \`npm run test:vagrant\`

        