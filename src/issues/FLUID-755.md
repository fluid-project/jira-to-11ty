---json
{
  "title": "FLUID-755",
  "summary": "Saving an empty text box makes the Inline Edit component seem to disappear.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2008-06-10T15:42:12.000-0400",
  "updated": "2008-12-03T11:42:45.000-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-06-23T18:07:01.000-0400",
      "body": "We are still working out the right behavior here.  This is related to the storyboard where there is no value in an editable field when the user arrives on a page:  <http://wiki.fluidproject.org/x/zQAz>\n\nYou'll see that even though the group field is empty the inline edit discovery interaction of highlight and hover message apply.  For now, the interaction you describe should probably work the same way.  One of the challenges here is the varying contexts.  Sometimes it is really important for an empty field to be empty (in a particularly busy interface for instance or when there are lots of empty values so textually describing the emptiness is huge clutter and noise).  Other times it might not be bad to have a textual indication that the field is empty.  In Friday's design review we decided this was likely something controlled by the integrating app.  Does that make sense?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-23T18:16:26.000-0400",
      "body": "Currently, the highlight and hover behaviour is the same, regardless of whether or not the field is empty. The issue is that when the field is empty, it is very small, so that when you hover over it, for example, the yellow highlight is a very small area, and easy to miss (and probably hard to target).\n\nI notice that when you do click on it, the editable field defaults to a minimum width that is larger than the empty field - if the hover highlight were styled to also have this minimum width, might that address the usability issue?\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-26T19:11:46.000-0400",
      "body": "Based on discussions on the fluid-work mailing list, we will implement the following behaviour:\n\n1\\) An empty field can contain some invitation text, such as \"click  here to edit.\" This should be pluggable, so that implementers can choose not to have any text.\n\n2\\) This invitation text should be dimmed, or other wise different in appearance than 'normal' text.\n\n3\\) If there is not invitation text and the field is left empty, it should have some minimum with so that the invitation highlight is more noticeable.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-15T20:33:45.000-0400",
      "body": "Fixed, and merged from the branch back into trunk.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-07-17T17:42:49.000-0400",
      "body": "What is the minimum width when there isn't invitation text?  The fix looks great in the demo with invitation text.\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-17T23:06:32.000-0400",
      "body": "Daphne & I reviewed the min-width on the empty in-line edit span here: <http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>. We actually feel that in this case there is no \"good default\" for how large the empty field should be, as this totally depends on how much text is expected to be in the field. We feel the developer should have to set the size on this field explicitly (and we would provide a design pattern giving advice on how to determine this). Is it possible to, as part of the configuration process for this component, \"force\" the implementor to specify their own min-width for an empty field?\n\nAdditionally, is the text that is placed in an empty field configurable, so that \"Click to edit\" can be changed? We'd like it to be.\n"
    }
  ]
}
---
By editing a field, clearing the text out of the text box and pressing enter, the InlineEdit component appears to be visually removed from the page.\
The user can use keyboard navigation to reedit the field, but the mouse-clickable area is very small, and easy to miss.

        