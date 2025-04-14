---json
{
  "title": "FLUID-1803",
  "summary": "editable items lose all their classes on init",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Eli Cochran",
  "date": "2008-11-13T14:26:23.000-0500",
  "updated": "2008-11-17T08:51:08.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1803/FLUID-1803.patch",
      "filename": "FLUID-1803.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-11-13T14:45:46.000-0500",
      "body": "Added a patch <https://fluidproject.atlassian.net/browse/FLUID-1803#icft=FLUID-1803>.patches that changes the default style key from defaultViewText to defaultViewStyle and updates the references to it\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T22:10:38.000-0500",
      "body": "Looks like this was resolved with test case at revision 6022.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-14T09:02:11.000-0500",
      "body": "The styling information appears to be present, but the class is still removed.&#x20;\n\n\\<span class=\"\" style=\"padding-right: 3px;\" tabindex=\"0\" role=\"wairole:button\">Astronomy 7A P 001 LEC\\</span>\n\nIs this the correct behaviour?\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-14T09:40:44.000-0500",
      "body": "No it isn't. So now I'm confused as my commit doesn't seem to have taken.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-14T09:48:20.000-0500",
      "body": "I've looked into it and I'm not seeing the same behavior. Once rendered, I see:\\\n\\<span class=\"text sectionName\" style=\"padding-right: 3px;\" tabindex=\"0\" role=\"button\">\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-17T08:51:08.000-0500",
      "body": "I'm now seeing the correct behaviour..\n\nVerified fix using:\n\nFF2 (Mac OS 10.5)\n"
    }
  ]
}
---
when presented with markup such as:&#x20;

\<div class="inlineEditable">\
\<span class="text sectionName">Astronomy 7A P 001 LEC\</span>\
\</div>

once inlineEdit has initialized the DOM is:&#x20;

\<div class="inlineEditable">\
\<span class="">Astronomy 7A S 102 LEC\</span>\
\<span>\<input type="text" class="edit"/>\</span>\
\</div>

note the lack of classes in the class attribute

        