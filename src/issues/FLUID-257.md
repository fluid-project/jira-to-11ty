---json
{
  "title": "FLUID-257",
  "summary": "Test Javascript enter-key activation on all browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Anastasia Cheetham",
  "date": "2008-02-19T12:53:40.000-0500",
  "updated": "2008-04-28T15:27:08.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-91/",
      "key": "FLUID-91"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-257/FLUID-257.patch",
      "filename": "FLUID-257.patch"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-03-04T14:50:17.000-0500",
      "body": "Took a quick spin in true IE 6, IE7, FF3b3, and FF2 on WinXP.\n\nIE6 - Enter key causes a \"default beep\" and brings you to the image.\\\nIE7 - Enter key causes a \"default beep\" and brings you to the image.\\\nFF2 - Enter key activates the image without any unexpected behaviour.\\\nFF3b3 - Enter key activates the image without any unexpected behaviour.\n\nThe default beep is a bit odd. Not sure if we can do anything to fix that in IE6 / 7.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-03-04T16:06:18.000-0500",
      "body": "Space bar does not appear to conflict with any JAWS specific commands. Hitting space bar in either Virtual Cursor on/off will just say \"Space\".&#x20;\n\nNormal browser behaviour for space bar is to scroll the window down.\n\nWindow Eyes would say \"Invalid key press\" when space bar is pressed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-03-05T13:43:05.000-0500",
      "body": "On FF2 and FF3 on OS X, the Enter key activates the link as expected. Space bar does not appear to do anything unlike on Windows.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-03-05T15:09:02.000-0500",
      "body": "Too hasty in closing bug. Re-opened due to my confusion about removing the dependency on lightbox.domNode.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-03-05T15:57:34.000-0500",
      "body": "Here's an option that gets rid of dependence on the activeItem completely, since we can guarantee that evt.target **is** the activeItem. I also changed the code to take the Lighbox's container element rather than the lightbox itself. This is your #2 option, Jonathan.\n\nThis is just a start. The code could be further cleaned up. One of my concerns is the way we search for any anchors within the event's target and just activate the first. Works reasonably for the Lightbox, but we could also choose to key of a known ID on one of the hyperlinks.\n\nI've only tested this in FF3. Please test it more widely and let me know what you think.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-03-06T11:08:39.000-0500",
      "body": "I wasn't sure how we can guarantee that the evt.target is the activeItem, so I did some looking.\n\nAccording to Quirksmode: <http://www.quirksmode.org/js/events_properties.html#target>\n\n\"Even if an event is captured or bubbles up, the target/srcElement always remains the element the event took place on.\"\n\nGood to know.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-03-11T15:57:37.000-0400",
      "body": "Fixed in r4723 by removing the dependency on lightbox.domNode and using the event's target instead.\n"
    }
  ]
}
---
The Lightbox code that responds to the Enter key needs to be tested on all browsers.

We also need todecide whether or not we want to map the Space bar to the same activation.

The code needs to be cleaned up and refactored (e.g. eliminate dependence on lightbox.domNode).&#x20;

        