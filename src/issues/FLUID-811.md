---json
{
  "title": "FLUID-811",
  "summary": "a11y - inline edit needs to alert the user that a field is editable in non-ARIA browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2008-06-23T20:08:44.000-0400",
  "updated": "2011-10-14T15:37:44.121-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-25T12:32:02.000-0400",
      "body": "To clarify, the text is read by Jaws when reading the page. After Jaws has finished reading the text of the page, tabbing to an Inline Edit field does not read out the text.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-05T09:55:23.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-05T09:55:58.000-0400",
      "body": "Currently it reads the field as a button, with the name of the button being the original text.&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-06-15T15:24:39.000-0400",
      "body": "In bSpace demo, one strategy is to augment the descriptive text located above the table (\"Editable items will highlight as you mouse over them. To edit an item click on the item\").&#x20;\n\nI did this for a demo I used in user testing (see \"User 6\" @ <http://wiki.fluidproject.org/display/fluid/Simple+Text+Inline+Edit+User+Testing+-+Round+3+Results>). &#x20;\n\nThe descriptive text reads \"Editable items will highlight as you mouse over them. To edit an item click on the item, press enter to edit and tab to save.\"&#x20;\n\nUser 6 brought up an important point: in this demo, the remove a row feature is also a button. It's possible that this will confuse the user (e.g. they press enter to try to edit the remove row button and inadvertantly delete a row). Buttons behaving in different ways on the same page.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T13:10:15.610-0500",
      "body": "Infusion 1.3 Update:\n\n* Simple Inline Edit + NVDA: Good. Announces editable fields as buttons after reading contents of the field.\n\n- Simple Inline Edit + JAWS: Outstanding issues. Announces fields as links, but immediately followed by reading of the current URL. Contents of the field not read. (Related to FLUID-3884?)\n\n* Rich Text Inline Edit + JAWS: No feedback given. When focus is placed on editable field, the current URL is read instead.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-10-14T15:37:44.111-0400",
      "body": "This is no longer an issue because there is a tooltip that describes how to activate the inline edit.&#x20;\n"
    }
  ]
}
---
Currently with Jaws, only the value of the field is read when it gets focus. There is nothing audible that would tell the user that a field is editable. Perhaps a label would do the trick.

        