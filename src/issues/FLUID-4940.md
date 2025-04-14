---json
{
  "title": "FLUID-4940",
  "summary": "uiOptions demo fails without jQuery included into Infusion build. jQuery is included using an external include",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Alexey Novak",
  "date": "2013-03-21T13:26:51.608-0400",
  "updated": "2013-10-04T09:18:13.143-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alexey Novak",
      "date": "2013-03-21T16:40:27.748-0400",
      "body": "The FatPanel iframe had a wrong include for jquery which was pointing to a jquery.js which does not exist. This would cause an iframe to have a jQuery object to be undefined and eventually lead to the issue described in the JIRA.\\\nClosing the issue since it is not the bug.\n"
    }
  ]
}
---
uiOptions demo fails trying to resolve jQuery

uiOptions demo fails if Infusion is built without jQuery included\
ant -lib lib/rhino infusionAllBuilds -Dexclude="jQuery" -DnoMinify="true"\
but included through a script tag.

There is an error in the demo /build/assembled/demos/uiOptions/html/uiOptions.html\
at line 18002: that.renderUIOContainer = that.jQuery("body", that.iframeDocument);\
because there is no jQuery attached to iframeWindow\
var iframeWindow = that.iframe\[0].contentWindow;

This issue is most likely the reason for OERC to fail in IE\
<https://www.assembla.com/spaces/iskme/tickets/988>

HOW TO REPLICATE / TEST:

The example of this bug located in the following branch:\
<https://github.com/anvk/infusion/tree/FLUID-4940-bug>\
You will be able to observe errors by opening /build/assembled/demos/uiOptions/html/uiOptions.html in FireFox with a FireBug ON

        