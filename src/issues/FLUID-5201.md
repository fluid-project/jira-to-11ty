---json
{
  "title": "FLUID-5201",
  "summary": "In composite panels, textfieldSlider not being properly instantiated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-30T14:44:00.129-0400",
  "updated": "2013-11-07T15:05:58.540-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-31T11:17:06.465-0400",
      "body": "It looks like the issue is around how aggressive the composite panel is at trying to rebase and surface options from it's subcomponents. At the moment it is trying to use all subcomponents. When rendering occurs, it places the an entry in the components block for any fluid renderer decorators that are created. This causes breakage on re-render when the produceTree attempts to get values from this pseudo subcomponent.&#x20;\n\nI've implemented a fix for this issue in my <https://fluidproject.atlassian.net/browse/FLUID-5201#icft=FLUID-5201> branch by putting in a check to only attempt to work with fluid.prefs.panel type subcomponents. This also allows for a composite panel to have other subcomponents that aren't sub panels. \\\n<https://github.com/jobara/infusion/tree/FLUID-5201>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-31T15:54:11.600-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/432>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-11-07T15:05:55.240-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/432> ) into the project repo at e4475f1d0ca14eb6d6cc506bb273a04088b0cd18\n"
    }
  ]
}
---
When a textfieldSlider is used as a decorator in a subpanel of a composite panel, an error occurs when the user tries to open the sliding panel. When the composite panel is trying to produce the subpanel trees, the list of component names includes one called "\*\*-renderer-learning\_sliderTest1\_textSize-2", which doesn't actually exist as a subcomponent, and so an attempt to access its options results in a 'subPanel is undefined' error.

I discovered this issue while implementing some composite panels in order to document the process. The code that illustrates the issue can be seen in my branch:\
<https://github.com/acheetham/infusion/tree/PFID>

To reproduce the issue:

1\) Check out the branch

2\) Edit Open src/instructionalDemos/framework/preferences/compositeSchemas/js/composite.js to\
a) un-comment the "sliderTest1" block of the auxiliary schema:\
<https://github.com/acheetham/infusion/blob/PFID/src/instructionalDemos/framework/preferences/compositeSchemas/js/composite.js#L102-L113>\
b) un-comment the reference to sliderTest1 in the composite1 group\
<https://github.com/acheetham/infusion/blob/PFID/src/instructionalDemos/framework/preferences/compositeSchemas/js/composite.js#L183>

Note: Make sure that the "radioTest1" panel is NOT enabled (it is causing FLUID-5200, which prevents this issue from being seen).

3\) Open src/instructionalDemos/framework/preferences/compositeSchemas/index.html in your browser

4\) Open the sliding panel, watching the console&#x20;

You'll see an error in the console:

TypeError: subPanel is undefined

If you break on the error, you can see that fluid.prefs.compositePanel.produceSubPanelTrees() is trying to work with a component names "\*\*-renderer-learning\_sliderTest1\_textSize-2", which doesn't actually exist.

        