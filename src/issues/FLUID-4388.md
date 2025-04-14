---json
{
  "title": "FLUID-4388",
  "summary": "ToC left over anchors before headers element after hide() is triggered",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Harris Wong",
  "date": "2011-08-05T15:31:59.170-0400",
  "updated": "2022-04-13T12:37:19.582-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0",
    "3.0",
    "4.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "Table of Contents",
    "UI Options"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4388/after.png",
      "filename": "after.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4388/before.png",
      "filename": "before.png"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-08-05T15:32:31.611-0400",
      "body": "Attached screenshots before and after showing the DOM tree differences.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-08-05T15:36:49.619-0400",
      "body": "Heidi suggested that the left over code should be cleaned after clicking hide().  Since show() created the anchors, the hide() do the opposite which is to remove. Conversation (Aug 04, 2011) below:\n\n(04:18:27 PM) heidi\\_: cindyli Justin\\_o when i turn off table of contents, the hidden anchor links that get added within the content aren't removed\\\n(04:21:38 PM) cindyli: heidi\\_: seems the turning off just hides the div without removing it. that's probably the expected behavior. am i right, harriswong?\\\n(04:22:44 PM) harriswong: cindyli: i think so.  it simply hides the visibility but it's not a remove function. \\\n(04:27:49 PM) heidi\\_: harriswong but turning it on is an add function, seems like unchecking it should do the opposite/remove ?\\\n(04:30:51 PM) harriswong: heidi\\_: are the left over anchors affecting anything upon hiding the ToC?\\\n(04:32:19 PM) heidi\\_: harriswong unused, unnecessary mark up? confusing links to screen readers? not sure how that affects things\\\n(04:32:33 PM) heidi\\_: just seems a little messy to leave them behind, when they are meaningless\\\n(04:33:36 PM) harriswong: heidi\\_: Then let's create a jira for it and have them removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T10:41:19.769-0400",
      "body": "According to the HTML5 spec ( <http://w3c.github.io/html/browsers.html#navigating-to-a-fragment-identifier> ) we don't need to insert the anchors anymore. Instead we should just use ( or add ) ID's to the relevant elements.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-04-13T12:37:19.447-0400",
      "body": "Resolved with <https://fluidproject.atlassian.net/browse/FLUID-6011#icft=FLUID-6011>\n"
    }
  ]
}
---
Steps to reproduce:\
1\. go to src/webapp/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html\
2\. click "Show tables of content", then "save and apply"\
3\. uncheck "Show tables of content", then "save and apply"\
4\. Go to the DOM and you will notice there are left over \<a> tags before the header elements.

        