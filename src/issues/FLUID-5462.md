---json
{
  "title": "FLUID-5462",
  "summary": "Generate Infusion Framework API docs from the source code using infusion-tags",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Simon Bates",
  "date": "2014-07-07T15:10:23.727-0400",
  "updated": "2024-07-31T14:10:28.416-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5329/",
      "key": "FLUID-5329",
      "summary": "Update the Framework API function source code comments"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5791/",
      "key": "FLUID-5791"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-09-18T15:30:00.034-0400",
      "body": "Apparently, Steve has updated the source code for infusion-tags. We should revisit the tool and make a final decision on whether or not to use it.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-10-13T16:31:06.433-0400",
      "body": "I had a look at the tool and from where I am this evening, it looks like it will be too much work to adapt it to produce what we want. We would like i) for it to produce markdown, not HTML, and also it currently makes no attempt to parse our JavaDoc-inspired doc comments. This area of our API is extremely stable and it shouldn't be too much overhead to keep some manually generated pages in sync, as well as this allowing for more human curating of the content with some commentary and grouping of related APIs etc.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-12-10T11:10:57.880-0500",
      "body": "@@Antranig Basman Given the changes made to the docs for <https://fluidproject.atlassian.net/browse/FLUID-5791#icft=FLUID-5791>, do you thing we should close this issue (and FLUID=5329) as \"won't do\"?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T14:10:17.543-0400",
      "body": "There hasn’t been much traction on this for a while and our doc site runs independently at the moment. If we want to switch back to something automated we may want to do it from the docs site side and use 11ty to generate the docs from an infusion build.\n"
    }
  ]
}
---
Generate documentation for the Infusion Framework API functions from the source code using infusion-tags. And integrate the output into the DocPad HTML docs generation.

        