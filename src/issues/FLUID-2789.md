---json
{
  "title": "FLUID-2789",
  "summary": "Toggling between the Flash and HTML version of uploader, will cause the Multi-file uploader's upload button to break: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-05-27T12:54:15.000-0400",
  "updated": "2009-05-29T13:35:10.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2819/",
      "key": "FLUID-2819"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2789/FLUID-2789.a.allbrowsers.patch",
      "filename": "FLUID-2789.a.allbrowsers.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2789/FLUID-2789.b.justOpera.patch",
      "filename": "FLUID-2789.b.justOpera.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-05-27T19:52:09.000-0400",
      "body": "I've done a little research and this is a known bug with the SWFUpload and Opera. In the words of Gyphie:&#x20;\n\n— QUOTE FROM: <http://www.swfupload.org/forum/generaldiscussion/1182> —\n\n\"I've found that Opera performs the worst in these tests. Basically you can't hide or perform any DOM node movements in Opera without breaking Flash movies that use External Interface to communicate to the browser.\n\nThe work-around is to only change the Flash Movie size to 0x0 (but I'd test that you may have to do 1x1) and reposition the movie. You can't hide it or it's parent.\"\n\n— END QUOTE —\n\nThe Upload button also fails in Opera running locally, even with out toggling. This problem may be related although I'm having trouble debugging.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-28T18:27:28.000-0400",
      "body": "The solution that we've settled on is to \"hide\" the Uploader in a different way. Hiding using the standard .hide() and show() methods in jQuery will break the Uploader in Opera. However, we can hide by setting the height, width and padding of the Uploader to 0 and also setting visibility to hidden.&#x20;\n\nThe two patches offer up use both use this approach\\\n<https://fluidproject.atlassian.net/browse/FLUID-2789#icft=FLUID-2789>.a.allbrowsers.patch :: hides the Uploader using this hack on all browsers\\\n<https://fluidproject.atlassian.net/browse/FLUID-2789#icft=FLUID-2789>.b.justOpera.patch :: special-cases Opera for this fix\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-29T12:46:15.000-0400",
      "body": "We've decided to go with the Opera only fix, but we're changing the test for Opera since jQuery has deprecated $.browser.opera. After much hunting, we found (window\\.opera) which appears to only return as defined on Opera!\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-29T13:11:58.000-0400",
      "body": "Anastasia has committed the revised opera-only fix and we are good to go.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-29T13:35:10.000-0400",
      "body": "Verified fix using:\n\nOpera 9.6 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Toggling between the Flash and HTML version of uploader, will cause the Multi-file uploader's upload button to break

Steps to reproduce:

1\) Open the uploader demo page\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) Switch back and forth between the html and the flash based uploaders

3\) Add a file to the multi-file uploader

4\) Click the upload button

Notice that an error is thrown

Error:\
JavaScript - <http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>\
Event thread: click\
Unhandled exception: "Call to SetButtonDisabled failed"

Note - this was tested using Flash 10

        