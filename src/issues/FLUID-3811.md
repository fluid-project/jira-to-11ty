---json
{
  "title": "FLUID-3811",
  "summary": "Previous changes / selections are persisting despite page being reloaded in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2010-10-18T15:32:55.490-0400",
  "updated": "2013-09-06T13:53:00.797-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Infusion Builder",
    "Inline Edit"
  ],
  "environment": "Windows 7, IE8\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3845/",
      "key": "FLUID-3845",
      "summary": "Simple Inline Edit text field is reading \"Edit Autocomplete\" with NVDA when entering Edit mode."
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3811/FLUID-3811-Builder.PNG",
      "filename": "FLUID-3811-Builder.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-20T09:55:56.059-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T12:39:49.803-0500",
      "body": "The accepted solution to disable IE caching does not work for our demo. <http://support.microsoft.com/kb/234067>\n\nTurning off caching in all browsers (<http://stackoverflow.com/questions/1341089/using-meta-tags-to-turn-off-caching-in-all-browsers>) doesn't have any effect either.\n\nOne solution suggested to put the META tags in a HEAD element after the closing BODY element, but this did not work (not to mention causing bad structure).\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T12:54:31.386-0500",
      "body": "I wonder if this problem is caused by the fact the text field is not inside a FORM element? More investigation is required.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-12-13T13:13:37.447-0500",
      "body": "some options here: <http://stackoverflow.com/questions/52213/browser-refresh-behaviour>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-17T12:45:56.209-0500",
      "body": "Screenshot of the builder page after selection was made previously and the page is refreshed. Checkboxes are cached, but download is disabled and no selection styling is applied.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-17T12:48:19.179-0500",
      "body": "This could be related to <https://fluidproject.atlassian.net/browse/FLUID-3845#icft=FLUID-3845> - disabling autocomplete may fix this problem in IE.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:31:15.255-0400",
      "body": "I can't reproduce either or these issued. If they can be reproduced, they should probably be two separate issues.\n"
    }
  ]
}
---
In Inline Edit, previous saved edits are persisting even though the user has refreshed the demo page.

To reproduce:\
1\. Make an edit. (i.e. Change "Untitled" to "foo")\
2\. Save.\
3\. Refresh.\
4\. Edited text resets to "Untitled".\
5\. Edit "Untitled".\
6\. "foo" appears in Edit mod.

In Builder, previous selections are persisting even though user has refreshed the page.

To reproduce:\
1\. Load the builder: <http://forge.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>\
2\. Make any selection.\
3\. Refresh page.\
4\. Notice that checkboxes are still selected, but Download is disabled and "selection" style is not applied to checked elements.\
(See attached image).

        