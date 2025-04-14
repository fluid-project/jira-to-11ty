---json
{
  "title": "DECA-111",
  "summary": "Mockserver's relative paths point to the wrong location when called from another module",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-06-01T13:23:51.766-0400",
  "updated": "2012-01-10T09:49:33.637-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-113/",
      "key": "DECA-113",
      "summary": "Decapod's server contains hardcoded paths in a number of places"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-06-09T00:02:48.127-0400",
      "body": "This issue is a specific incarnation of <https://fluidproject.atlassian.net/browse/DECA-113#icft=DECA-113>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:48:20.896-0400",
      "body": "Fixed as part of <https://fluidproject.atlassian.net/browse/DECA-113#icft=DECA-113>\n"
    }
  ]
}
---
Mockserver's relative paths point to the wrong location when called from another module

In trying to create webtest tests, when running mockserver.py from the test module, the relative paths used are relative to the test module instead of mockserver.py.&#x20;

Here is an example of how it could be fixed for the glob function call on line 129\
current\_dir = os.path.abspath(os.path.dirname(\_*file*\_))\
files = glob.glob(current\_dir + "/testData/imageFeed/\*)

        