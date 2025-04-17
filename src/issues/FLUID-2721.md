---json
{
  "title": "FLUID-2721",
  "summary": "Internet Explorer rendering stops when some items are surrounded by list items",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Steven Githens",
  "date": "2009-05-14T08:50:40.000-0400",
  "updated": "2024-07-22T12:03:14.345-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Steven Githens",
      "date": "2009-05-14T08:54:30.000-0400",
      "body": "I accidentally hit enter before filling out the whole ticket, but I can't seem to have the permissions to edit it, so will be the details here:\n\nI don't have a great test case to check in yet, but so the issue doesn't get lost.\n\nI have a template as follows:\n\n\\<tr class=\"row\">\\\n\\<td style=\"width: 40px\">\\<img style=\"display:none\" alt=\"Move Assignment\" src=\"/sakai-assignment2-tool/content/images/4Arrows.png\" class=\"movehandle\" />\\</td>\\\n\\<td class=\"asnn-decorated-cell\">\\\n\\<p>\\\n\\<span style=\"display:none\" class=\"asnnid\">1\\</span>\\\n\\<span class=\"asnntitle\">Audio Scriptwriting\\</span>\\\n\\<img class=\"attachments\" src=\"/sakai-assignment2-tool/content/images/attach.png\" />\\\n\\<span class=\"draft\">draft\\</span>\\\n\\<img class=\"needsAttention\" src=\"/../../library/image/sakai/warn.gif\"\\\nalt=\"There is a problem with this assignment. For additional information, click Edit.\"\\\ntitle=\"There is a problem with this assignment. For additional information, click Edit.\" />\\\n\\<br/>\\\n\\<a href=\"\" class=\"editlink\">Edit\\</a>\\\n\\<a href=\"\" class=\"duplink\">Duplicate\\</a>\\\n\\<a href=\"\" class=\"gradelink\">Grade\\</a>\\\n\\<br/>\\\n\\<span class=\"opendatelabel\">Open: \\</span>\\\n\\<span class=\"opendate\">May 6, 2008 3:00 PM\\</span>\\\n\\<span class=\"duedatelabel\">Due: \\</span>\\\n\\<span class=\"duedate\">May 13, 2008 3:00 PM\\</span>\\\n\\<span class=\"groupslabel\">Restricted To: \\</span>\\\n\\<span class=\"groups\">Red Cohort, Yellow Cohort\\</span>\\\n\\</p>\\\n\\</td>\\\n\\<td class=\"asnn-decorated-cell\">\\\n\\<span class=\"inAndNew\">8/4\\</span>\\\n\\<a href=\"\" class=\"inAndNewLink\">10/4\\</a>\\\n\\</td>\\\n\\<td class=\"asnn-decorated-cell\">\\<input class=\"asnncheck\" type=\"checkbox\" />\\</td>\n\n\\</tr>\n\nThe row class up top is mapped to a \"row:\", and most of the classes here are mapped to comp tree ID's.\n\nIf I simply add a list around some of those spans, it simply doesn't render in IE.  No JS errors or warnings.\n\n\\<ul>\\\n\\<li>\\\n\\<span class=\"opendatelabel\">Open: \\</span>\\\n\\<span class=\"opendate\">May 6, 2008 3:00 PM\\</span>\\\n\\<span class=\"duedatelabel\">Due: \\</span>\\\n\\<span class=\"duedate\">May 13, 2008 3:00 PM\\</span>\\\n\\<span class=\"groupslabel\">Restricted To: \\</span>\\\n\\<span class=\"groups\">Red Cohort, Yellow Cohort\\</span>\\\n\\</li>\\\n\\</ul>\n"
    },
    {
      "author": "Steven Githens",
      "date": "2009-05-14T08:57:52.000-0400",
      "body": "I also can't surround them with Divs\n\n\\<div>\\\n\\<span class=\"opendatelabel\">Open: \\</span>\\\n\\<span class=\"opendate\">May 6, 2008 3:00 PM\\</span>\\\n\\</div>\\\n\\<div>\\\n\\<span class=\"duedatelabel\">Due: \\</span>\\\n\\<span class=\"duedate\">May 13, 2008 3:00 PM\\</span>\\\n\\</div>\\\n\\<div>\\\n\\<span class=\"groupslabel\">Restricted To: \\</span>\\\n\\<span class=\"groups\">Red Cohort, Yellow Cohort\\</span>\\\n\\</div>\n"
    },
    {
      "author": "Steven Githens",
      "date": "2009-05-14T09:01:36.000-0400",
      "body": "It appears that maybe the rendering is having issues going to various depths.  Because if I remove one of those wrapper \\<p> tags so the total depth is just one less, it does render in Internet Explorer.  This is working:\n\n\\<tr class=\"row\">\\\n\\<td style=\"width: 40px\">\\<img style=\"display:none\" alt=\"Move Assignment\" src=\"/sakai-assignment2-tool/content/images/4Arrows.png\" class=\"movehandle\" />\\</td>\\\n\\<td class=\"asnn-decorated-cell\">\\\n\\<span style=\"display:none\" class=\"asnnid\">1\\</span>\\\n\\<span class=\"asnntitle\">Audio Scriptwriting\\</span>\\\n\\<img class=\"attachments\" src=\"/sakai-assignment2-tool/content/images/attach.png\" />\\\n\\<span class=\"draft\">draft\\</span>\\\n\\<img class=\"needsAttention\" src=\"/../../library/image/sakai/warn.gif\"\\\nalt=\"There is a problem with this assignment. For additional information, click Edit.\"\\\ntitle=\"There is a problem with this assignment. For additional information, click Edit.\" />\\\n\\<br/>\\\n\\<a href=\"\" class=\"editlink\">Edit\\</a>\\\n\\<a href=\"\" class=\"duplink\">Duplicate\\</a>\\\n\\<a href=\"\" class=\"gradelink\">Grade\\</a>\\\n\\<br/>\\\n\\<div>\\\n\\<span class=\"opendatelabel\">Open: \\</span>\\\n\\<span class=\"opendate\">May 6, 2008 3:00 PM\\</span>\\\n\\</div>\\\n\\<div>\\\n\\<span class=\"duedatelabel\">Due: \\</span>\\\n\\<span class=\"duedate\">May 13, 2008 3:00 PM\\</span>\\\n\\</div>\\\n\\<div>\\\n\\<span class=\"groupslabel\">Restricted To: \\</span>\\\n\\<span class=\"groups\">Red Cohort, Yellow Cohort\\</span>\\\n\\</div>\\\n\\</td>\\\n\\<td class=\"asnn-decorated-cell\">\\\n\\<span class=\"inAndNew\">8/4\\</span>\\\n\\<a href=\"\" class=\"inAndNewLink\">10/4\\</a>\\\n\\</td>\\\n\\<td class=\"asnn-decorated-cell\">\\<input class=\"asnncheck\" type=\"checkbox\" />\\</td>\n\n\\</tr>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:29:51.356-0400",
      "body": "Steven Githens do you know if this is still an issue, or would you happen to have an updated test case that demonstrates this issue?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T12:03:14.345-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---

        