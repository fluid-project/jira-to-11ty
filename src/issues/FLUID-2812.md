---json
{
  "title": "FLUID-2812",
  "summary": "fluidproject.org: skip to content, skip to nav links take you to home page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Alison Benjamin",
  "date": "2009-05-28T12:49:09.000-0400",
  "updated": "2009-06-03T13:39:31.000-0400",
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
      "date": "2009-05-28T13:37:56.000-0400",
      "body": "CMSMS can automatically generate anchor links. This seems to work better than the original solution of \\<a href=\"#content\">\\</a>\n\nThe new markup looks like:\\\n{anchor anchor='content' title='Jump to content'}\\\n{anchor anchor='nav' title='Jump to navigation menu'}\n"
    }
  ]
}
---
<http://www.webaim.org/techniques/skipnav/>

It is probably best to have hidden skipnav / skip content links (to a sighted user each page within the website is fairly short).&#x20;

But having visible skipnav/skipcontent links is also an option.&#x20;

        