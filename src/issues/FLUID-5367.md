---json
{
  "title": "FLUID-5367",
  "summary": "Update infusion Demo urls on build site",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-05-12T09:28:57.251-0400",
  "updated": "2014-05-13T09:05:22.384-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos",
    "Infrastructure",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-12T09:34:55.814-0400",
      "body": "Submitted a pull request: \\\n<https://github.com/fluid-project/build.fluidproject.org/pull/10>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-05-12T15:41:53.683-0400",
      "body": "Merged into project repo at 16ab567e7bb03a188ca404e3d134107964cbef64\n"
    }
  ]
}
---
The URLS to the Infusion demos on the build site briefly required "src" in the path. Now that we are deploying the built version this can be removed.

e.g.

<http://build.fluidproject.org/infusion/src/demos/prefsFramework/>

can now be&#x20;

<http://build.fluidproject.org/infusion/demos/prefsFramework/>

        