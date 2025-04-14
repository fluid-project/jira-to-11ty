---json
{
  "title": "FLUID-2766",
  "summary": "Feature Request: Styles for typical form layouts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-05-25T14:08:17.000-0400",
  "updated": "2014-04-02T16:30:01.072-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2481/",
      "key": "FLUID-2481"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-05-25T14:45:26.000-0400",
      "body": "FSS already has a very basic mechanism to lay out listed form controls, like:\\\n\\<form class=\"fl-controls-right\">\\\n\\<ol>\\\n\\<li>\\\n\\<label class=\"fl-label\" for=\"xxxxx\">Example Label\\</label>\\\n\\<input type=\"xxxxx\" id=\"xxxxx\" />\\\n\\</li>\\\n\\</ol>\\\n\\</form>\n\nWould look like;\n\n| ------------\\[label]  | \\[control]------- |\n| --------------------- | ----------------- |\n\n...and if you used .fl-controls-left, you would see:\n\n| \\[label]------------ | \\[control]------- |\n| -------------------- | ----------------- |\n\nhowever for UI Options the markup is in flux, since we're experimenting with best screen reader techniques.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T11:55:02.000-0400",
      "body": "Does the current implementation meet your needs?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-26T14:02:54.934-0400",
      "body": "We have some styles contributed from CollectionSpace, see <http://wiki.fluidproject.org/display/fluid/FSS+Contributor+Gallery>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:29:56.666-0400",
      "body": "We're deprecating FSS.\n"
    }
  ]
}
---
Forms typically have multiple rows of right-aligned labels to the left of one or more left-aligned controls. Much HTML and CSS (including our own) seem to use various shenanigans to get the labels to line up nicely with the controls. Sometimes tables are used in weird ways; sometimes \<br/> tags are used to add spacing. Sometimes all of the left-side labels are grouped in a single \<div> while all of the right-side controls are grouped in a single other \<div> (whereas it would seem to make sense that a single left-side label should be grouped with its associated right-side controls) (at the time of writing, I see this in our UIOptions template).

It would be really nice if the FSS had some styles that would make this layout super easy given straightforward, logical markup, such as\
\<div class="fl-form-row">\
\<div class="fl-form-row-label">Address:\</div>\
\<div class="fl-form-row-control">\<textarea .../>\</div>\
\</div>

        