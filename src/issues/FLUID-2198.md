---json
{
  "title": "FLUID-2198",
  "summary": "OSDPL: Can't upload any images except JPG files.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-02-04T15:40:57.000-0500",
  "updated": "2014-04-02T16:35:55.229-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "OSDPL\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-03-30T13:55:16.000-0400",
      "body": "iteration30\n\nongoing issue.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-04-16T16:59:30.000-0400",
      "body": "Solution as seen on <http://drupal.org/node/352939>\n\nDescription\n\n1\\) CCK 5.x-1.10\\\n2\\) ImageField 5.x-2.2\\\n3\\) 755 permission, www-data owner for files/ directory; 777, root for tmp/ directory\\\n4\\) private download method\\\n5\\) configuration (all that matters):\\\nPermitted upload file extensions: jpg jpeg png gif\\\n6\\) I expect to be able to upload all 4 types of files (jpg jpeg png gif)\\\n7\\) I can only upload the first file type (jpg). A javascript alert box appears when trying to upload jpeg, png or gif files.\\\n8\\) Create new content type\\\nCreate imagefield cck field with the 4 file types above\\\nCreate new node, try to upload picture with extension jpeg, png, gif\\\nAn alert box is displayed saying you can't upload the image.\n\nI have investigated this problem and found that it is caused by a non-global javascript replace function. The function call on line 14 of imagefield.js\\\naccept = this.accept.replace(',','|');\n\nonly replaces the first comma (the one separating jpg and jpeg). Taking the configuration above, the value of accept would be set to 'jpg|jpeg,png,gif'. It should be 'jpg|jpeg|png|gif'. The correct replace function is\\\naccept = this.accept.replace(/\\\\,/g,'|');\n"
    }
  ]
}
---
A bug in imagefield.js javascript file causes a "The file \_\_\_\_ is not supported. Only the following file types are supported" on all valid images except JPGs.

This is a documented bug here: <http://drupal.org/node/352939>

Temporarily fixed this bug by modifying the imagefield.js file to properly accept other valid file types.

Waiting for an official patch.

        