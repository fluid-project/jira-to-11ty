---json
{
  "title": "FLUID-4637",
  "summary": "Using event injection from a parent into multiple instances of the same subcomponent, internal references to the event will always trigger in the last subcomponent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2012-03-08T15:19:50.159-0500",
  "updated": "2013-02-12T11:56:22.589-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4637/FLUID-4637.patch",
      "filename": "FLUID-4637.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-03-08T15:47:52.149-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4637#icft=FLUID-4637>.patch contains unit tests to show the issue.&#x20;\n\nThey can also be found in a branch on my github repo:\\\n<https://github.com/jobara/infusion/tree/FLUID-4637>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-06T01:36:54.017-0500",
      "body": "Hi Justin - thanks for writing this up and producing the test case. In this case the test is invalid and the framework behaviour is correct. The injection of the parent event \"{twinParent}.events.parentEvent\" as childEvent causes there to be only ONE EVENT in the system, and since you have namespaced the listener (as \"internal\"), there is also only room for one listener to it in that namespace. So the resulting sequence is that twin1 instantiates, registers its listener to the event, and then twin2 instantiates, overwriting the \"internal\" namespaced listener with its own. Then when the event itself is fired (from either source) the one listener which remains will fire, which is the 2nd one registered. You can verify this by removing the namespace applied to the listener - in this case, BOTH events will fire, firstly to twin1's listener and then to twin2's.&#x20;\n\nBy removing the demands block however we can derive a valid test which I think does test something useful - that the reference to \"{twinSubcomponent}\" in the listener declaration does indeed resolve by priority onto the selfsame component and not to its \"twin\" - although the preferred way of writing such self-references in the modern framework is to use \"{that}\".&#x20;\n"
    }
  ]
}
---
This occurs when you have a single subcomponent that is spawned in multiple instances in a parent component. When you use event injection to map a parent event with an event in the subcomponent, if the subcomponent is internally listening to that event, it will always trigger only in the last instance of the subcomponent. This is regardless of where the event was initially triggered from.

        