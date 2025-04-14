---json
{
  "title": "FLUID-3",
  "summary": "Implement internationalized strings for stand-alone",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2007-06-26T12:28:27.000-0400",
  "updated": "2007-10-01T14:18:54.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2007-06-27T09:47:48.000-0400",
      "body": "I'm not convinced we need to supply localised text outside of a server environment?\\\nThe standalone distribution is only for previewing and test, and any strings which are seen there are largely for \"bulk\" which could be just as easily in any language (Latin is a commonly chosen one!)\\\nOr are we imagining a requirement where we would hand out samples of the Lightbox files where the user review would actually be on the message content? In that case we would need to localise **all** the content, including the image fruit labels... 😛\n"
    }
  ]
}
---
When Lightbox is served up by the Gallery Tool in Sakai, localizable text is provided by the server using .properties files. When running stand-alone there is no such server. Therefore, the stand-alone HTML file (currently Lightbox.html) should be able to provide the localized text without a server being run.

A solution is to hard-code the strings into the Lightbox component.

        