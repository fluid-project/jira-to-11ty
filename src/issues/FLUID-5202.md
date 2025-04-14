---json
{
  "title": "FLUID-5202",
  "summary": "In composite panels, subpanel's dropdown's model binding not working",
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
  "date": "2013-10-30T14:45:07.423-0400",
  "updated": "2013-11-07T15:06:08.073-0500",
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
      "author": "Anastasia Cheetham",
      "date": "2013-10-31T14:13:23.728-0400",
      "body": "I've tested Justin's branch for <https://fluidproject.atlassian.net/browse/FLUID-5201#icft=FLUID-5201>, which fixes the slider rendering, and now this problem (i.e. the controls not reflecting the defaults) is showing up for the slider, as well. Also, the range information in the primary schema is not being applied to the rendered component, either.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-31T14:36:34.976-0400",
      "body": "There are two issues at play here. 1) the initial model value is not set for the sub panels 2) the selection renderer tree components do not have their valuebinding rebased.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-31T15:16:13.416-0400",
      "body": "I have fixes to both of the underlying issues mentioned in the previous comment in my <https://fluidproject.atlassian.net/browse/FLUID-5202#icft=FLUID-5202> branch.\\\n<https://github.com/jobara/infusion/tree/FLUID-5202>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-31T15:54:22.604-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/432>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-11-01T08:53:10.346-0400",
      "body": "I've tested Justin's <https://fluidproject.atlassian.net/browse/FLUID-5200#icft=FLUID-5200> branch in my branch, where I initially noticed the problems:\\\n<https://github.com/acheetham/infusion/tree/PFID>\\\nThe drop-downs are now correctly being initialized to the default values, but the sliders are still not getting the default or the range values. It's possible this may be related to <https://fluidproject.atlassian.net/browse/FLUID-5203#icft=FLUID-5203>, but the problem occurs even when there is only one slider in the panel.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-11-04T10:02:53.290-0500",
      "body": "Yes that will be addressed with the wok for <https://fluidproject.atlassian.net/browse/FLUID-5203#icft=FLUID-5203>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-11-07T15:06:08.071-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/432> ) into the project repo at e4475f1d0ca14eb6d6cc506bb273a04088b0cd18\n"
    }
  ]
}
---
In composite panels, a subpanel's dropdown's model binding is not working: It's not mapping to composite panel's model properly. I discovered this issue while implementing some composite panels in order to document the process. The code that illustrates the issue can be seen in my branch:\
<https://github.com/acheetham/infusion/tree/PFID>

To reproduce the issue:\
1\) Check out the branch\
2\) Open src/instructionalDemos/framework/preferences/compositeSchemas/index.html in your browser, watching the console\
3\) Open the sliding panel.

There are two drop-downs in Composite Panel #2. The primary schema for these two dropdowns defines a default that is NOT the first item in the list, but the two dropdowns default to the first item.

The enactors for the preferences merely log the new model whenever the model changes. If you watch the console when the page loads, you'll see the enactor logs indicating that the enactors are initialized with the defaults specified in the primary schema.

The preferences editor instantiated in the demo is stored in a global variable called "prefsEd" so in the console, you can examine the content of the various models to see where the default has been properly set, and where it has not.

        