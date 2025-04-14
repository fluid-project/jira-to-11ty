---json
{
  "title": "FLUID-1955",
  "summary": "Investigate strategies for restoring fields to a hidden condition for JAWS after they have once been shown",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Antranig Basman",
  "date": "2008-12-10T14:22:26.000-0500",
  "updated": "2014-07-08T10:56:31.208-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1953/",
      "key": "FLUID-1953"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:14:56.494-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-08T10:56:31.164-0400",
      "body": "Could have been fixed with updates to inline edit or with later versions of Jaws.\n"
    }
  ]
}
---
Pasting transcript of email discussion on fluid-work:

Hi there Everett - thanks for your investigations. On the first point,\
there seems to be a deeper problem, since we are indeed hiding the\
edit control with display:none and not visible:hidden - the latter which\
I don't think even has any visible effect - in the example you have\
put up, only the 3rd field, that which is marked with display:none,\
is not shown visibly.\
This is almost certainly some form of bug in JAWS - since the edit\
field is correctly hidden on startup, but not after it has once been\
shown, even if it is returned to the same CSS condition. But the\
question is how we can effectively work around this problem - \
I can think of only two things to try\
i) mark the input field itself, as well as its containing \<span>,\
with display:none, or\
ii) when it is "hidden", physically remove it from the document rather\
than just hiding it.

ii) promises to be perhaps more effective, but also more problematic,\
since the effect of removing some more complex editable control such\
as an FCKEditor will very likey be destructive.

Cheers,\
A.

E.J. Zufelt wrote:\
\> \
\> Good morning,\
\> \
\> After having tested the inline edit example (\
\> <http://build.fluidproject.org/fluid/fluid-components/html/InlineEdit.html> )\
\> with JAWS 10, I have the following feedback.\
\> \
\> 1. After I press enter to submit changes to the editable text the edit\
\> control remains visible to JAWS.  It was mentioned on irc yesterday that\
\> this could be because the edit control is being hidden with visible:hidden.\
\> I have tested this and it is correct.  The edit control needs to be hidden\
\> with display:none.\
\>&#x20;

        