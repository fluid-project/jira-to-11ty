---json
{
  "title": "FLUID-2650",
  "summary": "After changing to the largest font size or line spacing, the dialog will load at the bottom of the page.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-05-06T10:32:08.000-0400",
  "updated": "2013-10-04T10:24:52.008-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2837/",
      "key": "FLUID-2837"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2764/",
      "key": "FLUID-2764"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2650/FLUID-2650.2.txt",
      "filename": "FLUID-2650.2.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2650/FLUID-2650.txt",
      "filename": "FLUID-2650.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-05-22T11:27:27.000-0400",
      "body": "<http://dev.jqueryui.com/ticket/4539> - Turns out that there seems to be a problem with jQuery dialog which opens the dialog off the page when the page is long and you have to scroll to activate the dialog.\n\nHere is the exact description from the ticket listed above:\\\nf my content is tall and I scroll the browser window to the bottom to reach the link to which my function is attached, \".dialog('open')\" causes the browser window to scroll back to the top, and the modal dialog will open completely offscreen (outside the viewport) near the link. The modal dialog will open correctly in the center of the viewport if I do not have to scroll the browser window.\n\nThis seems to be the problem we are experiencing.&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-22T11:27:57.000-0400",
      "body": "See comment about jQuery above\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-22T13:12:41.000-0400",
      "body": "Here is a patch which will temporarily solve this problem. Basically, I force the web page to scroll to the top in advance of the scroll caused by the jQuery dialog open bug. Then I open the dialog box at top left, so that it doesn't appear off screen. This is not ideal, because this positioning looks weird for normal text sizes. Ideally we would detect the 'potential' size of the dialog box and position based on that, so it only positioned top left for huge sizes.\n\nIn addition to adding the code mentioned above, I altered code in initDialog. I removed the code which positioned the dialog via css - this code didn't seem to impact the dialog at all as it was over-ridden by a jquery dialog positioning function call taking place after it. I also removed the jquery dialog positioning call in the initDialog function, as it was over-ridden by the re-positioning that happens each time the dialog is opened.\n\nThis patch was tested on firefox3, ie8, opera9 on windows XP\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T10:46:24.000-0400",
      "body": "This patch builds on the work Laurel did: The reason \"center\" doesn't work as a position is because the contents of the dialog hasn't been loaded yet, and the dialog has no size. I moved the sizing of the dialog into the initDialog() function, after the content has been loaded. Now the dialog is appropriately positioned. Combined with Laurel's scrollTo, it's better. There is still a bit of a mild glitch, because the dialog appears, and then resizes.\n\nI'm not sure if we want to apply this patch as a workaround to the jQuery bug, and then when jQuery fixes their bug, remove our workaround. The alternative is to leave the bug in place, so that the dialog appears waay down the page. Probably a call for Justin to make.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T11:08:33.000-0400",
      "body": "More discussion have led to the decision to leave the behaviour as-is for now, given that the component is still in Preview, and the problem will affect a minority of users. <https://fluidproject.atlassian.net/browse/FLUID-2764#icft=FLUID-2764> has been filed, relating to revisiting this if/when jQuery fixes the bug.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-27T11:27:51.000-0400",
      "body": "We should change the anchors for the buttons to something other than a simple document fragment, so instead of writing:\n\n\\<a href=\"#\">\n\nwe should write&#x20;\n\n\\<a href=\"#\\_bottom\">&#x20;\n\nwhich wont cause jumping.\n"
    }
  ]
}
---
After changing to the largest font size or line spacing, the dialog will load at the bottom of the page.

Steps to reproduce:

1\) Open the Sakai mock-up example from the daily build site\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Change to the largest font size or line spacing and save the changes

3\) Re-open the UI Options dialog

Notice that the dialog opens at the bottom of the page, and is partly hidden offscreen.

        