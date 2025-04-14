---json
{
  "title": "FLUID-2821",
  "summary": "fluidproject.org homepage: available for download link is broken / nonexistent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Alison Benjamin",
  "date": "2009-05-28T13:17:40.000-0400",
  "updated": "2011-03-17T14:56:34.793-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-16T17:00:06.000-0400",
      "body": "If we change the styling on the h3 from\\\n.infusion\\_panel h3 {\\\nbackground:transparent url(uploads/images/panel\\_TL\\_corner.png) no-repeat scroll left top;\\\ncolor:#FFFFFF;\\\nmargin:0;\\\npadding:10px 0 50px;\\\ntext-align:center;\\\nposition:absolute;\\\nwidth:100%;\\\n}\n\nto\n\n.infusion\\_panel h3 {\\\nbackground:transparent url(uploads/images/panel\\_TL\\_corner.png) no-repeat scroll left top;\\\ncolor:#FFFFFF;\\\nmargin:0;\\\npadding:10px 0 25px;\\\ntext-align:center;\\\nposition:absolute;\\\nwidth:100%;\\\n}\n\n*\n  *\n    * Change the bottom padding from 50px to 25px \\*\\*\\*\n\nit still looks pretty good (tested only on FF3.5 winXP) and links in the top row of text in these panels will still be clickable.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-19T14:49:57.000-0400",
      "body": "Resolved this issue by removing the link (Jess's suggestion). This will remain an issue for other links in the first two lines of these text blocks in the infusion page, unless the css is changed.\n"
    }
  ]
}
---
go to: \
<http://fluidproject.org/products/infusion/>

the "available for download" link in the lower right "open source" lozenge is not clickable. &#x20;

        