---json
{
  "title": "FLUID-4726",
  "summary": "Cannot change uploader's button text through the string options.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2012-07-06T11:07:25.565-0400",
  "updated": "2021-07-29T01:43:35.743-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4726/5181360461840384.png",
      "filename": "5181360461840384.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4726/5639383391141888.png",
      "filename": "5639383391141888.png"
    }
  ],
  "comments": [
    {
      "author": "Saksham Saxena",
      "date": "2016-03-06T11:54:53.756-0500",
      "body": "\"Browse Files\" do get used when you add files and remove all of them, then this string is used. There was actually an inconsistency  of this string only, because the template has \"Browse files\" and the string has a capital F. Because of this tiny difference, the text was flowing out of the button. Before and after scenarios are attached for reference. The other strings, maybe over ambitiously written, are anyways relatively long and would go beyond the width of the button (fixed).\n\nUPDATE : So the \"Stop Upload\" button is hardcoded and is toggled through classes only. There is no \"Resume Upload\" and \"Cancel Remaining Uploads\" functionality as of now. Usage of \"Remove\" is unclear as well.\n"
    }
  ]
}
---
The uploader has string options for the various button text.\
<https://github.com/fluid-project/infusion/blob/master/src/webapp/components/uploader/js/Uploader.js#L580-586>

However, it appears as though not all of them work. For example the "browse" strings never get used, but rather the text from the template.\
The only one that I've found to be working was the "addMore" text.

        