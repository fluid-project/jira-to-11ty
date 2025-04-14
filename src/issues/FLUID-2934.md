---json
{
  "title": "FLUID-2934",
  "summary": "Requesting a blank page via fluid.fetchResources triggers an infinite http request loop",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Jen Bourey",
  "date": "2009-06-09T13:31:59.000-0400",
  "updated": "2009-08-07T09:38:11.000-0400",
  "versions": [
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-06-12T19:41:18.000-0400",
      "body": "Fixed at revision 7350\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-28T14:46:46.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-04T16:46:22.000-0400",
      "body": "Backported to 1.1.x branch at revision 7708\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-06T16:05:47.000-0400",
      "body": "backport appears identical to the trunk version\n"
    }
  ]
}
---
Requesting a page which returns an HTML code of "200 OK" with no content causes the fluid.fetchResources method to repeatedly request the blank page for what appears to be an infinite number of attempts.  To replicate this problem, create a blank file (perhaps via "touch foo.html"), then execute the following code:

var resources = {\
testPage: { href: 'foo.html' }\
};\
fluid.fetchResources(resources, function(){ console.log('function called'); });

        