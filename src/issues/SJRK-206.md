---json
{
  "title": "SJRK-206",
  "summary": "UIO Table Of Contents does not render headings if active at page load",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Simon Bates",
  "date": "2019-01-25T15:02:39.366-0500",
  "updated": "2019-07-09T16:36:29.482-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-07-09T16:36:29.482-0400",
      "body": "If the headings are dynamically added to the page, the Table of Contents will need to be run after it or at least refreshed after it. Perhaps hooking it up to a [MutationObserver](https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/MutationObserver.js) would be the best way.  Might make more sense upstream in Infusion. What do you think?\n"
    }
  ]
}
---
If UIO Table Of Contents is active at page load, the list of headings is not rendered.

To reproduce:

* With the UIO Table Of Contents off, navigate to the Browse Stories page
* Open UIO and turn Table Of Contents on
* The page headings are rendered under "Table of Contents"
* Click Build Your Story
* Click Browse Stories

Expect:

* Table Of Contents to display as before

Actual:

* The "Table of Contents" heading is shown but no page headings are listed

To get the headings back again:

* Open UIO and turn Table Of Contents off
* Reload the page
* Open UIO and turn Table Of Contents on

        