---json
{
  "title": "FLUID-5994",
  "summary": "Keyboard accessibility demo has errors in its use of aria-selected  and role=listitem ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "David",
  "date": "2016-10-26T15:17:06.071-0400",
  "updated": "2016-10-27T11:57:58.099-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "Chrome 53.0.2785.143 m (Windows 10)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6000/",
      "key": "FLUID-6000",
      "summary": "Make sure all Infusion core demo index pages pass markup validation "
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-10-26T16:58:16.204-0400",
      "body": "This issue appears to originate in component markup injected by Javascript, rather than the index.html page markup itself; it therefore won't be tackled as part of <https://fluidproject.atlassian.net/browse/FLUID-6000#icft=FLUID-6000>.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-10-26T17:32:57.522-0400",
      "body": "PR at <https://github.com/fluid-project/infusion/pull/770> - thanks @@David for report.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-10-26T17:45:13.993-0400",
      "body": "I'm going to try and fix a few of the other demo pages with issues with their injected markup under the heading of this JIRA as well.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-27T11:57:55.102-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/770> ) into the project repo a 0bcd507499bf4968630813c25c8146a8163a1e39\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/keyboard-a11y/>\
Ran the demo through the new validator (<https://validator.w3.org/nu/>) and a couple types of issues were shown.

Error: Attribute aria-selected not allowed on element img at this point.\
From line 99, column 21; to line 99, column 214\
\<li>\<img class="demo-image-thumbImg selectable" src="images/RedApple.jpg" alt="red apple" id="fluid-id-44w2berk-42" aria-selected="false" role="listitem" aria-controls="image-preview" tabindex="-1">\</li>↩\
Attributes for element img:\
Global attributes\
alt - Replacement text for use when images are not available\
src - Address of the resource\
srcset - Images to use in different situations (e.g., high-resolution displays, small monitors, etc)\
sizes - Image sizes between breakpoints\
crossorigin - How the element handles crossorigin requests\
usemap - Name of image map to use\
ismap - Whether the image is a server-side image map\
width - Horizontal dimension\
height - Vertical dimension\
longdesc - A url that provides a link to an expanded description of the image, defined in \[html-longdesc]&#x20;

Error: An element with role=listitem must be contained in, or owned by, an element with role=list or role=group.\
From line 97, column 21; to line 97, column 217\
\<li>\<img class="demo-image-thumbImg selectable" src="images/Mangosteen.jpg" alt="mangosteen" id="fluid-id-44w2berk-40" aria-selected="false" role="listitem" aria-controls="image-preview" tabindex="-1">\</li>↩

        