---json
{
  "title": "SJRK-306",
  "summary": "UI rendering not working properly in IE11",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-10-09T14:29:51.712-0400",
  "updated": "2022-07-29T00:09:31.087-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10 v1903\\\nInternet Explorer 11\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-306/2019-10-07 ST Grid layout broken and masthead missing in IE11.PNG",
      "filename": "2019-10-07 ST Grid layout broken and masthead missing in IE11.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-306/2020-03-19 IE11 error screenshot.png",
      "filename": "2020-03-19 IE11 error screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-10-22T13:49:39.328-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/46) has been merged into the stories-floe-dev branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/dfa89cc9da25016b86c55c7f34cf7f4ee6fed92a).\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-03-19T21:39:07.547-0400",
      "body": "Reopened with new symptoms.\n\nOn page load (any page), the page is blank except for UIO, and the following error is reported: SCRIPT438: Object doesn't support property or method 'find'\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-03-27T17:02:55.954-0400",
      "body": "Reopened after it was automatically closed in error\n"
    }
  ]
}
---
The UI grades are not being rendered properly in Internet Explorer 11. This is potentially due to the Includes method not being present in Trident, the JavaScript engine used in IE11. This is the same root cause as <https://fluidproject.atlassian.net/browse/SJRK-233#icft=SJRK-233>.

@@Antranig Basman has proposed some changes in his pull request for <https://fluidproject.atlassian.net/browse/SJRK-255#icft=SJRK-255> which would solve this issue:\
<https://github.com/fluid-project/sjrk-story-telling/pull/35#pullrequestreview-270696714>

 

***

**REOPENED with new symptoms and potentially new cause:**

On page load (any page), the page is blank except for UIO, and the following error is reported:

SCRIPT438: Object doesn't support property or method 'find'

See 2020-03-19 screenshot for detail. IE11 does not support Array.prototype.find(), so fixing this will be a matter of:

1. determining where it is called, and
2. determining if another solution can be used instead, and failing that
3. determining if not supporting IE11 is an acceptable outcome

        