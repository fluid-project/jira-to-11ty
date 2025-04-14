---json
{
  "title": "FLUID-6693",
  "summary": "Provide a way to use default contrast theme styling on containers with fl-inverted-color",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2021-10-22T13:58:48.450-0400",
  "updated": "2021-10-22T13:58:48.450-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6693/Screenshot 2021-10-22 135558.png",
      "filename": "Screenshot 2021-10-22 135558.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6693/Screenshot 2021-10-22 135617.png",
      "filename": "Screenshot 2021-10-22 135617.png"
    }
  ],
  "comments": []
}
---
Provide a way to use default contrast theme colours on child containers whose parent has the fl-inverted-color class applied. This effectively reverses the inverted colour for that sub container.

This is particularly useful to make child containers stand out against an inverted container.

For example:

\<header class="fl-inverted-color">\
\<h1>Hello World\</h1>\
\<button>Menu\</button>\
\<ul class="fl-default-color">\
\<li> This menu\</li>\
\<li> is not\</li>\
\<li> inverted\</li>\
\</ul>

Screenshot 2021-10-22 135558.png\
Shows current fl-inverted-color behaviour. The header is inverted colour and the menu inside lacks contrast with the inverted background.

Screenshot 2021-10-22 135617.png\
Shows desired behaviour with the menu using the default contrast style while its parent container (the header) is inverted.

        