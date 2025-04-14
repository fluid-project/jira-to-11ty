---json
{
  "title": "FLUID-5220",
  "summary": "Improve composite panel performance by not re-instantiating after init.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-11-21T15:26:56.460-0500",
  "updated": "2016-07-08T08:41:33.198-0400",
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
      "date": "2013-11-27T15:46:52.710-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/439> ) at 73889463d799973a3a858c921d7bd2f9361c5906\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-11-27T16:08:05.777-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/prefsEditors/pull/58> ) at 902dd27de37c6f8879694829ee59175d951dd0e0\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-05-03T22:32:51.494-0400",
      "body": "The tests for this issue were found to be very faulty whilst tracking down sites of misuse of jqUnit.assertDeepEq while resolving <https://fluidproject.atlassian.net/browse/FLUID-5901#icft=FLUID-5901>. They include the following problems:\n\ni) registering an onCreate listener after a component has been created\\\nii) issuing \"expect\" calls out of line with respect to the sequence of actual test fixtures\\\niii) making a faulty call to assertDeepEq with simply a value of \"false\" which counted as a pass as a result of <https://fluidproject.atlassian.net/browse/FLUID-5901#icft=FLUID-5901>\\\niv) Issuing inline configuration to a creator function rather than defining a grade\n\nThe test was commented out as part of the fix for <https://fluidproject.atlassian.net/browse/FLUID-5901#icft=FLUID-5901> and needs to be rewritten\n"
    }
  ]
}
---
Currently a composite panel will create the sub panels first to use methods such as produceTree from them, needed for rendering their markup. However, since the actual rendering process modifies the existing markup on the page, the DOM bindings are destroy and the components need to be re-instantiated to re-establish the connections. This means that all of the sub panels need to be created twice.&#x20;

This can be improved by not re-instatiating but simply refreshing the DOMbinder. This means that all panels will need to have a new event onDomBind which will be used to trigger any listener that requires a DOM element. For example a this-ist listener that had been bound onCreate. Any invokers that will require a DOM element will need to be slow invokers with the dynamic flag set to true.&#x20;

The onDomBind event in a panel will be triggered by onCreate, however, in a sub panel this will be overridden to be fired by afterRender.

The composite panel will need to under go some other changes to remove all of the now unnecessary forwarding of events and re-instantiation that it currently conducts.

        