---json
{
  "title": "FLUID-2258",
  "summary": "The UI Options Dialog is virtually blank in simplified layout : using IE",
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
  "reporter": "Justin Obara",
  "date": "2009-02-18T10:00:03.000-0500",
  "updated": "2009-03-24T09:46:27.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6 (Win XP, Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2396/",
      "key": "FLUID-2396"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2258/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-18T10:00:58.000-0500",
      "body": "'screenshot-1' shows the UI Options Dialog missing almost all of its elements\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T11:28:39.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-17T12:42:46.000-0400",
      "body": "stopped the IE6 Disappearing content bug by removing position:relative on the fl-layout-linear class\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T15:00:43.000-0400",
      "body": "The fix to this issue looks fine, but:\n\nThe styles that were removed are actually only commented out. I'd suggest removing them, and moving the link to the article desribing the issue to this JIRA.\n\nAlso, there were two styles added to the stylesheet that don't seem relevant to this bug: .fl-ProgEnhance-show and .fl-ProgEnhance-hide.  Not sure why they were added...\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T15:11:43.000-0400",
      "body": "Ok, in talking to Jacob, it seems the commented styles are deliberately left there as a reminder to re-visit the issue, since the true nature of the problem is not yet entirely clear.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T15:12:18.000-0400",
      "body": "And the extra styles are a fix to <https://fluidproject.atlassian.net/browse/FLUID-2359#icft=FLUID-2359>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T16:05:50.000-0400",
      "body": "Comments in the code need to be refactored\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-23T12:22:31.000-0400",
      "body": "Removed pos data and position:relative !important; from linear enabled, as a fix for this bug:&#x20;\n\nIE Disappearing Content Bug (<http://www.whywaitwebs.com/blog/designers/internet-explorer-6-disappearing-content-bug/>)&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-23T16:34:45.000-0400",
      "body": "Ok, the commented info has been moved out.\\\nI still think a new JIRA should be opened for this, so that it doesn't get forgotten. It may be lower priority, but...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-23T16:37:11.000-0400",
      "body": "Verified fix using:\n\nIE 6 (Win XP)&#x20;\n"
    }
  ]
}
---
The UI Options Dialog is virtually blank in simplified layout&#x20;

Steps to reproduce:

1\) Open the Sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Open the UI Options Dialog by clicking the "Edit Appearance" button

3\) Change to the "Simplified Layout" and save the changes

Notice that the UI Options dialog is almost completely blank, with the exception of the header and the combo boxes

If you close the dialog and then reopen it, you will be able to see the dialog properly.

        