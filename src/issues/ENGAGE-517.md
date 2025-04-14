---json
{
  "title": "ENGAGE-517",
  "summary": "Implement a refresh method for cabinet",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-03-17T12:05:18.000-0400",
  "updated": "2017-12-22T09:44:32.233-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-17T12:05:31.000-0400",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-22T13:16:07.000-0400",
      "body": "Added a refreshView() function so that drawers can be added after init.\n\nUnit tests covering this functionality have also been committed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T10:10:29.000-0400",
      "body": "Assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T08:55:06.000-0400",
      "body": "Review  - i)  it might be worth considering the use of jQuery.live for the binding of click handlers rather than the more cumbersome unbind/bind combination in addClickEvent.\\\nAlso, the existing naming of options \"startOpen\" has now become confusing since the option now applies to cases other than the initial state. I suggest that the two existing options \"startOpen\" and \"openByDefault\" be rationalised into a set that are clear about their expected time of action. I don't think the current implementation of \"refreshView\" is appropriate, since it will ignore any manual user interaction with the component and return the open/closed condition of all the drawers to the initial default. Instead, the refresh method should only alter the state of drawers which have been added since the last time it was called.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-25T10:34:52.000-0400",
      "body": "reopened based on Antranig's review\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-26T12:21:06.000-0400",
      "body": "Reimplemented the refreshView method so that it now only affects newly added drawers, instead of also resetting existing drawers.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-26T12:21:31.000-0400",
      "body": "assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-30T19:07:10.000-0400",
      "body": "Overall strategy is now looking good, with only some stylistic points:\n\ni) The handler logic between addClickHandlers and addDrawerKeyNav is duplicated - this should be factored into a common handler function.\\\nii) The exact semantic of which states are supported is ambiguous between these handlers, and the \"drawerAdjust\" function. The former considers that all states which are not \"open\" are closed, whereas the latter considers that there could be a 3rd option. This should be made consistent (preferably to the former model)\\\niii) drawerAdjust should make use of structures to simplify the argument list downstream. Whenever argument lists extend beyond one or two members, consider consolidating them into a modern-style \"options\" structure. The inner body could/should look something like this:\n\nvar stateDrawerOptions = {\\\nopen: {\\\nnewStyle: \"drawerOpen\",\\\noldStyle: \"drawerClosed\",\\\nariaValue: \"true\"\\\n}\\\nclosed: ... etc.\n\nthen later: \\\nvar options = stateDrawerOptions\\[state];\\\niv) Try to avoid the use of the \"this\" keyword wherever possible (which I think seems to be essentially everywhere) - for example, rather than (line 63) \\\ncontents.each(function (idx) {\\\n$(this).attr({\\\nuse contents.each(function( idx, element) {\\\n$(element).attr\n\nv) As per previous comment, the **exact** expectations of each function which accepts arguments which represent DOM nodes should be documented, e.g. line 244\n\n* @param {Object} drawer, a selector representing a single drawer\\\n  the function actually accepts anything \"jqueryable\" and this is \"probably\" deliberate and so should be documented.\n\nvi) getDrawerState function (line 247) could more cleanly be written as\n\nreturn that.model\\[fluid.getId(drawer)];\\\n(although note that in this case it will no longer accept selectors) - the guarding against \"null\" isn't really necessary.\n\nvii) If you can still get hold of Jacob, it might be worth reviewing with him whether the open/closed CSS styles could be better represented with i) based style applied to all \"drawer\"s and ii) a single further one representing \"open\" drawers. This would simplify the class manipulation logic - it is a style I have seen used in other situations in the component set\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-31T14:07:31.000-0400",
      "body": "Overnight I remembered the explanation that Jacob gave me, which I think was originally in the context of reorderer. He explained that given an element with \"variable appearance\" it was safer to organise its styles with the structure of a \"base style\" responsible for the coarse aspects of its appearance, with separate \"state\" based styles to tweak this for appropriate representation. The reason behind this is to avoid unappealing \"flashes\" in layout as styles are added and removed, since the element is \"always\" in a condition where its overall layout and size are roughly correct. This is more important on browsers which perform asynchronous layout such as Opera.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:32.232-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Implement a refresh method for cabinet

This should allow for the addition/removal of drawers and/or changing the contents of drawers

        