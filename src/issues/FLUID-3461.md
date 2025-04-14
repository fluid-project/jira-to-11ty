---json
{
  "title": "FLUID-3461",
  "summary": "Builder buttons are not read in NVDA",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2010-01-05T09:07:46.000-0500",
  "updated": "2014-03-03T11:20:14.020-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:05:56.554-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:14.019-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Alison originally reported that the buttons needed to be labelled with alt tags.

First, the buttons are not generated using images, so the addition of an alt tag did not work to solve this problem.\
Here is an example of the button markup

\<button title="Check all Modules" class="flc-infusionBuilder-checkAll fl-button-left fl-infusionBuilder-button">\
\<span class="fl-button-inner"> Select All \</span>\
\</button>

After exploring this further, we determined that the buttons are read in "focus mode" for nvda, but not in browse mode. In Jaws, the buttons are read without changing modes. In NVDA, focus mode is usually entered automatically for a form element, but for some reason it doesn't do that for our markup. Use NVDA (usually the insert key) + space to enter focus mode and then the button is read correctly.

There is a pretty good article on using nvda for testing on the webaim site which was useful in figuring out how to switch modes.\
<http://www.webaim.org/articles/nvda/>

        