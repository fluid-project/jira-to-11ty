---json
{
  "title": "FLUID-3771",
  "summary": "Expansion of arguments for fluid.deferredCall with respect to fluid.deferredInvokeCall is anomalous",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-10-04T02:14:09.613-0400",
  "updated": "2010-12-15T19:33:14.591-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3771/FLUID-3771.patch",
      "filename": "FLUID-3771.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3771/FLUID-3771 (2).patch",
      "filename": "FLUID-3771 (2).patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T13:59:14.113-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-05T03:22:38.675-0400",
      "body": "Going on holiday patch. Perhaps it really is time to sign up to github\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-03T16:06:21.583-0500",
      "body": "Updated version of patch with resolution for issue - still needs more tests and description\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-07T16:28:58.858-0500",
      "body": "Fixed at revision 10335, along with numerous other fixes for consistency and correctness of the IoC system - including \"noCopy\" for invoker arguments, and \"proleptic ginger nicknames\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T19:33:14.584-0500",
      "body": "I've reviewed Antranig's changes for this issue and they look generally reasonable. +1 for inclusion in Infusion 1.3.\n"
    }
  ]
}
---
At present, expansion of options trees presented to the IoC system as descended from the "components" block proceeds by an incorrect algorithm. This frequently appears when applying the expanders "deferredCall" vs "deferredInvokeCall". At present it is possible for this expansion to occur some variable number of times - for example, the test case in FluidIoCTests which is named "stackThroughInvoke" will fail, if the expander in its definition with type "deferredCall" is replaced with "deferredInvokeCall". This is because this substitution will cause the arguments list to be expanded twice, once as part of global expansion and then again when the expander is evaluated. This then discovers the component itself as deposited from phase 1 and attempts to treat it as material for expansion. This algorithm needs to be globally reimplemented, especially with respect to the more fine-grained "options expansion with priority" functionality that is upcoming.

        