---json
{
  "title": "FLUID-3410",
  "summary": "create Infusion Builder shell script to run deploy script",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Laurel Williams",
  "date": "2009-12-04T11:14:03.000-0500",
  "updated": "2009-12-09T11:51:28.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure",
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3410/deploy-infusion-builder.sh",
      "filename": "deploy-infusion-builder.sh"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3410/deploy-infusion-builder-ii.txt",
      "filename": "deploy-infusion-builder-ii.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3410/deploy-infusion-builder-iii.sh",
      "filename": "deploy-infusion-builder-iii.sh"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-12-04T18:06:23.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-04T18:19:21.000-0500",
      "body": "I whipped up a quick shell script and tested it on the Builder. It may not be 100% awesome, but it seems to do the trick quite nicely.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-04T18:20:07.000-0500",
      "body": "Laurel, can you review this and if you like it, I'll commit to the infrastructure space of SVN and close the issue.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T09:59:44.000-0500",
      "body": "Just read the script over and also ran it in place on the webserver. It works like a charm, but as you said it isn't 100% awesome yet.\\\nDefinitely needs some error checking. Also I would move the prompts to the start of the script, so the user can type those in and then forget about the script as it completes it's work.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-08T17:52:03.000-0500",
      "body": "Here's a revised script that takes into account:\n\n1\\) New path changes to infusionBuilder\\\n2\\) Laurel's suggestion of prompting for user name and password before running the rest of the deploy process\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-09T09:04:40.000-0500",
      "body": "I've revised the script one more time. I think calling the svn export directory infusionBuilder may be confusing, since there is already another /docs/infusionBuilder directory. Not a huge deal. Both ii and iii versions work fine - I tested them.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-09T11:51:28.000-0500",
      "body": "I've committed the version ii to the infrastructure section of SVN at r8838. Here's the URL:\n\n<http://source.fluidproject.org/svn/fluid/infrastructure/infusionBuilder-server-deploy/trunk/deployInfusionBuilder.sh>\n"
    }
  ]
}
---
Infusion builder deploy steps are here: <http://wiki.fluidproject.org/display/fluid/Deploying+the+Infusion+Builder>\
Create a script to take care of most of the steps in the deploy. Store script in Infrastructure directory of SVN

        