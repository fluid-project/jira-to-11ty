---json
{
  "title": "FLUID-831",
  "summary": "IE 6: Uploader throws error trying to browse files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-26T17:26:06.000-0400",
  "updated": "2008-12-03T11:45:29.000-0500",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 6 (in VMware)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-831/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-831/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-22T23:14:24.000-0400",
      "body": "I could use some more information on reproducing this bug. Which context was the Uploader being used in: pop-up, inline, live, demo?&#x20;\n\nThis looks to me that it might be the IE local Flash permissions bug.\n\n* Eli&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-23T13:51:28.000-0400",
      "body": "Here is the error.\n\nLine: 2\\\nChar: 9220\\\nError: Exception thrown and not caught\\\nCode: 0\\\nURL: <http://build.fluidproject.org/fluid/sample-code/uploader/inline/uploader.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-23T13:53:36.000-0400",
      "body": "The above error occurs in both the inline and pop-up version.&#x20;\n\nIt happens whenever you click the 'Browse Files' button.&#x20;\n\nFor the pop-up version, it will throw the error as soon as you click the 'Add Files' button, but the uploader still loads. The OS File Open Dialog does not open.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-23T14:04:06.000-0400",
      "body": "'screenshot-1' shows the Flash global settings manager. There is no \"edit locations\" option. The permission is set to \"Always allow\" but the error still occurs\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-23T14:07:49.000-0400",
      "body": "'screenshot-2' shows the Flash settings manager, running off FireFox 2 from the same virtual machine. Notice that the settings are the same. The only difference is that you can see the \"Edit locations\" option. There are no errors thrown in FF2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-23T14:21:28.000-0400",
      "body": "What version of Flash? I suspect that this may be the same bug as <https://fluidproject.atlassian.net/browse/FLUID-679#icft=FLUID-679>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-24T16:09:12.000-0400",
      "body": "Just tested this using our ATutor sample (for user testing), It through an error  (See below)\n\nLine: 357\\\nChar: 4\\\nError : Exception thrown and not caught\\\nCode : 0\\\nURL: <http://www.atutor.ca/atutor/fluidtest/tools/filemanager/index.php>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-24T16:12:21.000-0400",
      "body": "updated to the latest version of Flash,&#x20;\n\nit is now working, Flash may not have been installed properly before.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-24T16:12:51.000-0400",
      "body": "Updated Flash to version 6, appears to be working\n"
    }
  ]
}
---
In IE 6, clicking on the 'Browse files' causes an error, "Exception thrown and not caught"\
Nothing else happens (i.e. no file selection dialog)

        