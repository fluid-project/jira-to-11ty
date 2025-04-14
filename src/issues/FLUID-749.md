---json
{
  "title": "FLUID-749",
  "summary": "OSDPL: Fix and activate OSDPL RSS feeds for front page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Allison Bloodworth",
  "date": "2008-06-10T02:39:10.000-0400",
  "updated": "2014-04-02T16:35:54.661-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T02:39:22.000-0400",
      "body": "Iteration20\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-11T15:44:46.000-0400",
      "body": "I figured out that the RSS feeds for the whole site (except the forums) are basically anything that is promoted to the front page. This is pretty much what we want since the news items (which we are currently creating as stories) are all promoted to the front page. So I changed the default for Story to check \"promoted to front page\" so our news stories will always be on the RSS feed.&#x20;\n\nAdditionally, I removed the icon from all Forum pages using a wildcard because two RSS icons were showing up on that page--one for the forums and one for the \"promoted to front page\" content. We may at some point want to remove the RSS icons from other pages if it is confusing for users and they think the are going to get an RSS feed of a particular page. In that case, we perhaps would only want it on the home page and the News (<http://osdpl.fluidproject.org/news>) page. However, that may not be the best idea because there could be other things promoted to the front page in the future (and the home page itself is right now).\n\nThe RSS feeds for the forums still need to be fixed--the problem created by patterns\\_by\\_tag is resulting in no posts being found, and an inaccurate message (\"There are no patterns in this category\") being displayed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-20T15:53:30.000-0400",
      "body": "RSS feeds are now activated for News and other Views (added the RSS argument to each View). However, front page RSS feeds are still not appearing.\n"
    }
  ]
}
---
update: Add RSS feed to the front page of the OSDPL. A possible solution would be to create a custom View for the front page and add the RSS feed argument to the View.

—\
RSS feeds exist on some pages, like <http://osdpl.fluidproject.org/forum/21> and <http://osdpl.fluidproject.org/forum/22> (and there may be others). However, these (particular) RSS feeds don't work due to problems created by the patterns\_by\_tag View. The arguments & URL in this View I think have to be adjusted. Additionally, we'd like RSS feeds to work for other pages, such as the OSDPL News (<http://osdpl.fluidproject.org/news>) and Recent Posts (<http://osdpl.fluidproject.org/tracker>).

        