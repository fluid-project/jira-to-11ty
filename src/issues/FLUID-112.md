---json
{
  "title": "FLUID-112",
  "summary": "The selector used in jQuery().droppable() is potentially inconsistent with the orderable finder function.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-11-15T10:58:53.000-0500",
  "updated": "2008-12-02T15:06:09.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-03-25T19:49:04.000-0400",
      "body": "I fixed this problem by replacing the accumulated selector string with a simple predicate function that looks like this:\n\n// Create a simple predicate function that will identify valid drop targets.\\\nvar droppablePredicate = function (potentialDroppable) {\\\nreturn (movables.index(potentialDroppable\\[0]) > -1);\t\\\n}\n\nThis approach is clean and consistent with our item finder function approach approach.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2008-04-04T10:21:57.000-0400",
      "body": "Using a predicate for this functionality is something I wanted to do for a while – kudos to jQueryUI for making the 'accept' option to droppable() allow for a predicate function.\n\nA couple of comments:\n\n1\\. The findItems structure has three aspects:  movables, selectables, and dropTargets.  droppablePredicate() is defined in terms of movables.  Why not define it in terms of dropTargets?  Aren't dropTargets and droppables synonomous?  Or, is it the other way around, and the function should be movablePredicate()?\n\n2\\. This is a minor stylistic observation:  there are other predicate functions in the fluid code, but they are of the form isX().  In Lisp/Scheme, one would append a 'p', as in 'droppablep'.  What is the JavaScript convention?  Is there one?  I did a quick look using Google, but didn't really find anything.&#x20;\n"
    }
  ]
}
---
Initializing the jQuery droppables requires passing a jQuery selector which is used by the droppable machinery to determine the droppable elements.  The technique used to create that selector is based solely on the id's of the elements.  This is fine when the orderable finder function also depends on id's.  But, the finder function definition is up to the client, and they could define a non-id based search, say, based on a css class.  In that case, it's doubtful that drag-and-drop will work properly.

In short:  the selector definition must be consistent with the orderable finder function output.

        