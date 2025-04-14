---json
{
  "title": "FLUID-2416",
  "summary": "flashURL option ignored in swfUploadSetupDecorator (browse button does not display)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Aaron Brown",
  "date": "2009-03-26T15:18:06.000-0400",
  "updated": "2014-03-03T14:43:37.869-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Linux (Ubuntu 8.10), Firefox 3.0.7, Flash 10.x\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Aaron Brown",
      "date": "2009-03-26T16:44:44.000-0400",
      "body": "Correction:  This may not in fact be a real issue.  I have found that by declaring the flashURL option in a different way, the Browse button loads as it should.  It appears to me that this is actually a bug :question: in the sample code provided in the wiki tutorial, not in the javascript.  My apologies.\n\nSolution:\\\nWiki tutorial says:\\\nvar myUpload = new fluid.progressiveEnhanceableUploader(\".fl-uploader\", \".fl-progressive-enhanceable\", {\\\nuploadManager: {\\\n// Set the uploadURL to the URL for posting files to your server.\\\nuploadURL: \"<http://myserver.com/uploadFiles>\",\n\n// This option points to the location of the SWFUpload Flash object that ships with Fluid Infusion.\\\nflashURL: \"fluid-1.0/fluid-components/swfupload/swfupload.swf\"\\\n},\\\n// ... \\[snip] ...\n\nAs written, the uploadManager options are ignored. When uploadURL and flashURL are enclosed in an \"options\" hash, all works as intended.\n\nQuick fix that should probably be cleaned up:\\\nvar myUpload = new fluid.progressiveEnhanceableUploader(\".fl-uploader\", \".fl-progressive-enhanceable\", {\\\nuploadManager: {\\\noptions: {\\\n// Set the uploadURL to the URL for posting files to your server.\\\nuploadURL: \"<http://myserver.com/uploadFiles>\",\n\n// This option points to the location of the SWFUpload Flash object that ships with Fluid Infusion.\\\nflashURL: \"fluid-1.0/fluid-components/swfupload/swfupload.swf\"\\\n}\\\n},\\\n// ... \\[snip] ...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-05T13:30:45.000-0400",
      "body": "The tutorial appears to have been updated\n"
    }
  ]
}
---
In Uploader for v0.8, flash9URL and flash10URL are generally deprecated.  In practice the swfUploadSetupDecorator object, which dictates the settings for the Browse button, still references flashXXURL options and ignores the new flashURL option.

Result: the Browse flash movie always uses the default flash\_url of "../../flash/swfupload.swf", no matter how flashURL is set.

Workaround: for the time being, the problem can be avoided by defining a flashXXURL option on the decorator:\
decorators: {\
type: "fluid.swfUploadSetupDecorator",\
options: {\
// This option points to the location of the Browse Files button used with Flash 10 clients.\
flashButtonImageURL: "js/fluid/fluid-components/images/uploader/browse.png",\
flash9URL: "js/fluid/fluid-components/flash/swfupload.swf",\
flash10URL: "js/fluid/fluid-components/flash/swfupload.swf"\
}\
}

Code: see SWFUploadManager.js lines 138, 106, 72.

Note 1: Defining a "flashURL" option inside the decorator is not sufficient - the code only looks for flash(9|10)URL before falling back to the default value.

Note 2: This problem may not be apparent in the distributed test files for the Uploader where all files are correctly located relative to one another for the default path to work.  Confirm problem by setting a new flashURL value and placing swfupload.swf in the new location or else or simply viewing the generated flash object code to see that the default value is always used for "data='...'" regardless of the current value of "flashURL".

Note 3: I'm a new bug submitter, and wasn't sure what severity to assign.  I opted for "minor" given the easy workaround, but fluid admins may wish to adjust.  My apologies if this issue has already been resolved in version 1.0.

        