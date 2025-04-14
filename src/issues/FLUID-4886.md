---json
{
  "title": "FLUID-4886",
  "summary": "Rationalise jqUnit system to be constructor-free, as well as harmonising with GPII implementation on node.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-01-13T18:31:44.360-0500",
  "updated": "2014-03-03T12:28:34.516-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-01-16T03:08:12.553-0500",
      "body": "Some further improvements were added to this work package as a result of harmonising with the GPII/node implementation:\n\n\\[FLUID-4886 e8034e7] <https://fluidproject.atlassian.net/browse/FLUID-4886#icft=FLUID-4886>: Updating to latest version of qunit trunk in order to resolve cross-context \"equiv\" issues in GPII/node - we now use the new qunit \"propEqual\" method for comparing deep equality as more in keeping with our framework-wide opinions on state-equivalence - see <https://github.com/jquery/qunit/issues/279> for discussion on this. Updates to fluid.js node driver to fix error with global namespace pollution as well as exposing globally useful method fluid.loadInContext for loading non-require-aware framework-style files. We also improve the fidelity of the node context object by adding setTimeout and a self-linking \"window\" property.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-01-25T17:05:07.189-0500",
      "body": "This hit trunk yesterday at revision d29007c - thanks to michelled and yzen for excellent review. This resulted in some shoring up of support on IE (at least to the level of current trunk) and also ended up uncovering a renderer bug with faulty usage of $.inArray (only visible on IE).\n"
    }
  ]
}
---
Our jqUnit testing system, layered on top of jQuery's QUnit, uses an old-fashioned and misleading system for organising test cases based on the constructor new TestCase(). As well as not agreeing with modern Infusion idioms which are constructor and "this"-free, this sets up misleading expectations in users that tests that are issued will genuinely be scoped to the "TestCase" instance that they are invoked on - in fact QUnit will ignore this scoping and simply apply time-based scoping based on the most recently issued "module" directive.\
We should reorganise jqUnit to remove the confusing idiom as well as name "TestCase", and simply directly pass through QUnit's "module" name and semantics unchanged.

As part of this work, we will also rationalise the utilities held in "TestUtils.js" to package them as part of jqUnit itself - this will create a core dependence on jqUnit on Fluid.js, but we are no longer intending to advertise or promote the use of our jqUnit outside the Fluid community.&#x20;

We will also rationalise the file structure and code loading policy so that the same implementation of jqUnit.js can be used outside the browser environment, for example in the GPII project based on node.js - this will create a separate file jqUnit-browser.js which is to be used within Infusion's brower-based tests themselves.

        