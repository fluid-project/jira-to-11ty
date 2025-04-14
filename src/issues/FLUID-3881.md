---json
{
  "title": "FLUID-3881",
  "summary": "Comment any \"unsupported\" functions/variables/etc.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-07T15:32:22.064-0500",
  "updated": "2011-01-14T10:54:42.220-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3881/FLUID-3881-Reorderer.patch",
      "filename": "FLUID-3881-Reorderer.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-07T15:38:02.872-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T13:17:58.428-0500",
      "body": "Antranig reviewed a list of new framework and renderer functions, and identified the public vs unsupported ones. I've modified the comments in the code accordingly.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-15T17:02:32.866-0500",
      "body": "Attached is a patch which comments unsupported functions in webapp/components/reorderer\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-16T09:40:57.226-0500",
      "body": "I've reviewed and committed Antrantig's Reorderer patch.\n"
    }
  ]
}
---
Anything in our code that is "unsupported" (i.e. not meant for public use despite the fact that technically it is public) needs to be indicated as such in the comments in the code. This covers

a) public free functions i.e. functions in the public namespace, such as fluid.inlineEdit.foo()\
b) methods and instance variables on an object returned by a creator function\
c) options defined in a defaults block or otherwise processed in the code but not for public use\
d) return values

Please a comment in the code mentioning that the method/function/option/argument/return value is unsupported, and perhaps an explanation of why.

Anything unsupported will not be publicly documented.

        