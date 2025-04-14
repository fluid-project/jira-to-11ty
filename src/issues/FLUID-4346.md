---json
{
  "title": "FLUID-4346",
  "summary": "Table of contents have a gap for the skipped headings in IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Harris Wong",
  "date": "2011-07-19T12:19:00.819-0400",
  "updated": "2014-06-25T15:58:45.390-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Table of Contents"
  ],
  "environment": "IE 7 (IE9 with IE7 browse mode)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4346/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-07-19T12:19:52.721-0400",
      "body": "The screen shot demonstrates the gap on the last bullet, between \"Humans\" and \"CATT\"\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-09-19T15:59:00.919-0400",
      "body": "I've just tested this issue in IE7 native, on Win XP. I am no longer seeing any gap. Harris, perhaps you could re-test in your IE7 mode so we can determine whether or not the issue has been resolved, or if it's an issue with the 'IE7 mode' ?\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-09-19T16:07:33.522-0400",
      "body": "Yes it was the IE9 ith IE7 browse mode.  I will test it on the VM to confirm. &#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:58:45.389-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
Steps to reproduce:\
\-------------------------------\
1\. Load fluid/infusion/src/webapp/standalone-demos/table-of-contents/html/TableOfContents.html\
2\. See the last bullet \
\>>"Humans" \
\[gap here]\
\>>>> "CATT"

        