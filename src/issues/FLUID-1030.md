---json
{
  "title": "FLUID-1030",
  "summary": "Inline Edit tooltip needs to be initialized *after* page load",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-25T16:15:13.000-0400",
  "updated": "2009-06-03T13:43:47.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 (Win XP)&#x20;\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-973/",
      "key": "FLUID-973"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-07-25T17:02:44.000-0400",
      "body": "I believe this is part of a documented bug for IE, where you can't append to a node unless you are a direct child of the node and the DOM is finished being parsed.\\\nPlease see ( <http://support.microsoft.com/kb/927917/en-us> )\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:24:54.000-0400",
      "body": "This was fixed in Infusion 0.4 by wrapping only the tooltip initialization code in a jQuery.ready call. This means that, if the user is employing a script block, the inline editor will instantiated first, and once the rest of the DOM is ready, the tooltip will be added.\n"
    }
  ]
}
---
Currently, the tooltip used by the Inline Edit must be initialized **after** the page loads fully, or IE will throw an error. We've wrapped the tooltip initialization code in jQuery() as a workaround, but this issue should be investigated further.

        