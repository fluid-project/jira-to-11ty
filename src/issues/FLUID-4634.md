---json
{
  "title": "FLUID-4634",
  "summary": "Demands for boiled events will collide if they share any context values.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2012-03-05T08:53:51.106-0500",
  "updated": "2013-04-29T14:32:40.962-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4707/",
      "key": "FLUID-4707",
      "summary": "Correct IoC context resolution rules to prohibit matches with mismatched context names"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4634/FLUID-4634.patch",
      "filename": "FLUID-4634.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-03-05T09:00:04.255-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4634#icft=FLUID-4634>.patch provides unit tests that demonstrate this issue.&#x20;\n\nYou can also find the unit tests in a branch in my github repo:\\\n<https://github.com/jobara/infusion/tree/FLUID-4634>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-05-09T03:15:11.494-0400",
      "body": "Hi Justin - unfortunately this is currently \"expected behaviour\" due to the way context matching rules were implemented. As explained in <https://fluidproject.atlassian.net/browse/FLUID-4707#icft=FLUID-4707> it would currently cause too much upheaval to rewrite these rules due to the change in meaning of a large number of already written demands blocks, so we will have to live with it until the framework is rewritten wholesale for <https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392>. In the meantime, a workaround would be to issue a contradicting demands block with no contexts which will still take priority over your block in mismatched situations - for example in your case you ought to be able to have success by writing&#x20;\n\nfluid.demands(\"testDemandedEvent\", \\[], \\[\"{arguments}.0\"]);\n\nwhich will take priority in all mismatching situations. Please could you rewrite your test case so that it cleans up the static environment (in a finally block) before it concludes - you can see examples of this style in FluidIoCTests.js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-09T10:44:57.808-0400",
      "body": "Thanks for looking at this Antranig. I've updated the test case to clean up the static environment. I put the test functions into a try block, with the code to delete the property from the static environment in the finally block.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-06T01:31:18.121-0500",
      "body": "Fixed along with <https://fluidproject.atlassian.net/browse/FLUID-4707#icft=FLUID-4707> by merge at 91d5d1\n"
    }
  ]
}
---
If multiple components use the same name for a boiled event, the arguments specified in a demands block will collide if they share any of the same context. Meaning that in all instances the same demands block will be used to resolve the demanded options for the event.&#x20;

        