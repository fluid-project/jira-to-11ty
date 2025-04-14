---json
{
  "title": "FLUID-4911",
  "summary": "Remove requireStub in favor of the default pattern (logical or).",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "y z",
  "date": "2013-01-29T10:42:47.300-0500",
  "updated": "2024-07-22T10:35:31.637-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-01-31T16:36:18.595-0500",
      "body": "Reviewed, pushed and merged into master at 3a4ef0aaa7edc299fa27936ccf8ec5aa7c2bd449\n"
    },
    {
      "author": "y z",
      "date": "2013-02-24T04:12:07.466-0500",
      "body": "It looks like after all we need a browser version of node's require. Specifically in cases where we require a library that does not contain any of the boilerplate code that addresses multiple environments.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-06T03:24:34.233-0500",
      "body": "Summary of our thinking on this:\n\nDuring the San Diego Hackathon, we made some attempts to find a universal solution for browser-based testing. This was initially prompted by failure of the XMLSettingsHandler which was seeming likely to be hard to debug in node-inspector, given its 10-frame stack limit. However, we did not actually try to do this before auditioning various replacements for \"require in the browser\". Our initial hopeful requirement was that we could gain good mocks for essentially everything inside node's environment, which might enable browser-based testing of Kettle apps. Since <https://github.com/substack/node-browserify> promised support for loading some core node modules, its emulated \"require\" seemed helpful.\n\nUnfortunately neither this nor any other solution provided enough support, for example, to produce a mock \"http.createServer\" and so browser-based running of any express applications seems currently impossible. This only increases the urgency to hide \"express-isms\" which appear inside Kettle including any \"middleware\" which we end up interacting with.\n\nSeparately we debugged the XMLSettingsHandler issue which turned out to be caused by several bugs in its implementation. However, we continued the search for browser-based \"require\" implementations, finally fixing upon this one <https://github.com/letorbi/Jay> as proving by far the most minimal - around 80 lines of code (several, including wire's \"curl\" were more than 10 times the size). This was appropriate since we only require lightweight support for testing purposes and do not expect the implementation to be scalable or performant. In particular, the client-side use of \"synchronous AJAX\" allows us to emulate the natural semantics of node's \"require\" without distorting the client code with callback wrappers. A proper solution would use AMD <http://requirejs.org/docs/whyamd.html> or something similar but we are not yet prepared to move away from our standard use of script tags when developing and debugging the framework.\n\nAt this point we temporarily shelved our efforts again, since we considered that it would be impractical to expect to support browser-based use of libraries which did not follow, for example, cujo's \"when.js\" helpful pattern of using the AMD boilerplate which resulted in \"a global with the same name as the library\" when directly included in the browser.&#x20;\n\nHowever, recent pushes of Yura's fixes to jqUnit have resurfaced the issue. It appears it will be impossible to deliver on test cases which run in BOTH node.js and the browser without modifications without some form of browser-based require. This is not only because of dependencies on 3rd-party libraries such as node's \"path\", which are not packaged in the browser-friendly AMD-ish form, but also because of dependencies amongst the codebase itself. For example, here is the beginning of CanopyMatchMakerTests.js, under the \"default pattern\" mentioned in the headline of this JIRA:\n\n```java\nvar fluid = fluid || require(\"infusion\");\r\n\r\n(function () {\r\n    \"use strict\";\r\n\r\n    var gpii = fluid.registerNamespace(\"gpii\");\r\n\r\n....\r\n\r\n    var canopy = gpii.matchMaker.canopy; <-- failure here, since gpii is not actually loaded in this test in node.js without \"require\"\n```\n\nAs background, this is a test written initially to run in the BROWSER. When updated for the current state of node-jqUnit and the \"default pattern\" it now runs in the browser again - however, it does not run in node since it does not issue any request for require(\"gpii\") which would be required for node.js to resolve the dependency on the code under test. In the browser, we can paper over this issue by manually including references to all the code under test.\n\nThis seems to point to the fact that a browser-based implementation of \"require\", relying as the previous implementation did, on a statically included mapping of module names onto relative filesystem paths, is essential to progress with cross-environment testing - and if we do this, we may as well fix it up to allow fluid to self-resolve, removing the need for the \"logical or\" default pattern.\n\nInvestigation of the \"Jay\" version of require shows that it still shows excess implementation for our needs - it includes support for asynchronous loading, as well as a scheme for munging required module names into relative URLs, both of which are unnecessary - and is still missing the crucial feature of the JSON lookup table of module names onto file paths.&#x20;\n\nIt is proposed that we i) revive the implementation previously known as \"requireStub.js\" and improve it with the use of synchronous AJAX so that it is capable of loading non-global-aware code, as well as the implementation's own code and the Fluid framework itself\\\nii) aggressively pursue the removal of express-isms in Kettle as well as suitable mocks for dataSources and other dependencies so that essentially all of the GPII becomes effectively testable within the browser.\n\nOur discussion of the debugging issues suggested there was evidence that the 10 stack-frame limit in node-inspector was held in node.js itself. Even if we could fix that, node debugging still seems a dubious prospect since the node-inspector project has now been drifting without maintenance for nearly a year. Pursuing ii) would improve the architecture of the code in any case, even if node debugging one day became a convenient option.\n\nImproved work on moving Infusion's build into \"grunt\" might mitigate a number of these issues and ease the work of moving over to AMD/require.js if we thought desirable.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-07-07T08:41:00.583-0400",
      "body": "All of the elements referred to here have ceased to exist in their forms of 2013 as well as the ES6 module specification creating entirely new kinds of issues.\n"
    }
  ]
}
---
Infusion's Node.js module ships with requireStub.js, which is currently used in the GPII universal repository to enable our tests to run in both Node.js and in the browser. Its purpose is primarily to provide a stubbed version of Node.js's require() function, mapping between module names and global namespace names (e.g. "infusion" -> fluid).

Colin suggested that it would be simpler to just use the following boilerplate when accessing modules that are designed to work and be tested in both the browser and Node:

var globalName = globalName || require("moduleName");

Using this idiom avoids the need for requireStub.js, so it can be removed from Infusion.

        