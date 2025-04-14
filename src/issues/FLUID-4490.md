---json
{
  "title": "FLUID-4490",
  "summary": "Can't add 0k file to Uploader queue in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-10-03T12:26:33.114-0400",
  "updated": "2015-06-26T10:02:46.114-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 6, 7, 8 & 9 on Win XP & 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:01.610-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
It's not possible to add a file of 0 length to the Uploader file queue in IE. You can go through the motions, but the file won't be added to the queue. No error message is given.

To reproduce:\
1\) Use a text editor to create an empty, 0 byte file.\
2\) Try to add the file to the Uploader queue in IE.\
Note that the file isn't added to the queue and no error message appears.

Note that if you add a single character to the file so that it is not 0 bytes, it can be added to the queue.

Also note that if we decide that it's reasonable behaviour to NOT add empty files to the queue, we should\
a) at least provide some explanation for why it's not being added\
b) enforce comparable behaviour in FF (which **does** add empty files to the queue)\
c) update the test plan accordingly.

        