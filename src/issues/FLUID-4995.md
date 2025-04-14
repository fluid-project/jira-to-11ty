---json
{
  "title": "FLUID-4995",
  "summary": "Convert icons used in UI Options to font icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "Justin Obara",
  "date": "2013-04-29T10:31:51.334-0400",
  "updated": "2013-06-05T10:40:51.709-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5019/",
      "key": "FLUID-5019"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4995/UIO31763.zip",
      "filename": "UIO31763.zip"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2013-05-07T09:53:12.175-0400",
      "body": "UIO Icons needed:\n\nheader icons:\\\ntext size\\\ntext style\\\nline spacing\\\ncontrast\\\nTOC\\\nlinks\\\nTTS\\\nsimplify\n\nother:\\\nindicator arrow for contrast\\\ncrossout diag dotted line for contrast default\n\nlines on slider handle\n\nnext arrow\\\nprev arrow\n\nsmall A\\\nbig A\\\nnarrow lines\\\nspaced lines\n\ntabs:\\\nreset undo arrow\\\ndisplay pref gear\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-06-04T12:02:48.677-0400",
      "body": "There's a known issue in IE8 - font icons sometimes do not update until interacted-with. See <http://andymcfee.com/2012/04/icon-fonts-pseudo-elements-and-ie8/> for details.&#x20;\n\nFiled under: <https://fluidproject.atlassian.net/browse/FLUID-5034#icft=FLUID-5034>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-06-05T10:34:56.224-0400",
      "body": "Merged in pull request ( <https://github.com/fluid-project/infusion/pull/324> ) into the project repo at 377269139b5efefd90eaba06ea3178f7d29f56a1\n"
    }
  ]
}
---
Create font icons for all the icons used by UI Options, and updated UIO to make use of them.

        