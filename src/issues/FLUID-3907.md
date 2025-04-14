---json
{
  "title": "FLUID-3907",
  "summary": "achecker issues with language in html tag",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2010-12-15T15:36:41.020-0500",
  "updated": "2014-07-30T15:42:53.803-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": "win xp, ff 3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-30T15:42:53.801-0400",
      "body": "Running the progress demo through achecker did not produce any known or likely issues.\n"
    }
  ]
}
---
Run <http://build.fluidproject.org/infusion/demos/progress/html/progress.html> through achecker.ca.  Two errors:

* Error Line 3, Column 1: Document language not identified.

\<html xmlns="<http://www.w3.org/1999/xhtml>">\
\<head>\
\<meta http-equiv="Content-Type" content="text ...

Repair: .

* Error Line 3, Column 1: Document has invalid language code.

\<html xmlns="<http://www.w3.org/1999/xhtml>">\
\<head>\
\<meta http-equiv="Content-Type" content="text ...

Repair: Add a valid 2 letter or 3 letter language code as defined in the ISO 639 specification to the HTML 'lang' attribute.

        