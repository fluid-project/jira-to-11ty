---json
{
  "title": "DECA-20",
  "summary": "Determine if we will continue to use Python and CherryPy for Decapod server, or switch to Kettle",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2009-10-21T13:44:03.000-0400",
  "updated": "2012-01-10T09:44:20.896-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Boyan Sheytanov",
      "date": "2009-11-09T07:28:51.000-0500",
      "body": "Here's a quick CherryPy vs. Kettle comparison.\n\nAdvantages of Python & CherryPy:\n\n* The core framework is already written and is stable, no needs to change it or to redevelop something.\n* It is fairly straightforward and simple to use.\n* It is well documented.\n* It is powerful enough to suit our needs.\n\nDisadvanatages of Python & CherryPy:\n\n* It is a inconsistent with Fluid projects (written in Python instead of JavaScript).\n* We cannot allocate a lot of resources on it.\n\nAdvantages of Kettle:\n\n* We can share it with other Fluid projects and benefit from it.\n* We can spare more resources working on it.\n* Its design is coordinated with the Fluid project requirements.\n* We can customize it to suit our own needs.\n* It can provide seamless development experience.\n\nDisadvantages of Kettle:\n\n* It's in an early stage of development and still a lot more needs to be done.\n* It is based on JSGI - a technology that needs some study in order to be used efficiently.\n\nThese were extracted after some discussions with Jess, Colin and Michelle. Based on them and considering the overall impact on Fluid projects development, it is decided that a switch to Kettle will be initiated. As a start, the CherryPy server will be used for testing while Kettle interface is being developed.\n"
    },
    {
      "author": "Boyan Sheytanov",
      "date": "2009-11-09T07:30:26.000-0500",
      "body": "This has been resolved with a decision of a switch to Kettle.\n"
    },
    {
      "author": "Boyan Sheytanov",
      "date": "2009-11-30T04:42:19.000-0500",
      "body": "This issue should be marked as closed.\n"
    }
  ]
}
---
At the moment, Decapod server is less than 200 lines of code written in Python using the CherryPy web framework. It is inevitably going to need more work and investment put into it. While Python and CherryPy are both great technologies, we may want to consider using Fluid's Kettle server-side JavaScript environment to provide a simple and seamless development experience when creating RESTful services and even rendering markup.

        