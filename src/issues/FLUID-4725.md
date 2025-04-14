---json
{
  "title": "FLUID-4725",
  "summary": "Change inlineEdit invitation text on keyboard focus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2012-06-28T10:54:05.932-0400",
  "updated": "2013-09-18T11:25:35.116-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-07-18T11:05:14.475-0400",
      "body": "Merged into project repo at b743831c5afb272d3f87aeb41e592326933402be\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-07-20T17:23:27.847-0400",
      "body": "Hi - this implementation is generally good, although the lines&#x20;\n\nif ((that.options.defaultViewText !== undefined) &&\\\n(that.options.strings.defaultViewText === fluid.defaults(\"inlineEdit\").strings.defaultViewText)) {\\\nthat.options.strings.defaultViewText = that.options.defaultViewText;\\\n}\n\nare not very declarative and would be better expressed as a mergePolicy. A policy of&#x20;\n\n\"strings.defaultViewText\": \"defaultViewText\"\n\nshould have the desired effect although I am hesitant to very positively recommend this change since this part of the framework has a rickety and incomplete implementation which might well change soon - I left some comments on <https://fluidproject.atlassian.net/browse/FLUID-4733#icft=FLUID-4733> on this aspect of mergePolicies.\\\nSeparately whilst reading these fixes I noted <https://fluidproject.atlassian.net/browse/FLUID-4732#icft=FLUID-4732> which we should deal with sooner rather than later. Removing the explicit read of a component's defaults (never recommended as a general practice) would also reduce the impact of fixing <https://fluidproject.atlassian.net/browse/FLUID-4732#icft=FLUID-4732>.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-07-20T17:32:26.468-0400",
      "body": "Please also consider using the same strategy for \\\n// this is here for backwards API compatibility, but should be in the strings block\\\ntooltipText: \"Select or press Enter to edit\",\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-07-20T17:42:43.114-0400",
      "body": "Some other improvements:\n\nAvoid duplicate calls to fluid.inlineEdit.bindHighlightHandler and fluid.inlineEdit.bindMouseHandlers by amalgamating the DOM elements passed as the first argument like so:\n\n(InlineEdit.js line 738)\n\nvar viewElements = that.viewEl.add(that.textEditButton);\n\nfluid.inlineEdit.bindMouseHandlers(viewElements, that.edit);\\\nfluid.inlineEdit.bindHighlightHandler(viewElements, displayModeContainer, that.options.styles, that.options.strings, that.model);\n\nThis will improve intent, as well as aid future refactoring of the component, and mitigate the fact that the signature of bindHighlightHandler has become undesirably long.\n\nNOTE: This will require improving the implementation of fluid.inlineEdit.makeEditTriggerGuard\n\nAll of these functions should be improved to make it clear whether they accept a jQuery element or not (they should all unambiguously accept a jQuery as their first argument) rather than currently looking as if they accept a variety of things (jQuery with one element, jQuery with multiple elements, or a raw DOM node) but failing in some cases.&#x20;\n"
    }
  ]
}
---
The designers have suggested that the 'defaultViewText' for an empty inlineEdit (default is "Click here to edit") change when the field receives keyboard focus, to something that includes instructions for pressing enter to edit, such as "Click here or press enter to edit." The defaultViewText is overridable, so I imagine the focused view text should also be overridable.

The component already binds functionality to the focus and blur events, so I imagine it shouldn't be too hard to include a change of the text.

        