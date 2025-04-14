---json
{
  "title": "FLUID-5283",
  "summary": "Utility \"fluid.enabled\" is broken in several ways and should be rewritten or removed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-03-07T02:45:30.269-0500",
  "updated": "2021-07-29T01:35:00.220-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5249/",
      "key": "FLUID-5249",
      "summary": "Rationalise handling of \"instantiators\" to produce by default only one per Fluid context"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3185/",
      "key": "FLUID-3185"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The utility "fluid.enabled" dates from the very dark days of Infusion and was implemented "opportunistically" as an attempt to answer FLUID-3185's requirements. It does possess a rudimentary test in keyboard-a11y-tests.js and is actually used from within the Uploader's FileQueueView.

This implementation was never properly thought out, harbours several bugs, and no longer agrees with our current preferred way of working.

Firstly, the bug - when applied to a raw enableable DOM element, such as a input/button etc., after the first time it has disabled/enabled the control, it can never be toggled again - this is because the implementation unilaterally scrawls its ENABLEMENT\_KEY on the element whether it is at the root or not. The second time round it sees the scrawl and then fails to apply the raw DOM property "disabled".

Secondly, the poor thinking - this implementation supplies no means of notifying the component(s) that they are disabled, which prevents them making any changes to styling etc. which are contingent on being disabled. This can be remedied after some upcoming work on the framework's records that will be done as some of the upcoming debugging work - we will store central records looking up DOM nodes to Fluid components which allows us to find and notify them. This depends on <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> to allow these records to be found.

Thankfully this implementation has been marked as "non-API" for a while. We currently have no components which listen to the $.data scrawling that were ever implemented, other than the "pseudocomponent" fluid.activatable (which we have committed to converting into a genuine component for Fluid 2.0)

        