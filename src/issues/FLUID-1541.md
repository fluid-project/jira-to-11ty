---json
{
  "title": "FLUID-1541",
  "summary": "Inline Edit: Make the inner containers around the view and edit fields optional.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jacob Farber",
  "date": "2008-09-10T14:39:20.000-0400",
  "updated": "2014-03-04T09:05:06.008-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-945/",
      "key": "FLUID-945",
      "summary": "Inline Edit assumes there will always be a container element wrapping the display text. For simple scenarios, this is an unnecessary burden for the developer."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-09-10T14:44:31.000-0400",
      "body": "So this would require us to do two things:\n\n1\\. Automatically wrap the view text in a new element within the JavaScript code for the component.\\\n2\\. If an edit field is located in the DOM, we'd have to make an implicit association between the view text and the edit field for each inline editor.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:38:18.000-0500",
      "body": "The container around the editable view is now no longer required as part of the fix for <https://fluidproject.atlassian.net/browse/FLUID-844#icft=FLUID-844>. I don't believe it is possible to implement any further simplification as requested in this issue. Where do you propose the editable view be placed, in your \\<td> sample? I don't believe it would be correct to structurally modify the target markup for the InlineEdit control by means of \"rehousing\", say, the text \"EDIT ME\". How would the user expect to find this text again? The remaining part of this issue is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-945#icft=FLUID-945>.\n"
    }
  ]
}
---
As per the discussion with Colin and Michelle, it should no longer be required to assign the editables option, rather it should be optional for inlineEdits.

Eg:\
I should be able to say\
var multiEdit2 = fluid.inlineEdits("#container", {\
selectors : {\
text : "td:first-child"\
}\
});

which means my markup can look like this:\
\<tr>\
\<td>EDIT ME!\</td>\
\<td>George O'Malley \</td>\
\<td> Jun 10, 2008 1:12 pm \</td>\
\</tr>\
\<tr>\
\<td>EDIT ME!\</td>\
\<td>Meredith Grey \</td>\
\<td>Jun 6, 2008 1:12 pm \</td>\
\</tr>       &#x20;

rather than whats required right now (and contrary to the api documentation):

var multiEdit2 = fluid.inlineEdits("#container", {\
selectors : {\
text : "span",\
editables : "td:first-child"\
}\
});

and my markup would have to look like this:\
\<tr>\
\<td>\<span>EDIT ME!\</span>\</td>\
\<td>George O'Malley \</td>\
\<td> Jun 10, 2008 1:12 pm \</td>\
\</tr>\
\<tr>\
\<td>\<span>EDIT ME!\</span>\</td>\
\<td>Meredith Grey \</td>\
\<td>Jun 6, 2008 1:12 pm \</td>\
\</tr>       &#x20;

        