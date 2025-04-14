---json
{
  "title": "FLUID-4753",
  "summary": "Upgrade qunit to jquery's trunk, as well as introducing \"composite\" plugin for running all framework tests at a glance",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-08-13T01:43:56.539-0400",
  "updated": "2024-07-22T09:36:52.816-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4774/",
      "key": "FLUID-4774"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2012-08-17T18:25:54.888-0400",
      "body": "Reviewed, tested, and pushed. <https://github.com/fluid-project/infusion/commit/095e1f1cde2c5d166e91b1ccaa18fd4c58967ebc>\n\nI'd recommend that prior to closing this issue, we create a wiki page describing the new all tests feature and how to maintain it.\n\ncolinclark: Bosmon: This all-tests.html file scares me quite a bit\\\n\\[5:48pm] colinclark: I assume it has to be updated with the addition of each new test file?\\\n\\[5:48pm] Bosmon: colinclark - because it includes an HTML comment with an embedded piece of shell scripting? : P\\\n\\[5:48pm] Bosmon: Yes, right now it does\\\n\\[5:49pm] Bosmon: I should have put a \"TODO\" on it saying \"implement this in grunt once we start using it\"\\\n\\[5:49pm] colinclark: yes\\\n\\[5:49pm] Bosmon: I was thinking about just this issue in today's SHOWER TIME\\\n\\[5:49pm] colinclark: i'll do that when i get back, perhaps\\\n\\[5:49pm] Bosmon: Start us on GRUNT?\\\n\\[5:49pm] colinclark: yes\\\n\\[5:49pm] Bosmon: THat would be awesome\\\n\\[5:49pm] colinclark: What is the blob of commented shell script?\\\n\\[5:49pm] colinclark: it looks like the hint of something that will find tests automatically\\\n\\[5:49pm] colinclark: but clearly it is not\\\n\\[5:50pm] Bosmon: It is the script which automatically generates the block of configuration containing the test files\\\n\\[5:50pm] Bosmon: Why is it clearly not? \\\n\\[5:50pm] Bosmon: I mean, it is not \"automatic\"...\\\n\\[5:50pm] EricDalquist left the chat room. (Quit: Leaving.)\\\n\\[5:50pm] Bosmon: Since you have to paste it into the command line yourself : P\\\n\\[5:50pm] Bosmon: But it is better than a poke in the eye\\\n\\[5:50pm] colinclark: ugh\\\n\\[5:51pm] colinclark: I might have made a wiki page\\\n\\[5:51pm] Bosmon: It seems you are not unconditionally prepared to accept that it may be better than a poke in the eye : P\\\n\\[5:51pm] alexn left the chat room. (Quit: Leaving.)\\\n\\[5:51pm] Bosmon: What would be on the wiki page?\\\n\\[5:52pm] colinclark: A description of how to run tests all at once\\\n\\[5:52pm] colinclark: how it works\\\n\\[5:52pm] colinclark: and how to update the page with new tests\\\n\\[5:52pm] Bosmon: Ah yes\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T12:49:09.113-0500",
      "body": "There is a separate jira for writing the documentation: <https://fluidproject.atlassian.net/browse/FLUID-4774#icft=FLUID-4774>\n"
    }
  ]
}
---
Hopefully with an accepted version of our fix for "cumulative expect" #226 at <https://github.com/jquery/qunit/issues/226> it should be possible to stay in step easily with jquery's trunk version of qunit. In addition there is a helpful plugin "composite" which will enable us to make sure all framework tests are running with one operation rather than our currently opportunistic behaviour on checkin.

Further possible improvements:

* "grunt" task to automate running the "composite" test frame, as well as linting of all files using jshint
* harmonisation with GPII's version of jqunit, which has a slightly streamlined API avoiding the "new" style and the unidiomatic term "TestCase" which is more familiarly named "module" in qunit's terminology

        