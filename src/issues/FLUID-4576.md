---json
{
  "title": "FLUID-4576",
  "summary": "fetchResource resourceSpec success option should accept a function name",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2012-01-10T11:07:37.362-0500",
  "updated": "2015-06-10T20:20:42.252-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-01-10T13:42:36.244-0500",
      "body": "I've created a branch with a test case for this, and an implementation of a solution, and submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/197>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-08-02T11:46:07.145-0400",
      "body": "Comments from the pull request:&#x20;\n\nSee email review - contents were\n\nThanks for these improvements, anastasia -\n\ni) the actual fix could still see some redundancy removed. Consider an implementation of the form beginning\n\nfluid.each(\\[\"success\", \"error\"], function (callbackName) { .....\n\nii) there are unnecessary calls to \"makeCallbackFunction\" in the tests as well as unnecessary expression of the arguments - also the fluid.tests namespace whilst used only in tests will still eventually be subject to congestion. Could you supply more meaningful names to \"testSuccessFunction\", \"callbackFilenames\" etc? Or even remove them entirely by the same consideration applied in i).\n\nA suitable way of expressing the tests might be as follows:\n\n..... () {\\\nvar filenames = {\\\nsuccess: \"Caching-test.html\",\\\nerror: \"Foofer.doodle\"\\\n};\\\nvar successCases = \\[{\\\nname: \"No success callback\",\\\ncallback: null},{\\\nname: \"Literal success callback\",\\\ncallback: fluid.tests.testSuccessFunction},{\\\nname: \"Named success callback\",\\\ncallback: \"fluid.tests.testSuccessFunction\"]\\\n}];\\\nvar errorCases = \\[{\\\nname: \"No error callback\",\\\ncallback: null},{\\\nname: \"Literal error callback\",\\\ncallback: fluid.tests.testErrorFunction},{\\\nname: \"Named error callback\",\\\ncallback: \"fluid.tests.testErrorFunction\"\\\n}];\\\nfluid.each(successCases, function(scase), {\\\nfluid.each(errorCases, function(ecase), {\\\nfluid.tests.testFetchResourcesCallbacks(\"FLUID-4576: fetchResources callback with \" +\\\nscase.name + \" and \" + ecase.name, filenames, scase.callback, ecase.callback);\\\n})\\\n});\n\nThis would succeed in testing a lot more of the implementation surface with smaller and more readable test case bulk. You can see examples of this kind of \"structure-driven test case\" for example in our Uploader tests at\n\n<https://github.com/fluid-project/infusion/blob/master/src/webapp/tests/component-tests/uploader/js/UploaderTests.js#L435-572>\n\nJavaScript is a great environment for writing test cases!\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-10T20:20:42.252-0400",
      "body": "Removing \"good first bug\" tag since all of the fetchResources infrastructure is/will be deprecated and should be removed from the framework on the Infusion 2.0 timeline\n"
    }
  ]
}
---
It is possible to specify a callback to be invoked upon successful completion of a resource fetch, through the 'success' option of a resourceSpec. However, this option **must** be an actual function; an EL path is not supported. It would be helpful to be able to specify either: this way, success functions could be specified in a defaults block, for example.

        