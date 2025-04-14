---json
{
  "title": "FLUID-2718",
  "summary": "UI Enhancer cookie can have added features such as path and expiry date",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-05-13T10:27:58.000-0400",
  "updated": "2011-06-27T16:25:37.499-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": "All browsers/environments\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2718/FLUID-2718.txt",
      "filename": "FLUID-2718.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-05-13T11:22:01.000-0400",
      "body": "I used this version of the code to make UI Options work on the website for more than one page.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-27T16:25:37.496-0400",
      "body": "This was done as part of <https://fluidproject.atlassian.net/browse/FLUID-4299#icft=FLUID-4299>\n"
    }
  ]
}
---
Currently the UI Enhancer is saving a cookie with a name and value and leaving the other cookie fields as default. We may wish to provide the ability to save the cookie with non-default options.

Some useful references for cookies in javascript:\
<http://www.quirksmode.org/js/cookies.html>\
<http://www.w3schools.com/JS/js_cookies.asp>\
<http://www.elated.com/articles/javascript-and-cookies/>

The following is a typical cookie string assigned to document.cookie:\
document.cookie =  'ppkcookie1=testcookie; expires=Thu, 2 Aug 2001 20:47:11 UTC; path=/'

The format is generally:\
1\. First the name-value pair ('ppkcookie1=testcookie')\
2\. then a semicolon and a space\
3\. then the expiry date in the correct format ('expires=Thu, 2 Aug 2001 20:47:11 UTC') - if this is omitted then the cookie expires at session end (closing the browser)\
4\. again a semicolon and a space\
5\. then the path (path=/) - if path is omitted, the path is the current web path (possibly a single page)

JQuery has a cookie plugin <http://plugins.jquery.com/project/Cookie> - I'm not sure if this is the way to go

        