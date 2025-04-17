---json
{
  "title": "FLUID-4181",
  "summary": "Update approach to fl-offScreen-hidden to not use negative text-indent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "heidi valles",
  "date": "2011-04-07T16:03:14.500-0400",
  "updated": "2011-04-18T13:15:43.374-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4182/",
      "key": "FLUID-4182"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4181/hide-test.html",
      "filename": "hide-test.html"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-04-12T15:41:23.356-0400",
      "body": "From Gary's portlet styles contribution in FLUID-41024, fss-layout-portlet.css:\n\n/\\* Hiding Stuff \\*/\\\n/\\* Thanks to the Awesome HTML5 Boilerplate for compiling this great stuff: <http://html5boilerplate.com/> \\*/\\\n/\\* Hide for both screenreaders and browsers:\n\n* css-discuss.incutio.com/wiki/Screenreader\\_Visibility \\*/\\\n  .hidden { display: none; visibility: hidden; }\n\n/\\* Hide only visually, but have it available for screenreaders: by Jon Neal.\n\n* www\\.webaim.org/techniques/css/invisiblecontent/  &  j.mp/visuallyhidden \\*/\\\n  .visuallyhidden { border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px; }\\\n  /\\* Extends the .visuallyhidden class to allow the element to be focusable when navigated to via the keyboard: drupal.org/node/897638 \\*/\\\n  .visuallyhidden.focusable:active,\\\n  .visuallyhidden.focusable:focus { clip: auto; height: auto; margin: 0; overflow: visible; position: static; width: auto; }\n\n&#x20;\\\n/\\* Hide visually and from screenreaders, but maintain layout \\*/\\\n.invisible { visibility: hidden; }\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-12T16:40:59.448-0400",
      "body": "jQuery UI's hidden classes:\n\n.ui-helper-hidden { display: none; }\\\n.ui-helper-hidden-accessible { position: absolute !important; clip: rect(1px 1px 1px 1px); clip: rect(1px,1px,1px,1px); }\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-13T14:30:30.493-0400",
      "body": "hey Justin, can you look this over? The new fss-layout.css styles are in my github at <https://github.com/heidiv/infusion/tree/FLUID-4181>  and the attached test file can be put in demos/fss/\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-18T13:15:39.603-0400",
      "body": "I've cherry-picked the relevant commits from heidi's branch, modified the comments and release notes about the css from HTML5 Boilerplate and pushed it up to the project repo at 114c347fed569e601455dfaa90eb750d1ac020819\n"
    }
  ]
}
---
Hiding content off-screen by a negative text-indent is not the best solution, esp with CSS3's ability to rotate content, etc. jQuery UI and Gary's portal stylesheets have other ways of doing this. We should check them out and probably update our styles.

        