---json
{
  "title": "FLUID-2499",
  "summary": "Multiple whitespaces shows as single space in inline simple edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "James Yoon",
  "date": "2009-04-03T10:58:06.000-0400",
  "updated": "2009-04-03T11:28:03.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Mac OS X 10.5.6, Firefox 3.0.8\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-887/",
      "key": "FLUID-887",
      "summary": "multiple 'space' characters are displayed as a single space, using FF and Safari"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2499/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2499/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": []
}
---
For inline simple edit, when one types or pastes in multiple whitespaces (spaces and tabs in particular), it shows as expected in edit mode, but outside of edit mode it shows only as a single space. Going back into edit mode shows the multiple whitespaces that were put in.

        