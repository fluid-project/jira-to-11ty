---json
{
  "title": "FLUID-1545",
  "summary": "Keyboard reordering doesn't show error message when trying to move a portlet above a locked portlet",
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
  "date": "2008-09-11T11:33:27.000-0400",
  "updated": "2008-09-15T08:33:41.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-11T13:28:49.000-0400",
      "body": "This is an issue which has puzzled me for a while, since I saw evidence of this functionality lying around in the codebase and was not quite sure how it was meant to operate. The main issue is, how is this \"moving against locked\" functionality meant to relate to our other \"immovable items in list\" situations - for example, our list demo&#x20;\n\n<http://build.fluidproject.org/sakai-imagegallery-tool/tests/fluid-tests/manual/list/list.html>\n\nwe have \"non-reorderable items\" but the correct semantics there seem to be to move past them ( as for <https://fluidproject.atlassian.net/browse/FLUID-828#icft=FLUID-828>).\n\nSimilarly, in other \"portlet\" cases, the correct response is to \"move past\" - especially where this would permanently impede movability (for example, imagine a middle column consisting only of locked/inaccessible positions - I seem to remember a JIRA insisting that we be able to \"get past\" this using keyboard nav.\n\nSo it is unclear to me whether this use case is\\\ni) A special case relating to wrapping\\\nii) A special use case relating to a particular model of locked/immovable things at the heads of columns (perhaps scoped to ModuleLayout/LayoutCustomizer, or just a particular configuration of these)\n\nor both, or some further thing 😛\n"
    },
    {
      "author": "Gary Thompson",
      "date": "2008-09-11T15:10:43.000-0400",
      "body": "The decision is to make keyboard wrapping a configuration setting.  For the layout customizer, keyboard wrapping should be off, but for list reordering it should be on.  With this behavior, a keyboard \"up\" action on a portlet directly underneath locked content will not move up and a warning message will display (something like \"you cannot move this box above a locked box\").  Which also means that when wrapping is configured off, an \"up\" action at the top of a column does nothing, and the same for a \"down\" action when at the bottom of a column.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-12T17:00:28.000-0400",
      "body": "Fixed at revision 5530.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-15T08:33:41.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Keyboard reordering doesn't show error message when trying to move a portlet above a locked portlet

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Press the tab key until the one of the portlets has focus

3\) Using the keyboard navigate to a movable portlet and attempt to move it above the locked portlet.

Notice that no error message is presented and the portlet wraps to the bottom of the column

        