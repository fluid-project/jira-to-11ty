---json
{
  "title": "FLUID-3751",
  "summary": "Redesign and implement the progress component demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-09-22T18:06:06.955-0400",
  "updated": "2010-11-19T12:53:13.686-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3751/FLUID-3751.patch",
      "filename": "FLUID-3751.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3751/FLUID-3751.v2.patch",
      "filename": "FLUID-3751.v2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3751/FLUID-3751.v3.patch",
      "filename": "FLUID-3751.v3.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3751/FLUID-3751.v4.patch",
      "filename": "FLUID-3751.v4.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3751/FLUID-3751.v5.patch",
      "filename": "FLUID-3751.v5.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3751/FLUID-3751.v6.patch",
      "filename": "FLUID-3751.v6.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3751/FLUID-3751.v7.patch",
      "filename": "FLUID-3751.v7.patch"
    }
  ],
  "comments": [
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-04T12:39:09.327-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.patch which cleaned up the progress.js  by adding an string object to hold the strings that we use to display status of our progress in progress demo html page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:01:13.403-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-06T12:52:09.156-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v2.patch: Resolves the repeat issues that we were having with latest Fire Fox 3.6.3 using NVDA2010.2 and JAWS10&11 on XP. We have removed the aria role from the main container \"status-area\" then we don't hear any more repeated value while progress is going as well no more repeats of the feedback after progress completed.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-07T10:07:54.911-0400",
      "body": "Note: <https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v2.patch includes all the changes in <https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.patch.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-07T16:11:38.967-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v3.patch: This patch includes all the changes in <https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.patch and <https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v2.patch. We have cleaned some codes in progess.js. &#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-08T12:13:46.484-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v4.patch: This patch includes all the changes in <https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.patch, <https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v2.patch, and <https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v3.patch. We have re-factored some of the codes.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-08T14:03:32.877-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>: Re-factor some of the code. We have added string object to hold the strings that we use to display status of our progress also resolved the repeat issues that we were having with the latest Fire Fox 3.6.3, NVDA2010.2 and JAWS10&11.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-18T08:50:45.137-0400",
      "body": "Colin, Golam, and myself walked through the code and reviewed the changes.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-08T11:32:21.900-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751> need to remove aria-channel, and  role=description attributes because they no longer present in ARIA spec.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-08T11:59:28.788-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v5.patch remove aria-channel, and description role attributes because they no longer present in ARIA spec. We have added status role to replace with description role.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-09T10:02:18.447-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v6.patch changed role to status, aria-relevant to text, and aria-atomic to false.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-09T12:54:59.048-0500",
      "body": "Reviewed and committed Golam's patch ( <https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v6.patch ). Also sat down and tested it with him. It was working fine in firefox, but IE 8 still wouldn't read the status messages. We weren't able to find a way around that.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-18T12:19:46.048-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>: Updated the demo to change aria-relevant attributes values and add \"additions text\" instead of \"all\".\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-18T12:21:01.477-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3751#icft=FLUID-3751>.v7.patch in demo changed aria-relevant attributes values and added \"additions text\" instead of \"all\".\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-18T15:32:21.527-0500",
      "body": "After progress is complete, the live region text is read. Pressing tab then reads \"Restart the Demo link\". When you tab away from this link, and then back to it, the link is no longer read (says nothing when tab to it). It seems the reason is that NVDA changes modes when leaving the demo, and so when going back to it, it no longer reads the link text. Not sure if this is an expected NVDA behavior or not, but it doesn't seem related to our code. In fact, I think it's a firefox issue.  <http://groups.google.com/group/free-aria/browse_thread/thread/c7d93105884074df/e740ee9e58c35f1f>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T12:52:02.290-0500",
      "body": "Above comment filed as <https://fluidproject.atlassian.net/browse/FLUID-3859#icft=FLUID-3859>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T12:53:13.685-0500",
      "body": "The final patch has now found it's way into trunk. Any other issues should now be filed as new jiras.\n"
    }
  ]
}
---

        