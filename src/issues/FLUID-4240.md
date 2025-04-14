---json
{
  "title": "FLUID-4240",
  "summary": "Stopping an upload doesn't stop properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Anastasia Cheetham",
  "date": "2011-05-16T12:29:18.629-0400",
  "updated": "2011-06-21T14:00:20.894-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3.6 on Mac OSX; FF4 on Mac OSX\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-05-16T12:40:52.828-0400",
      "body": "\\[12:39pm] colinclark: mlam, Justin\\_o, it seems like the salient point from this bug is that in order to get Uploader to stop the way it should, you need to press the Stop button as many times as there are files in the queue\\\n\\[12:39pm] colinclark: anastasiac's Variation B at the bottom of her JIRA\\\n\\[12:40pm] colinclark: If you have 5 files, you have to click Stop 5 times to get it to do the right thing\\\n\\[12:40pm] colinclark: Fewer clicks will eventually get it to to stop\\\n\\[12:40pm] colinclark: but not where you'd expect it to\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-16T12:42:46.570-0400",
      "body": "It seems that the Uploader might be automatically trying to resume the upload after stop is clicked, and getting confused as to what it's resuming: The progress seems to continue on the same file, but the status at the bottom increments to the \"next\" file. So it seems to be partly resuming the same file, and partly working its way through the queue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:05:14.807-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-05-17T13:41:47.924-0400",
      "body": "Fixed.   The demo remote uploader was missing a flag to tell the queue to stop uploading files.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-18T09:05:10.593-0400",
      "body": "going to change the status to needs commit\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-05-26T18:51:56.728-0400",
      "body": "Reviewed and committed to the project repo: <https://github.com/colinbdclark/infusion/commit/5181d10116a0a15c713971ba5c86c068e5a01a17>\n"
    }
  ]
}
---
Trying to stop a multi-file upload results in unpredictable - and incorrect - behaviour.

To reproduce:

1\) Open the test uploader on the build site:\
<http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html>\
Choose any one of the versions of uploader.

2\) Add three or four files to the queue. Try to make sure the files are large enough that each will take a moment or two to upload (otherwise you won't have time to try to stop the upload).

3\) Click "Upload"

4\) While the first file is still uploading, click "Stop upload" once.

Result:\
a) The 'total status' at the bottom will stop showing "1 of 4" and switch to "2 of 4"\
b) The progress bar on the first file will disappear and then reappear, still on the first file, and continue\
c) The upload process will continue with "2 of 4", "3 of 4" and "4 of 4" with the corresponding progress bars showing on the first, second and third items.\
d) Once completed, the total status will indicate that 3 of 4 files did upload, and the first three files will have the green checkmark; the last will not.

Variations:

A) Suppose you've placed 5 files in the queue. If you hit stop 3 times, the progress bar will continue to reset itself on the first item each time, and the final tally will show 2 of 5 files uploaded, and the first two items will have the green checkmark.

B) If you click "Stop" for the same number of files in the queue (e.g. 5 clicks for 5 files), it will eventually stop, and show "0 of X" files uploaded.

        