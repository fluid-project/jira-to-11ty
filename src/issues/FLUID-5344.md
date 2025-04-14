---json
{
  "title": "FLUID-5344",
  "summary": "HTML5UploaderSupport tests are failing in IE with a message that FormData isn't supported",
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
  "date": "2014-04-30T09:10:29.053-0400",
  "updated": "2014-05-02T10:02:12.307-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 8, IE 9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-30T12:37:02.424-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/504>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-01T11:55:28.737-0400",
      "body": "Merged into the project repo @ 048de07fcc45c81e314a53bb682bb812ec940458\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-02T09:05:35.686-0400",
      "body": "The test still appears to fail in IE 8 when running allTests.html because no test are run at all.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-02T09:34:14.761-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/508>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-02T10:02:10.561-0400",
      "body": "Merged into the project repo @ 5c8d6165789536c72502863211c0a3331249276c\n"
    }
  ]
}
---
The following tests are failing.

Ensure event sequence for fileSuccessHandler\
Ensure event sequence for fileErrorHandler\
Ensure event sequence for fileStopHandler

With the messages:

Assertion failure (see console.log for expanded message): Error instantiating HTML5 Uploader - browser does not support FormData feature. Please try version 1.4 or earlier of Uploader which has Firefox 3.x support)

Died on test #2 undefined: Object doesn't support this property or method

        