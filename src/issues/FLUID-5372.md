---json
{
  "title": "FLUID-5372",
  "summary": "Increasing font size does not increase width of UIO panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2014-05-15T13:44:56.560-0400",
  "updated": "2016-11-08T09:47:14.783-0500",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-05-15T13:46:39.918-0400",
      "body": "I am not sure what the correct behaviour should be in this case.\n\n* Should the UIO panel stay a fixed width so the user can scroll through all preferences easily?\n* Should UIO expand to fill the available space, but this would require the user to scroll both the UIO panel AND the browser to see the last item in the panel.\n"
    },
    {
      "author": "Stanislav Shterev",
      "date": "2016-05-05T12:42:15.205-0400",
      "body": "I will have a look at the issue and try to fix it.\n"
    },
    {
      "author": "Stanislav Shterev",
      "date": "2016-05-05T15:57:10.649-0400",
      "body": "I have a made a fix for that specific demo. <https://github.com/styki/infusion/tree/FLUID-5372>. However, if we want a general solution to the problem, JS has to be used to customize the body element.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2016-05-10T11:38:02.739-0400",
      "body": "I took a look at the solution @@Stanislav Shterev and I agree that a more general solution requires Javascript. Usually I'm hesitant to go that route because we run the risk of our injected styles clashing with pre-existing styles.\n\nHowever maybe in this case it is acceptable because the user has made a decision to magnify everything, so it should also mean the \\<body> element scales accordingly as well.\n\n@@Alan Harnum, @@Cindy Li, or @@Justin Obara - do any of you have thoughts on this?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2016-05-12T12:32:12.068-0400",
      "body": "@@Justin Obara and I were taking a look at this and we think that adding or modifying the body styles via Javascript is risky since we don't want to create problems for the end user.\n\nAn alternative is to use $(document).width(); to set the width of the UIO container. We would want to trigger this adjustment each time a user has changed an option that affects the visuals (since it's conceivable that any of these options would change the document width).\n\nWould this cause a significant performance hit? Also when should the adjustment be calculated (i.e. on blur)? @@Antranig Basman any thoughts?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-05-12T12:42:39.022-0400",
      "body": "The use of JavaScript for layout generally creates jank and tends to be fragile. We should adopt a solution based on CSS if it is at all possible.\n"
    }
  ]
}
---
When increasing the text size using UIO that causes the width of the page content to expand, the UIO panel does not expand to fill this newly available space making it appear clipped on screen.

To reproduce:\
1\. Load the NOAA demo <http://build.fluidproject.org/infusion/demos/prefsFramework/>\
2\. Open UIO and increase the text size to 2\
3\. Horizontally scroll the browser all the way to the right.\
4\. Notice that UIO panel does not fill the entire space, but ends abruptly.

        