---json
{
  "title": "FLUID-4972",
  "summary": "Investigate carousel/scrolling options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2013-04-08T10:05:06.123-0400",
  "updated": "2015-06-15T10:13:19.891-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5009/",
      "key": "FLUID-5009"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2013-04-08T10:06:18.142-0400",
      "body": "via jhung: One issue which I hope will be addressed in the next sprint is the problem with the fixed-width UIO panel. Currently in order for the panel to scroll properly horizontally, the panel needs to be a fixed width and problems occur when the implementor or user has more or less panels that fit this width optimally.&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-04-08T15:07:42.977-0400",
      "body": "List of carousel plugins & widgets\\\n<http://wiki.jqueryui.com/w/page/12137729/Carousel>\n\nI'm liking this one best so far:\\\n<http://www.gmarwaha.com/jquery/jcarousellite/index.php>\n\nSeems to work with cross-browser (cross-device??) mouse wheel support, so you can use the buttons or mouse/slide... need to test\\\n<http://plugins.jquery.com/mousewheel/>\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-04-08T15:53:26.661-0400",
      "body": "Demo of jcarousellite w/ mousewheel plugin, using UIO styling.\\\n<https://github.com/heidiv/infusion/tree/FLUID-4972>\n\nGo to /infusion/src/webapp/standalone-demos/carousel/html/Carousel.html\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-04-24T10:25:48.007-0400",
      "body": "Joanna would like the # panels to be constant as things scale. The spacing will be determined by how the panels fit on the screen in the slider/carousel so that if any are offscreen you can see a portion of them to indicate that there are more. The margins would remain the same, at least 10px, but may vary depending on the the browser width (so that all full preference boxes are centred and only a small portion of the next/previous are visible on the sides). See irc convo between jvass and Justin\\_o at <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-04-23>\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-06-04T10:15:50.871-0400",
      "body": "We've chosen to try implementing the accessible jquery-ui carousel\\\n<http://hanshillen.github.io/jqtest/#goto_carousel>\n"
    }
  ]
}
---
Investigate our options for implementing the arrow/scroll behaviour in the new UIO designs \
<http://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Design+High+Fidelity%2C+C.1>

Interactions described:\
<http://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Keyboard+and+Mouse+Interaction>

Look into what exists right now (jquery ui, jquery mobile).

        