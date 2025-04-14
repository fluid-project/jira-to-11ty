---json
{
  "title": "FLUID-2181",
  "summary": "Improve framework diagnostics in the case of missing markup/containers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2009-02-02T18:24:25.000-0500",
  "updated": "2011-02-22T16:27:59.727-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-02T18:38:36.000-0500",
      "body": "Fixed at revision 2400\n\nThis issue is aided by the recent innovations in jQuery 1.3, which we have taken on board, and generalised:&#x20;\n\n<http://docs.jquery.com/Core/selector>\n\nAll jQuery selectors now include properties \"selector\" and \"context\" which indicate their initial query values. We have added to this system in the DOM binder with the element \"selectorName\" which holds the name, within, say, a \"selectors\" structure in which the selector was held in the component's options.\n\nTogether with new \"guard\" code in fluid.initView, this now enables us to support messages like this, generically across all our components:\n\n23:18:38 GMT+0000 (GMT Standard Time): Error instantiating component with name \"fluid.pager.pagerBar\": selector .ss-members .pager-top with name pagerBar returned no results in context \\[document: location file:///E:/workspace/fluid-components/src/webapp/sample-code/pager/sakai-site-setting/site\\_setting\\_members.html#]\n\nThis code is compatible with the jQuery scheme, and does not overwrite these members if they are found - however, since it places members of the same names if they are not found, it would help those who for some reason need to work with back-versions of jQuery.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.725-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In the case that components are configured with markup that is missing vital selector targets, the error messages from the framework can be unhelpful. For example, in configuring a Pager without any selector matching that required by the PagerBar, the only message reported is the "NotOne" failure from fluid.container - with message "A single container element was not found for selector object Object".&#x20;

In this case, the selector has **already** been evaluated by the DOM binder at top level, and returned an empty list \[] to be fed to the subcomponent options, filtered through initSubcomponents - as it stands, there is no way to "tunnel" any useful contextual information through that might indicate why the selector was evaluated.

        