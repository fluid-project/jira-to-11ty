---json
{
  "title": "FLUID-565",
  "summary": "Consider removing the 'activedescendent' from the Reorderer, in light of new understanding of its purpose",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Anastasia Cheetham",
  "date": "2008-05-02T15:46:21.000-0400",
  "updated": "2009-03-24T17:36:31.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2395/",
      "key": "FLUID-2395"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2008-05-02T15:51:05.000-0400",
      "body": "ARIA spec with respect to active descendant:\\\n<http://www.w3.org/TR/wai-aria/#activedescendant>\n\nBest practices example:\\\n<http://www.w3.org/TR/wai-aria-practices/#focus_activedescendant>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-24T10:04:44.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-24T14:06:09.000-0400",
      "body": "This fix looks, good, but I found one file that still mentions ariadescendent:\\\n/src/webapp/sample-code/keyboard-a11y/jquery-ui-tabs/jquery-ui-accessible-tabs.js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-24T17:36:31.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Discussions in the Fluid IRC channel on May 2, 2008 ( <http://wiki.fluidproject.org/x/NYsk> ) led to a new understanding of the purpose of the ARIA 'activedescendant' property, and the fact that it may not be appropriate for our purposes: it seems to be intended for the case where focus is **not** being put on to the descendant of a container (focus stays on the container itself), so you need a property to tell you which descendant is active. We **do** put focus on the descendant, and we already have another way of keeping track of which one is active, so we may simply not need it.

We should double-check the spec and the best practice guide, and decide whether or not to remove this property.

        