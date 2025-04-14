---json
{
  "title": "FLUID-4",
  "summary": "Lightbox javascript does not run in Internet Explorer 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Jonathan Hung",
  "date": "2007-06-26T12:38:07.000-0400",
  "updated": "2007-06-27T09:43:21.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XP Pro SP2 with Internet Explorer 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-06-26T13:28:56.000-0400",
      "body": "The problem is caused by the definition of the \".orderChangedCallback()\" function defined within \"FluidProject.initLightbox()\".  Specifically the call to \"dojo.xhrPost()\" caused IE to hiccough when loading Lightbox.js.  Commenting out the lines, thus:\n\n//\t      dojo.xhrPost({\\\n//          url: reorderform.action,\\\n//          form: reorderform,\\\n//          load: function(type, data, evt){ /\\* No-op response \\*/ },\\\n//          });\n\nmade IE happier.  That is, the jsUnit tests run, the standalone version ot the lightlbox works, and the lightbox js loads and works within the gallery tool.\n\nWhy this call is a problem in IE but not FF is unresolved.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2007-06-27T09:11:36.000-0400",
      "body": "The current trunk does not work in IE6 either, which I assume is the same issue. Looks like dojo.xhrPost is not supported for IE, or perhaps it is just the use of \"form\". Looking into this a bit...\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2007-06-27T09:43:21.000-0400",
      "body": "Fixed in rev 10341 - It was the trailing comma in the function member list!!!\n"
    }
  ]
}
---
Can not run the JSUnit tests, the stand-alone HTML, nor the Gallery Tool in Internet Explorer 7. This is because the Lightbox Javascript referenced in the Script tag does not load properly.

This appears to involve the script tags at the top of the Lightbox.HTML.

Last known working version: Rev. #10219 (June 22, '07).

        