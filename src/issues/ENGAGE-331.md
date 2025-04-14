---json
{
  "title": "ENGAGE-331",
  "summary": "On tap, tappables should highlight to indicate \"touched\" feedback",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "James Yoon",
  "date": "2010-02-05T16:30:56.000-0500",
  "updated": "2010-02-18T14:14:57.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-331/ENGAGE-331.patch",
      "filename": "ENGAGE-331.patch"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2010-02-05T16:31:01.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T11:09:05.000-0500",
      "body": "Justin will review and commit this fix.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-18T12:31:14.000-0500",
      "body": "Committed the changes to the engage-mobile.css file from Yura's patch <https://fluidproject.atlassian.net/browse/ENGAGE-331#icft=ENGAGE-331>.patch In talking with Yura yesterday it was determined that this was the only place we needed to update it and then link in this file into all the necessary pages. I did a few other changes. 1) I added the highlighting to all inputs as well 2) for the comments page, I added the highlighting to the textarea 3) on the code entry page i changed the buttons from images to inputs with type=\"image\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-18T12:31:30.000-0500",
      "body": "Colin Clark will review my changes.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T12:45:41.000-0500",
      "body": "I've reviewed Justin's changes and suggested the following:\n\ncolinclark: your change in engage-mobile.css sets up this tap highlight for all links and inputs\\\ncolinclark: But then in guestbook.css, you add the same declaration to textareas\\\ncolinclark: Why not do it in one place?\\\ncolinclark: Similarly, you add the same style in Cabinet.css to cabinet handles\\\ncolinclark: Why not put the style in engage-mobile.css generically for all things tappable?\\\ncolinclark: which might include, at least, links, inputs, and textareas\\\ncolinclark: along with a generic fl- class for other types of tappables\\\njustin\\_o: ah okay... i see\\\njustin\\_o: that makes sense\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T12:46:08.000-0500",
      "body": "I've reopened this issue so Justin can make some minor tweaks to his fix based on my code review.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-18T13:27:18.000-0500",
      "body": "Made some modifications. Centralized the css for setting the tap highlight all into engage-mobile.css as per colin's suggestions. Also updated guestbook markup so that tap highlighting and activation would work on the label \"add note\". And changed the container of the icon to be a span so that it would pass validation.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T14:14:57.000-0500",
      "body": "Justin's latest commit at r9435 addresses this issue nicely. +1 for inclusion in Engage 0.3b\n"
    }
  ]
}
---
Buttons, list items, etc. should highlight to a colour (say, blue) to indicate that the user successfully tapped on a particular item. See <http://wiki.fluidproject.org/display/fluid/Mobile+wireframes%2C+draft+9#Mobilewireframes%2Cdraft9-Guidelines...fortappingonatappable>

        