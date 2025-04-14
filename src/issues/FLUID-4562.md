---json
{
  "title": "FLUID-4562",
  "summary": "UIO settings saved in the cookie are discarded once quit the browser",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2011-11-29T14:54:50.653-0500",
  "updated": "2017-09-26T12:41:03.903-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Safari, Chrome, Opera and sometimes firefox&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-11-29T14:55:19.335-0500",
      "body": "The issue seems a result of our improper default value for the cookie \"expiry\" attribute, which is blank by default:\n\n<https://github.com/fluid-project/infusion/blob/master/src/webapp/components/uiOptions/js/Store.js#L60>\n\nAccording to <http://www.tutorialspoint.com/javascript/javascript_cookies.htm>, which says,\n\nExpires : The date the cookie will expire. If this is blank, the cookie will expire when the visitor quits the browser.\n\nSo, a blank default apparently is not enough if what we meant is to keep the user-selected settings forever. We probably should consider to have a default expiry value of 50 years from now.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-10T13:53:47.018-0400",
      "body": "I'm not really sure what we want the default to be for the cookie expiration.&#x20;\n\n* browser quit\n* some number of days\n* forever\n* etc.\n\n@@Dana and @@Jonathan Hung did you have any thoughts?\n"
    }
  ]
}
---
The bug report from Jonny:

"On my site <[http://abledaccess.com](http://abledaccess.com/)> when I change the display setting via uiOptions in the latest versions of Safari, Chrome, Opera and IE, then quit each browser, my settings I set have been reset. Same goes with your demo across said browsers, as well. I saw on Colin's computer this behaviour doesn't happen in Firefox, but it happens on my machine in Firefox, as well. But the reset did happen in Safari, Chrome and Opera on his computer. "

        