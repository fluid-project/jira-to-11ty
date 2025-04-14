---json
{
  "title": "FLUID-4929",
  "summary": "Unable to write async tests against events that are fired automatically with component creation",
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
  "date": "2013-03-08T11:30:52.010-0500",
  "updated": "2013-04-29T09:22:14.830-0400",
  "versions": [],
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
      "author": "Justin Obara",
      "date": "2013-03-08T11:44:18.960-0500",
      "body": "I've added an example test case to illustrate the issue.\\\n<https://github.com/jobara/infusion/tree/FLUID-4929>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-09T05:40:14.855-0500",
      "body": "Thanks for this requirement and test case, Justin. In fact, although this effect would be quite useful, it is relatively hard to achieve - before the invention of \"Luke Skywalker Options\" it would have been effectively impossible since it would not be possible to get the listener record to be routed to the component before its construction.\n\nEven after the invention of LSO it is still relatively hard because of limitations in the implementation of QUnit. We are already using a particular hack to detect those tests which have been filtered out in the UI by double-clicking on a test - we attempt to queue a test, and then inspect QUnit's queue to see if any tests have indeed arrived - unfortunately this is the only detectable effect of the branch:\n\nif ( !validTest( test ) ) {\\\nreturn;\\\n}\\\nwhich is currently at line 415 of qunit.js which is responsible for filtering tests. One conceivable possibility is monkey-patching the prototype of QUnit to overwrite QUnit.test but this seems a bit undesirable for now.&#x20;\n\nAs a result of this model, for better or worse, we are stuck with the model where every IoC-driven test case corresponds to an async QUnit test. Even without this model, we would still have the challenge of ensuring that the parsing and construction of each TestCaseHolder in the tree occurs strictly BEFORE the construction of any component at which it may want to issue construct-time tests. So either way, this seems to require the creation of a new kind of sequence point represented by an event operated by each TestCaseHolder. This event is now called onTestCaseStart, and the implementation takes care to call it \"at the appropriate point\" which guarantees that a Luke Skywalker assertion (currently we have only implemented this for the \"event\" sequence record type) will be definitely actioned before a component waiting on \"onTestCaseStart\" is constructed - and that the component WILL be constructed in order to ensure that the start of a test case sequence which issued an LSO against it will bind onto it.\n\nFor convenience, this also resulted in a framework improvement which allows event specifications in \"createOnEvent\" to be IoC-resolved as in boiling and other resolution cases.\n\nSo, with these changes, your test case Environment now looks like this:\n\nfluid.defaults(\"fluid.tests.initTree\", {\\\ngradeNames: \\[\"fluid.test.testEnvironment\", \"autoInit\"],\\\ncomponents: {\\\ninitTest: {\\\ntype: \"fluid.tests.initTest\",\\\ncreateOnEvent: \"{initTester}.events.onTestCaseStart\"\\\n},\\\ninitTester: {\\\ntype: \"fluid.tests.initTester\",\\\n}\\\n}\\\n});\n\nNote the cross-injection of \"{initTester}.events.onTestCaseStart\" using the new framework feature and new test case event.\n\nNow all that is required is to convert test case fixture to issue a \"Luke Skywalker Name\" for the target component rather than a concrete one. If it issues the component name in the standard way as \"{initTest}\" there is no way to prevent the ginger process from completely instantiating the target component at the point of reference\\[\\*] - which again will make the event binding too late. We must use the IoCSS form \"{initTree initTest}\" to ensure that we are meaning to talk about the component BEFORE IT IS CREATED and not meaning to imply that we want it to be created by the reference process. So with this change, your test case fixture now looks like :\n\nsequence: \\[{\\\nlistener: \"fluid.tests.checkEvent\",\\\nevent: \"{initTree initTest}.events.onReady\"\\\n}]\n\nand now works\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-09T05:44:42.560-0500",
      "body": "References: LSO/IoCSS: <https://fluidproject.atlassian.net/browse/FLUID-4873#icft=FLUID-4873>\\\nIoC testing framework: <https://fluidproject.atlassian.net/browse/FLUID-4850#icft=FLUID-4850>\n\nNote that although \"it just happens\" as an implementation detail that all IoC test cases are async, this is incidental to the problem. Even if they were synchronous, the structure of the problem and the implementation solution would be the same since the whole challenge is to somehow deliver configuration to the component's constructor before it exists, without causing the component construction as a prerequisite of the delivery.\n\nThe statement marked \\[\\*] is not completely true, but it is effectively true before we implement the \"asynchronous ginger world\". Right now there is no middle ground between a component which constructs as part of the \"synchronous ginger world\" of its parent component tree, and one which constructs as part of a separate asynchronous process due to \"createOnEvent\". Since all of our IoC tests are asynchronous for now, clearly the target component has to be of the 2nd type - and the thing which causes it to construct is the EVENT and not the ginger reference. The ginger reference could not be the thing which caused it to construct, because if it was, it would have constructed synchronously already! Since everything that is LIABLE to construct as part of the synchronous ginger process, WILL construct by the time it finishes. Which would again lead to the component being fully constructed by the time the test fixture starts to execute against it - so this solution is the only one possible before we implement the \"asynchronous ginger world\"/\"wave of promises\" (see <https://fluidproject.atlassian.net/browse/FLUID-4925#icft=FLUID-4925>)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-03-15T14:49:31.636-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/267> merged into project repo at 6e727b6d38fd9091e1fe914d8f0d21823c0cc7aa\n"
    }
  ]
}
---
When using the new testing framework there doesn't seem to be a way to register tests to ensure that events are fired, when they are tied to the components creation. For example if you were to add an event that was fired in conjunction with the components create on event.&#x20;

When creating a sequence, the listener sequence is added at the top, but the actual test just hangs. I'm assuming that this is because the event that the listener is bound to is fired before the listener is attached.

        