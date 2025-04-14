---json
{
  "title": "FLUID-4083",
  "summary": "If file removed from filesystem while in queue, uploader doesn't display an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2011-02-18T12:17:34.994-0500",
  "updated": "2014-07-31T15:56:44.308-0400",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-14T15:52:07.420-0400",
      "body": "Testing this after the 1.4 release, using <http://build.fluidproject.org/uploader/hourly/image-gallery.php>, this is still an issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-31T15:56:44.308-0400",
      "body": "Latest demo link is: <http://build.fluidproject.org/infusion/demos/uploader/>\n"
    }
  ]
}
---
This error occurs using the server-based version of the demo, which actually does upload files:\
<http://build.fluidproject.org/sakai-imagegallery2-web/site/AddImages/>

To reproduce:

1\) Use the Uploader interface to add an image to the file queue, but don't upload it yet\
2\) Remove the selected file from your hard-drive\
3\) Click the "Upload" button in the Uploader interface.

The Uploader will obviously not be able to upload the file since it no longer exists, but no error message is displayed. If you open the Firebug console, you can see an error there, but there's no visual indication to the user.

        