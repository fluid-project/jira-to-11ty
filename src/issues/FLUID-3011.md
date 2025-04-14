---json
{
  "title": "FLUID-3011",
  "summary": "Share the slider ARIA back with the jQuery UI community",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Benjamin",
  "reporter": "Michelle D'Souza",
  "date": "2009-07-13T13:04:44.000-0400",
  "updated": "2011-01-30T11:58:20.715-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2383/",
      "key": "FLUID-2383",
      "summary": "jQuery UI Slider is not screen reader accessible"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3011/FLUID-3011.txt",
      "filename": "FLUID-3011.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3011/FLUID-3011b.txt",
      "filename": "FLUID-3011b.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3011/FLUID-3011c.txt",
      "filename": "FLUID-3011c.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3011/FLUID-3011d.txt",
      "filename": "FLUID-3011d.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3011/FLUID-3011e.txt",
      "filename": "FLUID-3011e.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3011/FLUID-3011f.txt",
      "filename": "FLUID-3011f.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3011/FLUID-3011g.txt",
      "filename": "FLUID-3011g.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3011/FLUID-3011h.txt",
      "filename": "FLUID-3011h.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-13T13:06:42.000-0400",
      "body": "I will work with Alison on this task.\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-07-24T11:51:37.000-0400",
      "body": "in ui.slider.js - Adds aria-valuenow, aria-valuemin, & aria-valuemax to handle of slider. \\\nin slider.core.js - unit tests&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-07-27T10:15:50.000-0400",
      "body": "Previous patches <https://fluidproject.atlassian.net/browse/FLUID-3011#icft=FLUID-3011> & FLUID-3011b had whitespace problems.&#x20;\n\nFiles in FLUID-3011c:&#x20;\n\nin ui.slider.js - Adds aria-valuenow, aria-valuemin, & aria-valuemax to handle of slider. Also appends a div tag with tabindex=\"0\" to the handle to give it keyboard focus instead of a link with href=\"#\". We think using these div tags instead addresses a JAWS bug that we found that occurs when JAWS is focused on the handle of the slider: the screen reader then reads the URL of the Website the widget is embedded on.&#x20;\n\nin slider.core.js - unit tests&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-07-30T11:22:43.000-0400",
      "body": "I couldn't seem to replicate JAWS reading the URL of the website when the handle received focus. I don't know why this is. This patch removes the change I made that appends a div tag with tabindex=\"0\" to the handle and reverts this section of the code back to the way it was before.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-31T13:51:26.000-0400",
      "body": "Alison has started a thread on the jQuery accessibility list here: <http://groups.google.com/group/jquery-a11y/browse_thread/thread/18a538d6baf05e41>\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-08-04T10:12:05.000-0400",
      "body": "Scott from jQuery pointed out that the last two unit tests I provided tested value, not aria-valuenow, so I corrected this error.&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-11-30T10:28:42.000-0500",
      "body": "same as Fluid-3011f.txt, but updates for jQuery 1.7.2\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-11-30T10:30:53.000-0500",
      "body": "This gives the jquery slider a \"unittext\" default of null. When null is set to a string it becomes the aria value text of the slider. Please apply FLUID-3011g.txt first.&#x20;\n"
    },
    {
      "author": "Alison Benjamin",
      "date": "2009-12-04T13:13:23.000-0500",
      "body": "please apply this before applying fluid-3011h.txt\n"
    },
    {
      "author": "hhillen",
      "date": "2010-02-25T20:37:41.000-0500",
      "body": "I made some changes to this patch (<http://dev.jqueryui.com/attachment/ticket/4739/slider_additions_to_fluid_patch_HH.txt>)\n\nIt fixes the following:\n\n* Omission of \"unittext\" option used to result in the aria-valuetext attribute containing \"null\" as unit. Now, if the unittext option is not specified, aria-valuetext is not set.&#x20;\n\n- Aria-valuetext was not set until the value is actually changed. Now it is set when the slider is initialized.&#x20;\n\n* Changes to range slider handles now updated the aria-valuemin/max value of the opposite thumb&#x20;\n\n- Added two options for labeling slider handles (implemented using the 'title' attribute): \\\n  1: The \"label\" option can be used to specify a single label. If the slider has multiple thumbs, this label will be given to each handle, but with an index concatenated (e.g. \"color 1\", \"color 2\", etc) If the slider is a range slider, both thumbs will have the label, followed by \"min\" and \"max\" (e.g. \"price range min\", \"price range max\" \\\n  2: The \"labels\" options can be used to specify an array of labels for multiple thumb sliders (e.g. \"color picker red\", \"color picker blue\", \"color picker green\".&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-30T11:56:39.054-0500",
      "body": "Reopening these issues to add the frameworkcomponent\n"
    }
  ]
}
---
ARIA for the slider in TextfieldSlider was put directly into the component. We should create a patch for jQuery UI and share it back with them.

        