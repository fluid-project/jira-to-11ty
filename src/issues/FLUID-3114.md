---json
{
  "title": "FLUID-3114",
  "summary": "Attempting to upload files throws an uncaught exception: using FF 3.5",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-08-20T09:16:49.000-0400",
  "updated": "2009-10-02T16:20:02.000-0400",
  "versions": [
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF 3.5 (Mac OS 10.5, Win XP, Win Vista) Flash 10\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3115/",
      "key": "FLUID-3115",
      "summary": "The server doesn't properly add files into the file queue: using FF 3.5"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-20T11:17:41.000-0400",
      "body": "Seems like something changed between FF3 and FF3.5.\n\nNot sure exactly what that was yet though. Here are some links from the swfupload forum about issues people have had with FF 3.5\n\n<http://swfupload.org/forum/generaldiscussion/1672>\n\n<http://swfupload.org/forum/generaldiscussion/1641>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-08-21T17:25:53.000-0400",
      "body": "The error is occurring in SWFUpload's code: setButtonDisabled(). We invoke this method inside our SWFUploadSetupDecorator, which is responsible for setting up a Flash 10-specific configuration of SWFUpload. This code is responsible for disabling the Flash-based \"Browse Files\" button, using a public API provided by SWFUpload.\n\nThis has become a pretty familiar scenario with SWFUpload: whenever a browser of Flash upgrade comes along, SWFUpload breaks. In this case, their setButtonDisabled() method is exploding. I haven't had a chance to fully triage the problem, but there is a temporary workaround:\n\nIf you're okay with the fact that users will be able to open the file dialog while an upload is in progress, removing lines 118 and 121 of SWFUploadManager.js--or better yet, wrapping those lines in a try/catch will squelch the error. This is quite a hack, and we'll make sure we find a reasonable fix that doesn't involve patching code directly.\n"
    },
    {
      "author": "Matt Zumwalt",
      "date": "2009-08-28T14:06:28.000-0400",
      "body": "FYI, when I comment out the lines that call setButtonDisabled, I just get another error \"Call to StartUpload failed\".  Upload still works fine in Safari with the hack in place.:\n\nuncaught exception: Call to StartUpload failed\\\nanonymous(\"StartUpload\", \\[undefined])Infusion...251482117 (line 14610)\\\nanonymous(Object name=fileID)Infusion...251482117 (line 14651)\\\nanonymous()Infusion...251482117 (line 16240)\\\nanonymous()Infusion...251482117 (line 16824)\\\nanonymous(Object originalEvent=Event click type=click)Infusion...251482117 (line 2693)\\\nanonymous()Infusion...251482117 (line 2468\n\nPS - alternate hack - edit the function definition for SWFUpload.prototype.setButtonDisabled so that it skips calling the Flash method.\n\nSWFUpload.prototype.setButtonDisabled = function (isDisabled) {\\\nthis.settings.button\\_disabled = isDisabled;\\\n// this.callFlash(\"SetButtonDisabled\", \\[isDisabled]);\\\n};\n\n... though this still gives me the \"Call to StartUpload failed\" error on my machine 😞\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-21T09:45:35.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-09-30T17:33:39.000-0400",
      "body": "I've reviewed the code for this bug and it looks good. Also tested in FF3.5 using the demo version of the uploader. &#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-10-02T13:32:11.000-0400",
      "body": "Resolved per Colin's code and my review\n"
    }
  ]
}
---
Attempting to upload files throws an uncaught exception

Steps to reproduce:

1\) Open the uploader demo page\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) Add some files to the file queue

3\) Attempt to upload the files

Notice that an uncaught exception occurs

Error message:

uncaught exception: Call to SetButtonDisabled failed\
anonymous("SetButtonDisabled", \[true 0=true])swfupload.js (line 449)\
anonymous(true)swfupload.js (line 685)\
anonymous()SWFUploa...anager.js (line 118)\
anonymous()Fluid.js (line 594)\
anonymous()FileQueue.js (line 152)\
anonymous()DemoUplo...anager.js (line 130)\
anonymous()Uploader.js (line 557)\
anonymous(Object originalEvent=Event click type=click)jquery.js (line 2693)\
anonymous()jquery.js (line 2468)\
\[Break on this error] (no source for )\
Firebug's log limit has been reached. %S entries not shown.		Preferences	&#x20;

        