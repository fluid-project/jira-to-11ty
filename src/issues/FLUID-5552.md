---json
{
  "title": "FLUID-5552",
  "summary": "Upgrade the Prefs Framework to use the core Model Relay functionality instead of its own.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2014-11-11T11:02:55.711-0500",
  "updated": "2015-11-03T11:27:26.129-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5592/",
      "key": "FLUID-5592",
      "summary": "Error received using model relay to component which was destroyed by earlier listener to same transaction"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLOE-280/",
      "key": "FLOE-280"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-12-08T11:49:52.293-0500",
      "body": "Note the upgrading the video player ( VP-295 ) with the new modelRelay system can't go ahead without <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> (\"global instantiators\")\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-01-26T10:04:13.841-0500",
      "body": "I've started working on this in the branch: <https://github.com/cindyli/infusion/tree/FLUID-5552>\n\nMost pieces are back working except one last issue. To produce:&#x20;\n\n1\\. Open examples/framework/preferences/conditionalAdjusters-singlePanel/ in a browser where a debugger is turned on;\\\n2\\. Turn on \"speak text\" preference, adjust the slider for \"Words-per-min\", click on \"reset\" button;\\\n3\\. This javascript error occurs:&#x20;\n\nASSERTION FAILED: Cannot resolve reference {change}.value from component { typeName: \"fluid.textfieldSlider.textfield\" gradeNames: \\[\"fluid.textfieldSlider.textfield\",\"fluid.viewRelayComponent\",\"fluid.commonViewComponent\",\"fluid.standardRelayComponent\",\"fluid.modelRelayComponent\",\"fluid.commonModelComponent\"] id: byh4wskj-1519} which has been destroyed\n\nThe error doesn't occur if \"Words-per-min\" and other prefs in conditional panels have never been adjusted.\n\nThe same issue can be produced with all conditional panel examples.\n\nClicking on the reset button triggers:\\\n1\\. Reset the central model to the default which resets \"speak text\" to false and \"words-per-min\" to its original value. This should also triggers the model relay for the \"Words-per-min\" prefs value to be relayed to \"Words-per-min\" text field slider;\\\n2\\. Resetting \"speak text\" prefs to false results in the destroy of its conditional panels including the \"words-per-min\" text field slider. A refreshView() is called right after the destroy to stop showing these conditional panels - <https://github.com/cindyli/infusion/blob/FLUID-5552/src/framework/preferences/js/Panels.js#L334-L340>\n\nThe debugging log shows the destroy of the \"words-per-min\" text field slider (line 337) happens before the error occurs. So it seems even though the text field slider should have been destroyed, the model relay onto it continues to happen.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-01-27T10:16:29.655-0500",
      "body": "Issued a pull request: <https://github.com/fluid-project/infusion/pull/582>\n\nThis pull request is dependent on Antranig's pull request that fixes <https://fluidproject.atlassian.net/browse/FLUID-5592#icft=FLUID-5592>: <https://github.com/fluid-project/infusion/pull/581>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-03-19T12:26:15.785-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/582> ) was merged into the project repo at 18939c0dd614901bfc434a29f880aa332600a239\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:29.045-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The core Infusion Framework uses the new model relay functionality, but the Prefs Framework still uses its own model relay framework. This makes upgrading the video player rather complicated.

        