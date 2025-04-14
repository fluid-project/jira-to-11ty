---json
{
  "title": "FLUID-1540",
  "summary": "Can't use keyboard reordering to move a nested reorderer to the right column, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-09-10T14:26:22.000-0400",
  "updated": "2014-06-25T15:55:54.430-0400",
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
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "IE 6 (Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Simon",
      "date": "2008-09-10T18:31:06.000-0400",
      "body": "I tried using IE6 on Windows XP, but could not reproduce this issue. I noticed that as long as the whole \"Image Lightbox\" is highlighted when you press and hold the control button, the ctrl+(right arrow) works.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T10:25:25.000-0400",
      "body": "I'm still having this issue. I am not even able to select another portlet pushing the right arrow key from the \"image lightbox\" portlet. I am able to move back up to the locked portlet though\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:58:30.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-22T18:00:20.000-0400",
      "body": "I've tried reproducing this bug on IE7/XP, IE6/XP and FF3/Mac. No luck.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-23T08:23:44.000-0400",
      "body": "I've just retested this and the issue still occurs.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-23T11:43:01.000-0400",
      "body": "I was able to reproduce this issue\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-23T12:53:58.000-0400",
      "body": "I can't even move the focus to the other column using the arrow keys when the lightbox portlet has focus.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-08T19:15:28.000-0500",
      "body": "Something bad and unfortunately has happened... I made myself up a virtual machine with XP in order to test this issue. Initially, I could reproduce the issue in the IE6 which came with it. I then installed Visual Web Developer in order to debug the issue - now the keyboard handling works correctly - even if VWD is not running. The version string which is reported by IE6 is 6.0.2900.2180.xpsp\\_sp2\\_rtm.040803-2158 - could you report the one in which it fails, to see if VWD has bumped this in any way?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-09T08:54:33.000-0500",
      "body": "The version of the one that I'm using is 6.0.2900.2180xpsp\\_sp2\\_gdr.080814-1233\n\nI'm not sure, but maybe gdr vs rtm is the issue\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-30T11:12:38.000-0500",
      "body": "Since this issue is hard to reproduce, occuring on just **some builds** of IE6, I have downgraded it to minor...\n"
    },
    {
      "author": "y z",
      "date": "2010-04-14T11:12:43.000-0400",
      "body": "Somewhat related issue: when you are focused on the portlet in the right column, it is impossible to navigate to the movable portlet in the left column, the focus will always jump to the top fixed position portlet.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:40:48.036-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:54.419-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
Can't use keyboard reordering to move a nested reorderer to the right column

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/portal/portal.html>

2\) Tab till one of the portlets has focus.

3\) using the arrow keys put focus on the "image lightbox" portlet

4\) press ctrl+(right arrow). Notice that the portlet doesn't move to the right column

Note if you use the mouse to put the "image lightbox" portlet in the right column, you can use the keyboard to move it back to the left column

        