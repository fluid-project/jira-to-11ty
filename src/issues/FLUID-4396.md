---json
{
  "title": "FLUID-4396",
  "summary": "In many cases, framework can unhelpfully produce message \"that is null\" when markup is missing",
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
  "date": "2011-08-10T15:27:16.836-0400",
  "updated": "2013-10-04T09:53:14.840-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-08-10T15:56:42.455-0400",
      "body": "This is a message generated from within the autoInit pathway in the framework which reflects a set of mismatched assumptions. A decision made a few releases ago was for the correct behaviour for a view component whose \"container\" selector did not match any markup, to construct no component and return \"null\" instead. However, once a view component is made \"autoInit\", the component's creator function continues to assume that a component value must always be returned, and also has no specific insight into the case that it was a view component. For future releases this whole set of assumptions needs to be reevaluated - my personal preference is for\n\ni) the \"no component on no markup\" behaviour to be completed and made consistent, and\\\nii) an IoC debugging system be put into place that allows other insight into why a component \"failed\" more subtle than our current blunt instrument of fluid.fail() which aborts the entire current creation stack.\n\nIn the meantime I have added a \"diagnosis\" branch to the autoInit pathway that replaces the \"that is null\" message with a more informative report, which will allow the current framework behaviour we have committed to for 1.4 to remain unchanged.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-23T11:26:56.513-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/135> merged into project repo at e48a753fa466679898f902de034763fb2e931947\n"
    }
  ]
}
---
As a sample of this issue, Colin reports when integrating UIOptions:

"Another issue I encountered was my own fault, but points to the need for improved error messages within the framework. As mentioned earlier, I was looking for the earliest time I could instantiate my page's UI Enhancer, trying to avoid any potential rendering flicker when the Enhancer changes the styling of the page. My first attempt was to place the call to fluid.pageEnhancer() in the \<head>, figuring this guaranteed that the UI Enhancer would be instantiated before any subsequent markup had been rendered.

However, under the covers the pageEnhancer is a typical Infusion View: it expects to bind itself to a container element in the DOM. The framework was throwing an error while instantiating the UI Enhancer due to the fact that the \<body> tag didn't yet exist. Fair enough, but the only error message I received in the console was "that is null." A bit of digging into the stack trace pointed me at the problem, but a more meaningful and helpful message about the failure of fluid.container would be more helpful. Only experts could decipher this issue without help."

        