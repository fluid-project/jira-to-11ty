---json
{
  "title": "FLUID-6574",
  "summary": "Tests should be run against distribution files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2020-11-09T11:04:52.906-0500",
  "updated": "2024-07-17T08:14:35.374-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6368/",
      "key": "FLUID-6368",
      "summary": "infusion-all.js throws an error if required from the browser."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-11-09T15:50:51.426-0500",
      "body": "I am not convinced about this one. There are a couple of issues - firstly, the profile of inclusions of each test are fairly specific, and only include a particular subset of framework files under test - e.g. FluidJsTests includes pretty much only Fluid.js which is under test. Secondly there are many different bundles and testing only one of them only increases our coverage a small amount. Note that there are already \"bundle tests\" at <https://github.com/fluid-project/infusion/tree/main/tests/bundle-tests> which ensure that at least all the different bundles are at least syntactically correct. I would prefer that the individual test suites remain the way they currently are in main, and that instead we make some efforts to beef up the \"bundle tests\" - perhaps by running some moderately demanding test suite such as FluidIoCTests.js against all of them. It would probably be overkill to try to run a complete test suite against each bundle.\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-11-09T16:16:58.191-0500",
      "body": "Antranig Basman For context, this was a response to concerns Justin Obara raised about the need to run unminified builds through terser with `output.beautify` set to `true` in <https://fluidproject.atlassian.net/browse/FLUID-6573#icft=FLUID-6573>, which would minify and then beautify the resulting distribution file instead of creating a \"pure\" concatenated build. He felt that this could cause build issues that we currently have no way of testing and after some discussion it seemed that running tests against the build would be a good way of verifying that the distribution of Infusion works as expected as opposed to testing against a set of source files. I don't think that the minification/beautification process is likely to cause problems, so if changing the tests in this way isn't necessary we can close this JIRA and the accompanying pull request.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-11-09T16:34:11.295-0500",
      "body": "Ned Zimmerman - I agree it might be a good idea to have some means of testing builds - so if that was a concern perhaps it might be a good idea to beef up the existing \"bundle tests\" in some way. So far the issues with builds that Tony Atkins \\[RtF] ran into were blatant ones which caused the build to simply be syntactically invalid, which is why he wrote the bundle tests in the form he did. If we aren't too worried about additional kinds of failures than that perhaps it's indeed best to close the JIRA and pull, but in the meantime I'll add a link between this issue and the original bundle tests issue <https://fluidproject.atlassian.net/browse/FLUID-6368#icft=FLUID-6368>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-12-01T12:01:45.680-0500",
      "body": "This was auto-closed when PR <https://github.com/fluid-project/infusion/pull/1034> was merged.\n"
    }
  ]
}
---
Currently, each test loads component and framework source files. This means that the built versions of Infusion are not tested. Test files should be updated to use the `infusion-all.js` distribution version of the library to ensure that the published package passes tests.

        