---json
{
  "title": "FLUID-1868",
  "summary": "More markup flexibility for buttons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jacob Farber",
  "date": "2008-11-28T12:29:36.000-0500",
  "updated": "2017-01-16T09:40:09.240-0500",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
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
      "author": "Jacob Farber",
      "date": "2009-06-05T15:58:29.000-0400",
      "body": "The code works now, but the CSS needs to still be refactored - its looking for a \\<BUTTON > element, rather than a class name (such as the existing fl-button)\n"
    }
  ]
}
---
To allow for even more flexible markup, any element should be able to be used as triggers for actions, not just elements with an innerText attribute\
i.e. \<input type="button" name="x" value="x" /> should be valid

As per my conversation with Colin, this is due to changing the text of elements on the fly with .html()

        