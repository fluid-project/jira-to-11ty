---json
{
  "title": "FLUID-5659",
  "summary": "Failure to notify multiple relay rules ",
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
  "reporter": "Antranig Basman",
  "date": "2015-04-28T12:28:29.212-0400",
  "updated": "2015-08-20T15:59:10.315-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-04-28T12:41:14.666-0400",
      "body": "Failing config is being tracked at <https://github.com/amb26/first-discovery/tree/FLUID-5659>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-04-29T11:35:24.786-0400",
      "body": "This issue has now been characterised - it consists of yet more rubbish caused by the faulty \"relayCount\" system which was responsible for <https://fluidproject.atlassian.net/browse/FLUID-5303#icft=FLUID-5303> and <https://fluidproject.atlassian.net/browse/FLUID-5293#icft=FLUID-5293> amongst others. Firstly, the issue is caused by these being shared across transactions -  bizarrely, by policy, for no good reason. Secondly, the failure was caused by having a model rich in relay rules which was being tested by several back-to-back transactions resulting from a long fixture in the IoC testing framework:\n\nsequence: \\[{\\\nfunc: \"{lang}.refreshView\"\\\n}, {\\\nlistener: \"gpii.tests.langTester.verifyRendering\",\\\npriority: \"last\",\\\nevent: \"{lang}.events.afterRender\"\\\n}, {\\\nlistener: \"gpii.tests.langTester.verifyButtonTopsReady\",\\\nargs: \\[\"{lang}\"],\\\npriority: \"last\",\\\nevent: \"{lang}.events.onButtonTopsReady\"\\\n}, {\\\njQueryTrigger: \"click\",\\\nelement: \"{lang}.dom.next\"\\\n}, {\\\nlistener: \"gpii.tests.langTester.verifyLangModel\",\\\nargs: \\[\"{lang}\", \"sv\"],\\\nspec: {path: \"lang\", priority: \"last\"},\\\nchangeEvent: \"{lang}.applier.modelChanged\"\\\n}, {\\\nfunc: \"{lang}.refreshView\"\\\n}, {\\\nlistener: \"gpii.tests.langTester.verifyButtonStates\",\\\nargs: \\[\"{lang}\", \"sv\", false, true],\\\npriority: \"last\",\\\nevent: \"{lang}.events.afterRender\"\\\n}, {\\\njQueryTrigger: \"click\",\\\nelement: \"{lang}.dom.prev\"\\\n}, {\\\nlistener: \"gpii.tests.langTester.verifyLangModel\",\\\nargs: \\[\"{lang}\", \"ne\"],\\\nspec: {path: \"lang\", priority: \"last\"},\\\nchangeEvent: \"{lang}.applier.modelChanged\"\\\n}, {\\\nfunc: \"{lang}.refreshView\"\\\n}, {\\\nlistener: \"gpii.tests.langTester.verifyButtonStates\",\\\nargs: \\[\"{lang}\", \"ne\", false, false],\\\npriority: \"last\",\\\nevent: \"{lang}.events.afterRender\"\\\n}, {\\\nfunc: \"gpii.tests.debugLang\",\\\nargs: \"{lang}\"\\\n}, {\\\nfunc: \"{lang}.applier.change\",\\\nargs: \\[\"lang\", \"en\"]\\\n}, {\\\nlistener: \"gpii.tests.langTester.verifyLangModel\",\\\nargs: \\[\"{lang}\", \"en\"],\\\nspec: {path: \"lang\", priority: \"last\"},\\\nchangeEvent: \"{lang}.applier.modelChanged\"\\\n}, {\\\nfunc: \"gpii.tests.debugLang\",\\\nargs: \"{lang}\"\\\n}, {\\\nfunc: \"{lang}.refreshView\"\\\n}, {\\\nlistener: \"gpii.tests.langTester.verifyButtonStates\",\\\nargs: \\[\"{lang}\", \"en\", true, false],\\\npriority: \"last\",\\\nevent: \"{lang}.events.afterRender\"\\\n}]\\\n}]\n\nEach listener to applier.modelChanged ends up triggering the following fixture during the endgame of the previous transaction - and given this entire sequence actually resolves synchronously, they are accumulated 3 deep by the end of the sequence. Unfortunately, the logic introduced for <https://fluidproject.atlassian.net/browse/FLUID-5293#icft=FLUID-5293> for clearing the relay counts only executes after all listeners have been notified, by which time the relay counts have been completely saturated.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-04-30T09:37:28.983-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/597> ) into the project repo at c0c17164e10e46ac498af9d758c0cfcb93dac7d5\n"
    }
  ]
}
---
A placeholder for a currently uncharacterised failure in model relay. The test failure results in the language panel in first-discovery - relay rules are so:

modelRelay: \[{\
target: "langIndex",\
singleTransform: {\
type: "fluid.transforms.indexOf",\
array: "{that}.options.controlValues.lang",\
value: "{that}.model.lang",\
offset: 1\
}\
}, {\
target: "firstLangSelected",\
singleTransform: {\
type: "fluid.transforms.binaryOp",\
left: "{that}.model.langIndex",\
operator: "===",\
right: 1\
}\
}, {\
target: "lastLangSelected",\
singleTransform: {\
type: "fluid.transforms.binaryOp",\
left: "{that}.model.langIndex",\
operator: "===",\
right: "{that}.options.controlValues.lang.length"\
}\
}],

attached to "gpii.firstDiscovery.panel.lang"

the binaryOp relays do not trigger at all in the case we reset the language index back to 1 after setting it to 6.

        