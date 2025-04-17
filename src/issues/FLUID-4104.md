---json
{
  "title": "FLUID-4104",
  "summary": "When tabbing, focus stays on item after you hit enter.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "John Kremer",
  "date": "2011-02-22T12:47:53.526-0500",
  "updated": "2015-06-12T08:59:00.496-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Win 7 IE9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:51:18.626-0400",
      "body": "I'm not sure this is a bug. The focus is staying on the element that was activated and is the current page, perhaps this is, in fact, the correct behaviour. Dana and Jonathan Hung what do you think?\n"
    },
    {
      "author": "Dana",
      "date": "2015-06-09T15:24:58.998-0400",
      "body": "Justin Obara could you update the links to the build site so we can try it out. they seem to be broken.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-10T09:02:58.979-0400",
      "body": "Dana I updated the link to the demo\n"
    },
    {
      "author": "Dana",
      "date": "2015-06-10T11:08:51.074-0400",
      "body": "Justin Obara Jonathan Hung this behaviour looks good to me - focus should stay on the current page (page 3). I questioned the active hover state/showing the first/last name when you hover over the 3 (i.e. should it be inactive when it's the current page?), but I think it's fine the way it is.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-12T08:58:22.114-0400",
      "body": "Dana and Jonathan Hung I don't know if the tooltip for the active page is necessary, but I'm not sure it's causing any harm either. I'm going to close this as won't fix and if you think we need to address the tooltip, please file it as a new jira.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-12T08:59:00.495-0400",
      "body": "Focus remaining on the active page is not a bug. See comments.\n"
    }
  ]
}
---
Test 18: Keyboard, Enter Page

* Procedure - Complete Test 17 -  Using the keyboard, tap 'shift-tab' or 'left-arrow' key until page '3' has focus - Tap the 'enter' key
* Results\*\* The third page of items should be displayed\*\* The "x - y of z items" should have been set appropriately\*\* Page '1'  should now be a     link to the first page\*\* Page '3' should now be text only, no link associated with it\
  &#x20;         o The '< previous' link should now be enabled\
  &#x20;         o Page '4' should have focus

Focus stays on Page 3, does not go to Page 4.

<http://build.fluidproject.org/infusion/demos/pager/>

        