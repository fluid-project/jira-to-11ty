---json
{
  "title": "FLUID-6608",
  "summary": "URL polyfill may no longer be needed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Ned Zimmerman",
  "date": "2021-03-25T15:27:03.108-0400",
  "updated": "2021-03-31T09:13:57.394-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2021-03-25T19:45:07.738-0400",
      "body": "CanIUse stats: <https://caniuse.com/url>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-29T07:55:17.395-0400",
      "body": "@@Ned Zimmerman thanks for filing this. I was thinking that would be the case and was planning on reviewing it as part of the work for <https://fluidproject.atlassian.net/browse/FLUID-6594#icft=FLUID-6594>. If it doesn't get pulled before hand, I'll try to get to it in that work. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-31T09:13:53.741-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1043> ) into the project repo at fa95f26e1959e5edfbbd62f3dfc790611f9ee1a9\n"
    }
  ]
}
---
I noticed while reviewing dependencies as part of FLUID-6607 that the Prefs Framework has a dependency for url-polyfill which was added in <https://fluidproject.atlassian.net/browse/FLUID-6296#icft=FLUID-6296>, explicitly to support native URL utility usage on IE. Since IE is no longer supported, I suspect we can remove url-polyfill.

        