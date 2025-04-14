---json
{
  "title": "FLUID-2896",
  "summary": "solve problem of preview not working for http://fluidproject.org",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-06-02T16:20:28.000-0400",
  "updated": "2009-06-04T14:53:06.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2909/",
      "key": "FLUID-2909",
      "summary": "website needs to only use fluidproject.org - remove references to www.fluidproject.org"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-03T10:57:24.000-0400",
      "body": "Added a code snipit into initUIOptions as noted below.\n\nvar initUIOptions = function() {\\\nvar options = {\\\nlisteners: {\\\nafterRender: function() {\\\n$('.uiOptions .fl-col:eq(0)').accordion({\\\nheader: 'h2',\\\nclearStyle: true,\\\nautoHeight: false\\\n});\\\n$('.uiOptions .fl-col h2:eq(0)').focus();\\\n},\\\nonCancel: function() {\\\n$(\"#uiOptionsContainer\").dialog(\"close\");\\\n},\\\nonSave: function() {\\\n$(\"#uiOptionsContainer\").dialog(\"close\");\\\n}\\\n}\\\n};\n\n// solves the uri security issue\\\n// remove if we can get relative uri working\\\n//locate .flc-uiOptions-preview-frame in the template\\\n//replace the src parameter with the appropriate value\\\n$(\".flc-uiOptions-preview-frame\").attr(\"src\", \"http://\" + location.host +\\\n\"/uploads/ui-options/UIOptionsPreview.html\");\n\nuiOptions = fluid.uiOptions(\"#uiOptionsContainer\", options);\\\n$(\"#uiOptionsContainer\").dialog('option', 'position', 'center');\\\n};\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-04T14:52:43.000-0400",
      "body": "Ended up removing this code after forcing website to have [http://fluidproject.org](http://fluidproject.org/) url only. <https://fluidproject.atlassian.net/browse/FLUID-2909#icft=FLUID-2909>\n"
    }
  ]
}
---
In the javascript to use ui options, you need to load the ui options template from an html page on the server. Because of ?security issues? I have had to use the exact url in the javascript to load the UIOptions template (see javascript snippet below). I would prefer to have used a relative url, but get security errors when I do.

var loadUIOptions = function() {\
var urlSelector = "http://" + location.host + "/uploads/ui-options/UIOptions.html .uiOptions";\
$("#dialogContent").load(urlSelector, initUIOptions);\
};

I figured out that using the location.host above solved the problem of having two possible urls - [http://www.fluidproject.org](http://www.fluidproject.org/) or [http://fluidproject.org](http://fluidproject.org/)

However, I have a similar problem in the template - which loads the preview template. I am really not sure how to address this issue.

Ideally it would be best to solve the security issue and go back to the relative url, but otherwise a solution to the preview problem would also work.

        