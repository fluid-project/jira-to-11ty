---json
{
  "title": "FLUID-957",
  "summary": "Investigate and formalise issues surrounding component size changes during change of state (\"seethe\", etc.)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2008-07-21T16:16:48.000-0400",
  "updated": "2014-07-07T15:27:17.986-0400",
  "versions": [
    "0.4",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1528/",
      "key": "FLUID-1528",
      "summary": "Text that is displayed on more than one line will not be completely visible in edit mode."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-972/",
      "key": "FLUID-972",
      "summary": "Text with words seperated by multiple spaces, aren't completely  visible when re-entering edit mode"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-972/",
      "key": "FLUID-972"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-21T19:36:40.000-0400",
      "body": "I'm not sure solution ii) is really inline with what I think is a major goal of this component: giving the user a preview of what their changes will look like/how they will change the page.&#x20;\n\nCertainly the transition from view to edit mode shouldn't change the screen layout, but perhaps the editing of the element should. For instance, in the Announcements Inline edit example (<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>), if the user types so many characters into the Subject field that that field expands in the table (either to the right or downwards), ideally, we would like to show that real-time as it occurs.I think the ideal interaction would be that upon entering edit mode, the text entry field expands to be the width of the current column (showing the user that is how many characters they can type without changing the layout). Then if we allow users to type more characters when they get to the end of the field and expand the column, then the text entry field should expand along with that column of the table. Coversely, if the field would wrap to the next line (as it is currently doing in the Announcements example), ideally that presentation would also be shown to the user (probably by having the text box & row expand downward) as they are editing.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T14:24:26.408-0500",
      "body": "Still an issue in Infusion 1.3, since editable field size is an unresolved issue (<https://fluidproject.atlassian.net/browse/FLUID-1528#icft=FLUID-1528>)\n"
    }
  ]
}
---
Many components can require changes to the "logical" size they require during state changes. The first and classic example of this is the Inline-edit "component", which manages (at least) two different views (with possibly widely different markup) on the same "state". There are a number of important, and possibly conflicting goals to be met when processing this change.

Firstly, it is important to avoid visual "seethe" - this is especially important when the editable components are closely packed, for example in a table layout. The state change to and from editable mode should occur without causing a disruption to the layout or causing the table to reflow or "jitter/seethe" in any way.

Secondly, it is important to provide "adequate" size for the editable view. Certainly for some editable components there is a "minimum usable size" - where this is a plain text entry field, this minimum size could be quite small. However, once we graduate to allowing more complex editable views such as date entry fields, this minimum size could be quite large, and probably often bigger than the non-editable view.

These two together suggest either or both of i) a "mixed" policy towards customising editable size, allowing the editable view to be able to specify its preferences in terms of minimum/preferred size, ii) a "floating" style to layout where the editable view is not actually positioned inline in the document flow but essentially "hovers" over the top of the position where the non-editable view rests.

ii) is quite attractive on many grounds since it guarantees the absence of seethe, but promises to create new issues as regards event capture and CSS - since the "render-only" view under this model would not actually be "hidden" but simply "occluded"....

        