---json
{
  "title": "FLUID-5525",
  "summary": "Add OpenDyslexic in addition to Comic Sans",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Anastasia Cheetham",
  "date": "2014-10-09T15:44:14.597-0400",
  "updated": "2019-07-29T13:54:50.548-0400",
  "versions": [
    "1.5"
  ],
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
      "author": "Justin Obara",
      "date": "2018-03-19T12:40:05.735-0400",
      "body": "If there are other reasons to keep comic sans, we could just add OpenDyslexic. Although I have heard that on some systems Comic Sans isn't available.\n"
    },
    {
      "author": "Dana",
      "date": "2018-04-10T11:48:32.198-0400",
      "body": "Comic sans and dyslexia: <https://www.thecut.com/2017/03/the-reason-comic-sans-is-a-public-good.html>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2019-07-16T13:47:59.495-0400",
      "body": "I should be able to create a pull request for this based on the CISL demo work.\n\nWill use the WOFF file provided by OpenDyslexic: <https://github.com/antijingoist/open-dyslexic/tree/master/woff> and, ideally, the NPM package: <https://www.npmjs.com/package/open-dyslexic>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-17T08:52:05.676-0400",
      "body": "In the [fluid-design channel yesterday](http://irc-logs.fluidproject.org/%23fluid-design/%23fluid-design.2019-07-16.log), we talked a bit about how this might be affected by differing languages on the page. That is, does OpenDyslexic support languages other than English and what would happen if it doesn't. We didn't yet come to a conclusion about how to address that, so it is something that still needs to be explored.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-29T13:54:42.528-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/956> ) into the project repo at 058483bcca139731896ad11e4f734034e1d5cc0b\n"
    }
  ]
}
---
Our out-of-the-box UIO component offers Comic Sans as one of the font family options. Many people have wondered why we include that font.

It might be more useful if we replace it with a Dyslexia-friendly font, such as OpenDyslexic:\
<http://opendyslexic.org/>

<http://2.bp.blogspot.com/_6xTXbH5AI8g/TEctfxjh0EI/AAAAAAAAAJk/iCF6jv4FqfY/s1600/comicsans_fortune500.jpg>

        