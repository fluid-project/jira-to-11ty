---json
{
  "title": "FLUID-3610",
  "summary": "UI Options: when navigating with the keyboard, you can't tab out of the slider.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "y z",
  "date": "2010-04-06T13:37:24.000-0400",
  "updated": "2010-04-09T16:20:10.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Chrome 4, FF 3.6, FF 3, IE 8, IE 7, IE 6 (Win XP) \\\nFF 3.6, IE 8 (Win 7) \\\nSafari 4 (Mac OS 10.5) \\\nFF 3.6, Safari 4 (Mac OS 10.6)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3599/",
      "key": "FLUID-3599",
      "summary": "With keyboard, tabbing gets stuck at \"minimum text size\" (Safari 4/OS X 10.5)"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3610/FLUID-3610.patch",
      "filename": "FLUID-3610.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3610/FLUID-3610-b.patch",
      "filename": "FLUID-3610-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3610/FLUID-3610-c.patch",
      "filename": "FLUID-3610-c.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-04-06T18:49:40.000-0400",
      "body": "I've traced this issue back to a bug in jQuery UI when a Slider widget is used inside a modal Dialog widget (i.e. with the modal: true option set). Ordinary links and buttons seem to be focusable as usual, but the Slider will forever steal keyboard focus and refuse to give it up.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-06T18:53:43.000-0400",
      "body": "I've created a simple test that shows this problem, located here:\n\n<https://source.fluidproject.org/svn/scratchpad/jquery-ui-dialog-and-slider/DialogAndSlider.html>\n\nI will escalate the issue to the jQuery UI community. In the meantime, We'll have to change the UI Options demo to use either a non-modal dialog box or remove the dialog altogether.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-06T19:04:12.000-0400",
      "body": "Here's a patch that removes the jQuery UI Dialog widget altogether and replaces it with a simple slide up and down effect. I'm not convinced this is particularly well-designed--I think perhaps a sliding drawer with a real affordance for opening/closing it might be better.\n\nThe good news is that removing the dialog avoids a number of long-standing issues stemming from modality and the difficulty (impossibility?) of correctly trapping focus and making a screen-reader accessible experience.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-06T19:05:08.000-0400",
      "body": "Justin, can you review this patch and talk to James to see if it suits our standard of quality. If not, perhaps he can suggest something simple for this release, and then we can revisit this demo for Infusion 1.3.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-06T19:07:00.000-0400",
      "body": "James, can you take a look at this patch and give us your designerly opinion? It's not ideal, but perhaps it could get us through this release. Alternatively, we could put the dialog back in but make it non-modal, or come up with our own novel interaction. This demo is awfully raw to begin with, so we may want to replace it for the Infusion 1.3 release.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-06T19:22:46.000-0400",
      "body": "Here's a slightly improved patch with the panel sliding out at the bottom of the page, below the \"Edit Appearance\" button. This should make it easier to navigate to with the keyboard, and more discoverable for screen reader users.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-07T11:54:54.000-0400",
      "body": "Yura is working on a patch for this issue in the Sakai 3 integration demo of UI Options.\n\nYura, when you're done and have attached your patch to this issue, assign it to Michelle and she'll review and commit.\n"
    },
    {
      "author": "y z",
      "date": "2010-04-07T13:48:16.000-0400",
      "body": "This patch updates the component demo and integration demo with a new ui options handling style (from modal dialog to simple slideup/down element)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-04-09T16:20:10.000-0400",
      "body": "Reviewed and committed.&#x20;\n"
    }
  ]
}
---
UI Options: when navigating with the keyboard, you can't tab out of the slider.

Steps to reproduce:

1\. Open up the UI Options demo at <http://build.fluidproject.org/infusion/demos/uiOptions/demo.html>\
2\. Click the "Edit Appearance" button\
3\. Tab four times to get focus on the first jQuery UI Slider ("Maximum text size")\
4\. Try to move focus off the slider using Tab or Shift-Tab. Neither work.

This issue affects all non-mouse users of UI Options, and so qualifies as a blocker.

        