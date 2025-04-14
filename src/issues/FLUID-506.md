---json
{
  "title": "FLUID-506",
  "summary": "Required asterisk missing from ImageField in DP input form.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-04-15T14:13:27.000-0400",
  "updated": "2014-03-04T09:07:26.135-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-506/Fluid-506-help-text.JPG",
      "filename": "Fluid-506-help-text.JPG"
    }
  ],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-04-29T16:50:36.000-0400",
      "body": "iteration08\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-30T13:18:09.000-0400",
      "body": "Tried various quick fixes that didn't work. A solution that will work will require a custom template for the design pattern. However, this will introduce a maintainability issue with the design pattern input form.\n\nBefore we go that route, I have filled a bug against the ImageField module and maybe one of the developers will create a fix?\\\n<http://drupal.org/node/253175>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-05-08T13:18:10.000-0400",
      "body": "Such an simple problem but with no obvious solution.\n\nI experimented with some modifications to the ImageField module and it appears that it could be the Fieldset attribute for the module that is affecting the output of that asterisk.\n\nWith that, we probably don't want to be editing the module anyway.\n\nSo now at this point what do we want to do?\\\n1\\. Create a custom template for the DP input form. (may be work that needs to be done anyway).\\\n2\\. Live with the missing asterisk.\\\n3\\. Other?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-05-09T10:37:24.000-0400",
      "body": "A potential solution by using the Help text and some styling?\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-13T12:41:53.000-0400",
      "body": "We used a temporary solution of adding the red asterix to the field label. (Added: \\<font class=\"DPImageFieldRequiredToken form-required\">\\*\\</font>) Hopefully the bug will eventually be fixed by the module authors.\n"
    }
  ]
}
---
iteration07

Currently the design pattern input form does not have an asterisk \*  for the required ImageField. The asterisk should be visible.

        