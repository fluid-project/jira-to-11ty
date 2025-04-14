---json
{
  "title": "FLUID-1528",
  "summary": "Text that is displayed on more than one line will not be completely visible in edit mode.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Reopened",
  "reporter": "Justin Obara",
  "date": "2008-09-09T13:00:49.000-0400",
  "updated": "2017-01-16T09:31:45.936-0500",
  "versions": [
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
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF 50 (macOS 10.12)\\\nFF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nChrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE6 (Win 2000)\\\nIE 11 (Win 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-937/",
      "key": "FLUID-937",
      "summary": "Text is larger than edit field"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-972/",
      "key": "FLUID-972",
      "summary": "Text with words seperated by multiple spaces, aren't completely  visible when re-entering edit mode"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-957/",
      "key": "FLUID-957"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-992/",
      "key": "FLUID-992"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1528/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1528/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-09T13:02:19.000-0400",
      "body": "'screenshot-1' shows the text outside of edit mode\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T13:16:49.000-0400",
      "body": "'screenshot-2' shows the same string of text as 'screenshot-1' but this time in  edit mode. Notice that the text isn't completely visible.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T13:22:30.000-0400",
      "body": "This problem can become more prevalent with smaller screen resolutions and browser windows, and with larger font sizes.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:51:34.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T13:01:49.000-0500",
      "body": "This issue cannot be resolved, along with <https://fluidproject.atlassian.net/browse/FLUID-889#icft=FLUID-889> and others. The behaviour of single-line input fields in browsers is \"magic\" and inconsistent when newlines and other special characters are entered. If multiline text is required, the integrator should supply a multi-line edit view, such as textarea or rich equivalent.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-07T13:39:18.000-0500",
      "body": "Re-opened as this issue has to do with long text entered in an inline edit field that is then displayed on multiple lines in view mode. It does not have to do with attempting it to display on two lines. That being said it may be out of our control anyways.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T17:13:49.000-0500",
      "body": "I have adjusted the behaviour to ensure \"scroll to end\" even if \"selectOnEdit\" is enabled. Please reverify and determine if this new behaviour is more acceptable.\n\nAt revision 5981\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-10T08:52:46.000-0500",
      "body": "design-watched\n\nI'm marking this one for the design team to look at.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-10T08:53:25.000-0500",
      "body": "leaving it open until the design team determines the appropriate behaviour\n"
    }
  ]
}
---
Text that is displayed on more than one line will not be completely visible in edit mode.

Steps to reproduce:

1\) Open simple inline edit demo on the build site: <http://build.fluidproject.org/infusion/demos/inlineEdit/>

2\) Edit one of the inline edit fields with a long string of text, such as "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nunc ac tortor convallis consequat sed non metus. Sed magna dui, tempor et mattis vulputate, feugiat ut metus. Ut ut elementum lacus. Vivamus erat elit, volutpat et molestie consectetur, congue eget nisl. Suspendisse arcu nulla, vestibulum quis ornare quis"

3\) Save the change by pressing the enter key

4\) Reopen the string of text in edit mode. Notice that editable text is not completely visible.

        