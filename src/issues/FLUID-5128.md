---json
{
  "title": "FLUID-5128",
  "summary": "Automated removal of soft listeners causes corruption by removing all participating listeners",
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
  "date": "2013-09-10T03:31:45.348-0400",
  "updated": "2014-03-03T11:28:43.213-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-09-17T13:38:28.837-0400",
      "body": "Reviewed and pushed to master at rev a739752a9311d760ae869a069c65aebf6857988f.\n"
    }
  ]
}
---
This issue was encountered when debugging the preferences management tool under development at <https://github.com/cindyli/prefsEditors/blob/GPII-188/src/shared/lib/cloud4all/CustomAdjusters.js#L217-L219> for GPII-188. The situation has a number of panels all derived from the type "fluid.uiOptions.defaultPanel". This contains the following definition:&#x20;

fluid.defaults("fluid.uiOptions.defaultPanel", {\
gradeNames: \["fluid.eventedComponent", "autoInit"],\
...\
listeners: {\
"{uiOptions}.events.onUIOptionsRefresh": "{fluid.uiOptions.panels}.refreshView"\
},

});

This causes a number of registrations to the root component UIOptions, with one listener for each panel registered with the softNamespace of "fluid.uiOptions.defaultPanel" - this is in accordance with rules on soft namespace sources implemented for FLUID-5082. There is an error in the soft namespaces implementation that acts in the case where the panels are torn down and recreated as a result of a rendering operation - this deregisters such automatically registered listeners as the one shown above. Unfortunately the deregistration proceeds on a namespace basis and so the every deregistration removes ALL listeners from the panels participating in this situation. As they are each torn down, each one of them removes all such listeners - resulting in just one listener remaining in the set after the refresh is complete.

This is against the design principles behind soft listeners, which require that no listener which does not mention an explicit (hard) namespace should be able to detect any difference with the implementation before soft listeners were implemented. We need to improve the implementation so that soft namespace information is supplied again on automatic deregistration and that just the individual listener originally subscribed is deregistered.

        