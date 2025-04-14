---json
{
  "title": "FLUID-2398",
  "summary": "Minimum font size control changes the text size even when the base size is larger then the minimum.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2009-03-25T09:52:05.000-0400",
  "updated": "2011-06-10T10:19:29.983-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2394/",
      "key": "FLUID-2394",
      "summary": "Minimum text size implementation not appropriate"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2398/FLUID-2398patch.txt",
      "filename": "FLUID-2398patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T09:53:24.000-0400",
      "body": "Jacob's suggestion for the implementation of resizing things that are too small: grab the nodes with the fl-font-size-\\[<100] classname, get their computed style, add a size to the node if they are too small.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-31T09:43:39.000-0400",
      "body": "Gary's comment from the mailing list:  'It may be worth adding a balloon help text to the Minimum Text Size label that states the behavior, something like: \"Any text smaller than this size will be increased to the size you specify.  All larger text sizes will remain unaffected.\"'\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-15T11:58:15.000-0400",
      "body": "Fixing this issue implies an API change. The old default site setting of 'textSize' should really be 'minTextSize' in order to be clearly differentiated from 'baseTextSize'.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-15T12:01:47.000-0400",
      "body": "I've attached a patch that starts to fix this issue. There are TODOs in the patch that explain what's left.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-27T14:43:05.000-0400",
      "body": "Fixing this issue will require an API change which we should be careful to document properly.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:20:25.944-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:41:25.502-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-10T10:19:29.980-0400",
      "body": "The new design of UIOptions changes the user expectations for the text size control. It's now a multiplication factor and the user expects all text on the page to be scaled accordingly.&#x20;\n"
    }
  ]
}
---
The implementation of the "minimum text size" is not necessarily what the user would expect.

To reproduce:

1\) Open <http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Decide that the size of most of the text looks just fine, but that the footer (the copyright, the "Portions of the Sakai...") is a wee bit too small.

3\) Click on Edit Preferences

4\) Adjust the "Minimum Text Size" slider to 9pt, in the hopes that the footer text will get a little bit bigger

5\) Click "Save and Apply"

In addition to the footer text getting a bit larger, **all** of the text on the page gets **smaller.** This is not what the user would likely expect or want in this scenario.

Some notes from the discussion on the mailing list:

"We have decided that it is important for integrators to specify their defaults in order for UIOptions to behave correctly. We could add a setting in the defaultSiteSettings called 'baseTextSize'. Then setting the minimum text size could check if the size is larger then the integrator specified base text size. If it is, we would set the base font for the user to the size they had specified and remove the scaled down text sizes. If not we would only remove the scaled down text sizes that are scaled to smaller then the base text size and leave everything else the same."

        