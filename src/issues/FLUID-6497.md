---json
{
  "title": "FLUID-6497",
  "summary": "cookie store needs to update default values related to sameSite setting",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2020-05-12T14:31:42.032-0400",
  "updated": "2020-05-14T14:13:33.782-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-05-14T14:13:30.668-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/988) for fixing this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/d33f91961f246c638e333be6b7cddce8fc35e687).\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the [UI Options demo](https://build.fluidproject.org/infusion/demos/uiOptions/)

2\) Modify the preferences

3\) Open the browser console and notice the warning:

Cookie “fluid-ui-settings” will be soon rejected because it has the “sameSite” attribute set to “none” or an invalid value, without the “secure” attribute. To know more about the “sameSite“ attribute, read <https://developer.mozilla.org/docs/Web/HTTP/Cookies> Store.js:152:8

 

See <https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#SameSite_cookies> for options. Also see: <https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie> for setting the cookie through the web api.

 

 

        