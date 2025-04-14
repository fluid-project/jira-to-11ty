---json
{
  "title": "FLUID-5200",
  "summary": "In composite panels, radio button id rewriting has problems",
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
  "date": "2013-10-30T14:43:26.283-0400",
  "updated": "2013-11-07T15:05:39.992-0500",
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
      "date": "2013-10-31T15:53:15.485-0400",
      "body": "Fixed in my branch <https://github.com/jobara/infusion/tree/FLUID-5200>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-31T15:53:58.219-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/432>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-11-07T15:05:36.504-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/432> ) into the project repo at e4475f1d0ca14eb6d6cc506bb273a04088b0cd18\n"
    }
  ]
}
---
The ids of components get the 'pref name' prefixed; for a radio button, the "rowId" would become "pref\_name\_rowId", but the relativeParentID doesn't get this prefix, so it is "..::rowId" instead of "..:: pref\_name\_rowId". The search for the parent is unsuccessful, and the rendering of the radio buttons fails.

I discovered this issue while implementing some composite panels in order to document the process. The code that illustrates the issue can be seen in my branch:\
<https://github.com/acheetham/infusion/tree/PFID>

To reproduce the issue:

1\) Check out the branch

2\) Edit Open src/instructionalDemos/framework/preferences/compositeSchemas/js/composite.js to\
a) un-comment the "radioTest1" block of the auxiliary schema:\
<https://github.com/acheetham/infusion/blob/PFID/src/instructionalDemos/framework/preferences/compositeSchemas/js/composite.js#L152-L163> \
b) un-comment the reference to radioTest1 in the composite2 group\
<https://github.com/acheetham/infusion/blob/PFID/src/instructionalDemos/framework/preferences/compositeSchemas/js/composite.js#L190>

3\) Open src/instructionalDemos/framework/preferences/compositeSchemas/index.html in your browser, watching the console

You will see the following error in the console:

ASSERTION FAILED: Error in component tree - UISelectChoice with id learning\_radioTest1\_frequencyRow::learning\_radioTest1\_frequencyInput has parentRelativeID of ..::frequency-radio which cannot be resolved

The reference to the parentRelativeID has not been re-written to include the "learning\_radioTest1\_" prefix, and so it can't be found.

        