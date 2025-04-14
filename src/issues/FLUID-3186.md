---json
{
  "title": "FLUID-3186",
  "summary": "Host fluid things which aren't in Infusion or Engage yet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2009-09-17T11:35:14.000-0400",
  "updated": "2011-02-28T16:45:15.993-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-17T11:36:36.000-0400",
      "body": "After chatting with James and Jacob we felt that 'lake' would be a good name for this space if we build a single space. The alternative is to host incubator in /incubator and things from scratchpad at /scratchpad.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-17T15:36:02.000-0400",
      "body": "Further conversations with Colin and Jacob have resulted in this decision:\n\nWe will host the entire scratchpad and the entire incubator at /scratchpad and /incubator\\\nWe will bring in infusion and engage so that they are siblings to things in scratchpad and incubator\\\nWe will create index.html pages in the scratchpad and incubator that will point to particular things that we want to highlight.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-18T11:53:26.000-0400",
      "body": "The incubator is now hosted at:\\\n<http://build.fluidproject.org:8095/incubator>\n\nand the scratchpad is hosted at:\\\n<http://build.fluidproject.org:8095/scratchpad>\n\nThe index.html pages still need to be created.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-23T16:49:14.000-0500",
      "body": "This issue was resolved quite awhile ago. Improvements to the daily build index pages should be filed as a separate, more specific issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:15.991-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
We have many things in the incubator and scratchpad that we'd like to host. Currently we have the incubator and some scratchpad things hosted at: <http://build.fluidproject.org:8095/incubator>&#x20;

We should create a new externals project that holds all the things we'd like to host that aren't in the products.&#x20;

        