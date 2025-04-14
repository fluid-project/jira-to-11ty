---json
{
  "title": "FLUID-4514",
  "summary": "Link to the builder, on the builder is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-10-11T10:52:49.208-0400",
  "updated": "2014-03-03T11:20:13.742-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2012-08-13T15:53:05.618-0400",
      "body": "I have issued a fix for this along with a pull request for <https://fluidproject.atlassian.net/browse/FLUID-4755#icft=FLUID-4755>:\n\n<https://github.com/fluid-project/builder/pull/2>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-08-14T13:11:50.546-0400",
      "body": "Merged into the project repo at 09a8eec47abbcdb73ed4c54452604bf87bcbef9d\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-07T14:30:51.814-0400",
      "body": "If this was fixed, it hasn't been deployed. The link is currently wrong: it references <http://infusion-builder.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-07T14:34:47.623-0400",
      "body": "I notice, also, that the link at the end of the introductory text, which is supposed to be going to the \"Creating a Fluid Custom Build\" page on the wiki, is incorrectly pointing to the builder site itself. It should probably be referencing \\\n<http://wiki.fluidproject.org/display/fluid/Custom+Infusion+Builds+With+Ant>\\\n(and should probably be re-named to match the actual wiki page name).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-06-10T09:10:49.425-0400",
      "body": "It is fixed in the nightly. <http://build.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-10T10:24:37.668-0400",
      "body": "What is the process for ensuring that the updated Builder code is deployed to the builder site? It's the Builder site that's linked to from the fluidproject site, etc. We should try to keep it up-to-date.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-09-18T14:35:26.476-0400",
      "body": "The link on the main builder site is still broken. I don't think we should consider this closed until it's actually fixed.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-11-12T16:47:22.425-0500",
      "body": "I just noticed that on both the 'latest release' builder site and the nightly builder site, the link in the preamble text to the \"Creating a Fluid Custom Build\" site is also wrong: it links to the current page. It should link to <http://wiki.fluidproject.org/display/fluid/Custom+Infusion+Builds+With+Ant>\n\nAnd actually, I wonder if we should move that 'custom builds' page to the Infusion docs...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.739-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the Infusion Builder\
<http://builder.fluidproject.org/>

2\) Activate the link on the "Fluid Infusion Builder" heading.\
Notice that it's a broken link

        