---json
{
  "title": "FLUID-3494",
  "summary": "FastXmlPull parser is not threadsafe, through use of global Regexp objects",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2010-02-09T19:56:54.000-0500",
  "updated": "2010-12-13T15:23:48.450-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2962/",
      "key": "FLUID-2962"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3494/FLUID-3494.patch",
      "filename": "FLUID-3494.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-10-20T11:46:01.446-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-25T02:59:44.447-0400",
      "body": "Attached as a patch so this may be applied (opportunistically) to earlier versions of Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-25T03:12:50.839-0400",
      "body": "Resolved at revision 10155\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-10-29T13:35:36.579-0400",
      "body": "The only issue I see with this is the lack of tests for fastXmlPull. In talking with Antranig, we have determined that the renderer tests also cover fastXmlPull. Writing tests for fastXmlPull in its current state will be difficult and result in tests that are difficult to maintain. At some point we will want to clean it up, tighten up the API and write some tests for fastXmlPull.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-02T16:10:12.970-0400",
      "body": "I found one tiny problem: On line 296, the reference to attrStartRegex should be that.attrStartRegex.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-03T09:17:54.924-0400",
      "body": "the unit tests are also failing in ie8 related to attrStartRegex\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-04T04:23:29.162-0400",
      "body": "Thanks for catching this, folks - committing this correction at 10177 allows IE tests to run again.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-13T15:23:48.442-0500",
      "body": "This was reviewed and tested.\n"
    }
  ]
}
---
Note further with reference to comment on <https://fluidproject.atlassian.net/browse/FLUID-3224#icft=FLUID-3224> - the fastXmlPull parser as it stands is not threadsafe - the RegExp objects that it uses have a static lifetime and will become corrupt on concurrent access. This is a critical issue wrt. Fluid Engage since with the renderer being deployed on the serverside, if more than one thread attempts to load a template concurrently, the resulting structure will become corrupt.

Since original filing, this issue has been found to be related to a critical issue on the client-side. As a result of not adhering to Fluid standards for namespacing and versioning, this module will cause a failure in a page where it is included multiply, through lack of proper registration of the members of the "XMLP" structure and its priority has been increased.

        