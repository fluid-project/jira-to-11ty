---json
{
  "title": "FLUID-1880",
  "summary": "OSDPL: When uploading an image that is sufficiently large, an error is displayed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-12-01T15:25:58.000-0500",
  "updated": "2014-04-02T15:10:22.571-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-12-03T10:39:56.000-0500",
      "body": "Iteration29\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-12-07T23:29:06.000-0500",
      "body": "It appears that this is a problem due to memory running out for PHP.\n\nAccording to this report on Drupal: <http://drupal.org/node/254589>\n\n\"Found the cause and solved the problem. The cause was that the image rescaling function in the graphics library that PHP uses (in my case gd.so) ran out of memory due to a far too small memory\\_limit setting in php.ini.\n\nIn php.ini I changed\n\nmemory\\_limit = 32M\n\nto\n\nmemory\\_limit = 256M\n\nThat solved the problem. Tests revealed that a setting of 128M was still insufficient for a 25 Megapixel JPG image, so I doubled it and retested successfully.\"\n\nWill email our admin for assistance.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-14T12:45:16.000-0500",
      "body": "Did some more investigating. The Image API we are using, GD2, has a memory problem when it comes to large files. Instead, we should use ImageMagick 2 which doesn't have this problem. However, it isn't available on our server.\n\nSent a request to have it installed. Hopefully it will fix our problem.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-14T15:38:18.000-0500",
      "body": "Now running into this problem where no error message is given when uploading a large file: <http://drupal.org/node/30520>\n\n\"The upload.module returns without error when it fails to upload a file that exceeds the php.ini upload size limit. The upload.module should report an error on the attachment screen that upload failed.\"\n\nA patch is being worked on, but so far no word on a Drupal 5 version. Activity is progressing though with last post occurring on Jan 12 2009\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-19T09:51:04.000-0500",
      "body": "For the time being, I have added extra instructions to the section. It's not a good solution, but it will help a little until a patch is released to fix this problem (see comment above).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:10:22.559-0400",
      "body": "We will be archiving the OSDPL\n"
    }
  ]
}
---
When uploading an image that is large (i.e. 9MB), an error would be displayed:

"warning: Invalid argument supplied for foreach() in /usr/webserver/content/osdpl/patterns/drupal-5.12/sites/default/modules/imagefield/imagefield.module on line 850.\
Solution Image is required. Please upload an image."&#x20;

        