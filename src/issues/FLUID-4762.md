---json
{
  "title": "FLUID-4762",
  "summary": "Fluid view unit test failing (Dead man's blur test - non-excluded component one, failing test #2)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "James Yoon",
  "date": "2012-08-15T15:24:31.475-0400",
  "updated": "2014-03-03T12:42:07.447-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "IE8/Win7\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4781/",
      "key": "FLUID-4781",
      "summary": "The rich inline edit demo fails in IE8"
    },
    {
      "type": "Dependence",
      "url": "/browse/VP-254/",
      "key": "VP-254"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4781/",
      "key": "FLUID-4781"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4762/Screen Shot 2012-08-15 at 3.23.39 PM.png",
      "filename": "Screen Shot 2012-08-15 at 3.23.39 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2012-08-23T16:31:42.397-0400",
      "body": "With IE8, some dead man's blur unit tests, including the one specified in the title, throw js error: Object doesn't support this property or method.\n\nTo produce,\\\n1\\. In IE8, go to tools -> Internet Options -> Advanced tab -> Browsing section -> Turn on \"Display a notification about every script error\"\\\n2\\. Run <http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidView-test.html>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2012-10-16T13:20:00.335-0400",
      "body": "deadMansBlur() uses Date.now(), which is not supported in IE8. One suggestion is to use\\\nnew Date().value()\\\ninstead.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-12-17T13:31:47.459-0500",
      "body": "Added a pull request ( <https://github.com/fluid-project/infusion/pull/250> ) to fix this. The change is to implement a fall back to use Date().gettime() instead of Date.now() when the latter doesn't exist.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-12-17T13:45:02.298-0500",
      "body": "Merged pull request <https://github.com/fluid-project/infusion/pull/250> into project repo at 725fd98d6cc3ebbe92f378b8c05738b178dc6516\n"
    }
  ]
}
---

        