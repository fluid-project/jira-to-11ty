---json
{
  "title": "FLUID-3233",
  "summary": "After download, progress on \"Preparing your download...\" page does not disappear  ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Alison Benjamin",
  "date": "2009-10-06T14:13:18.000-0400",
  "updated": "2010-11-16T10:38:56.596-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "Safari 3.2, FF3&#x20;\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3439/",
      "key": "FLUID-3439"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3359/",
      "key": "FLUID-3359"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3233/FLUID-3233-1.patch.txt",
      "filename": "FLUID-3233-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3233/FLUID-3233-2.patch.txt",
      "filename": "FLUID-3233-2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3233/FLUID-3233-3.patch.txt",
      "filename": "FLUID-3233-3.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-04T11:06:21.000-0500",
      "body": "This is related to the css re-design for Infusion Builder that Jacob is already doing so I am re-assigning this task to Jacob\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-07T08:28:11.000-0500",
      "body": "This issue has been raised by several people now and is something we should address by the next release of the builder.&#x20;\n\nThe problem is that we don't have any knowledge of when the download is ready or when it has been successfully received by the user.&#x20;\n\nA redesign, with the above constraint in mind, is needed.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T15:28:18.000-0400",
      "body": "I would look to see what SourceForge or other large download sites do, and mimick that.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-09-07T13:27:26.484-0400",
      "body": "One suggested solution is that the server script redirects or refreshes the page once the download completes. This is not doable because the way at server side to trigger the download is, first of all, send http header telling the browser that this response is for download, secondly, all the server output following this http header is the content of the downloaded file. All the redirection or whatever message after the download content will be considered as a part of the download content.\n\nAfter browsing through a few download site like sourceforge and download.com, a general solution is to change the message to \"The download will start shortly ...\" and the page stays as it is before and after download.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-07T16:00:42.616-0400",
      "body": "Here's a strategy that should work:\n\n1\\. The client POSTs to the server via Ajax, requesting a build to be made\\\n2\\. The server responds immediately with a response object, which will provide:\\\na) a URL to the .zip file to download\\\nb) a status code--either \"ready\" or \"building\"\\\n3\\. If the status is \"ready\", the client should hide the spinner, and then immediately download the zip file (e.g. by setting the window.location to the URL)\\\n4\\. A mini \"status\" service should be provided by the server, allowing the client to periodically \"ping\" the build's status\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-09-10T10:43:20.289-0400",
      "body": "Quick flow diagram:\\\n-> page loads\\\n->ajax post to generate a build, builder.php\\\n-> button.disable()\\\n-> spinner.spin()\\\n->call back function -> done \\\n-> button.enable()\\\n-> spinner.disappear()\\\n-> download, display content-disposition: attachment\\\n-> ajax -> get.php?file.zip ->download popup\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:26:05.277-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-10-22T11:54:35.619-0400",
      "body": "\"FLUID-3233-1.patch.txt\" includes changes:\\\n1\\. PHP server side: \\\n1.1 added \"get.php\" to retrieve and return back the requested build.\\\n2\\. HTML client side: \\\n2.1 make ajax call to request for the build, handle server error response;\\\n2.2 when the build is in process, display a spinner on \"Download\" button and disable all the controls (checkboxes, radio buttons, buttons);\\\n2.3 when the build is received, hide the spinner and enable controls.\\\n3\\. New unit tests for the changes at both sides. Improved server-side unit test structure:\\\n3.1 added one general test script to include all individual unit test scripts;\\\n3.2 added a config file to define all the paths and constants used in server test cases;\\\n3.3 wrote a Simple Test (the PHP unit test software used by infusion builder) skin to display what test cases are run.\n\nSome remain issues are:\\\n1\\. In firefox, the spinner only spins the first time after the page refresh. After then, the spinner no longer spins. This is a known bug filed in firefox (<https://bugzilla.mozilla.org/show_bug.cgi?id=129986>). It does not happen with other browsers (IE8, Chrome7, Safari 5.0.2), tested on Windows XP. \\\n2\\. Some client-side unit tests fail at IE8 (<http://issues.fluidproject.org/browse/FLUID-3231>).\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-10-25T15:11:44.849-0400",
      "body": "\"FLUID-3233-2.patch.txt\" contains all the changes in \"FLUID-3233-1.patch.txt\" plus the handling of the case when \"magic\\_quotes\\_gpc\" is turned on in php.ini. So the first patch \"FLUID-3233-1.patch.txt\" can be ignored since it has not been applied.\n\nBelow is a detail description of what the new fix for:\\\nThe $\\_GET data accepted by \"get.php\" is supposed to be \\[\"17\\_1.1.2\",1]. When \"magic\\_quotes\\_gpc\" is on, the sent-in $\\_GET is turned into \\[\\\\\"17\\_1.1.2\\\\\",1]. The fix is to strip the slashes when \"magic\\_quotes\\_gpc\" is on.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-10-28T10:51:38.176-0400",
      "body": "\"FLUID-3233-3.patch.txt\" has these improvements:\n\n1\\. A workaround for firefox spinner bug: embed a hidden iframe to download build;\\\n2\\. Use http status code to identify server success or fail response;\\\n3\\. Move spinner out of download button so the disable opacity only applies to button not the spinner.\n\n\"FLUID-3233-1.patch.txt\" & \"FLUID-3233-2.patch.txt\" can be ignored.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-02T14:39:47.556-0400",
      "body": "Fixed at revision 10172. \\\nCindy, please ensure everything got committed as you expected it to.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-02T14:56:32.671-0400",
      "body": "The patch is reviewed by Colin/Michelle and committed by Michelle in svn revision 10172.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-16T10:00:53.989-0500",
      "body": "Add more explanations on how the iframe work-around for firefox spinner bug works.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-16T10:37:44.815-0500",
      "body": "Why do we embed an empty iframe in builder html?\n\nIn general, this is a workaround for the firefox spinner bug (<https://bugzilla.mozilla.org/show_bug.cgi?id=129986>) that the spinner only spins the first time after the page loads.&#x20;\n\nIn detail, the ff bug is trigger by the line of javascript that retrieves the download:&#x20;\n\nwindow.location = \"download.php\"\n\ndownload.php pushes down the zipped download file along with such http header:\n\nheader(\"Content-Type: archive/zip\");\\\nheader(\"Content-Disposition: attachment; filename=$filename\");\\\nheader(\"Content-Length: $size\");\n\nThese headers tell the browser this is a download so the browser pops up the download dialog box without truly re-directing the page itself.\n\nBut, even though the page stays as it is, the firefox bug is triggered and the spinner stops spinning since then.\n\nOne suggested solution is to use ajax to retrieve download, not via window.location. This suggestion is tried but doesn't help because ajax swallows the http header and the download dialog would not be popped up.\n\nIn the end, the empty iframe comes into the play. Instead of using window.location = \"download.php\", now we use:\n\nthat.locate(\"downloadFrame\").attr('src', \"../php/download.php?path=\"+data);\n\nProblem solved!\n"
    },
    {
      "author": "Cindy Li",
      "date": "2010-11-16T10:38:56.594-0500",
      "body": "Added more comments.\n"
    }
  ]
}
---
After a package has been downloaded, the progress on "Preparing your download..." continues. Maybe there should be a "Thank you for downloading infusion" message.&#x20;

        