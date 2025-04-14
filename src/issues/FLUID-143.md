---json
{
  "title": "FLUID-143",
  "summary": "Dragging using white space selects and highlights other thumbnails on the page in IE 6 & 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2007-12-13T10:41:28.000-0500",
  "updated": "2008-01-31T16:16:11.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XP, IE 6 & 7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-101/",
      "key": "FLUID-101",
      "summary": "For drag-and-drop in IE6 and IE7, dragging changes the colour of the thumbnails as one drags the avatar over them."
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-143/18-dec-jon-Fluid143.patch",
      "filename": "18-dec-jon-Fluid143.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-143/Fluid143-eli.1.11.patch",
      "filename": "Fluid143-eli.1.11.patch"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-12-17T16:45:17.000-0500",
      "body": "More insight into this problem. Due to Fluid-149 (<http://issues.fluidproject.org/browse/FLUID-149>), when drop targets do not render, the above bug does not occur. But when drop targets are rendered, the above bug appears.\n\nIt would seem that this problem is related to the rendering of the drop targets. What happens if the drop target code is removed, does this problem go away?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-18T10:57:15.000-0500",
      "body": "Been doing some research into this issue. Apparently this is an anomaly in IE where drag selections will highlight text. A workaround was spotted on this webpage: <http://www.ditchnet.org/wp/2005/06/15/ajax-freakshow-drag-n-drop-events-2/>\n\ndocument.body.ondrag = function () { return false; };\\\ndocument.body.onselectstart = function () { return false; };\n\nThe problem with the above example is that it prevents anyone from selecting text (which is an accessibility issue).\n\nCurrently investigating other methods which will accomplish the same effect, and keep accessibility concerns.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-18T12:11:01.000-0500",
      "body": "Fixed this bug by adding IE specific code to override ondrag and onselectstart functions. This prevents text selection by mouse, but this functionality was not possible anyway in the Reorderer because of the way DnD was implemented in the component.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-20T16:31:04.000-0500",
      "body": "This might be related to what we've just learned about how the avatar redirects the mousemove events (see <https://fluidproject.atlassian.net/browse/FLUID-146#icft=FLUID-146>).\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-01-11T16:41:46.000-0500",
      "body": "I've got a fix. It's slightly ugly but it works.&#x20;\n\nFirst, let me say that Jonathan did great work on this bug. His fix was right on the money (nice bit of research) under Dojo but it broke again under jQuery because the domNode went from being an actual dom object to a jQuery object, and jQuery doesn't like IE specific events (who does?).&#x20;\n\nSo I had to get an actual dom node to catch drag and selectstart on. And so I give you:\n\ndocument.getElementById( jQuery(domNode).attr('id') ).ondrag = function () { return false; }; \\\ndocument.getElementById( jQuery(domNode).attr('id') ).onselectstart = function () { return false; };&#x20;\n\nI'm going to see if I can clean it up before I check it in. Maybe make it a little less ugly. I think that there's a nicer way to cast a jQuery object node to a regular browser obj.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-01-11T17:36:44.000-0500",
      "body": "Fluid143-eli.1.11.patch is my updated patch for Fluid143. This one is compatible with jQuery. It's a little hacky but not bad. The only thing that might want to be done here is a test for IE but I don't think that there would be any real improvement especially if the setupDOMNode function is only called once.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-01-14T12:08:38.000-0500",
      "body": "Although perhaps it's obvious, I thought I should make clear why the first snippet of code that I offered up was crap and why what I eventually put in the patch was better (and not just because it's shorter).\n\nThe first bit 'o code assumed that domNode has an id, most probable but still a bad assumption. The following code uses an actual object reference and therefor should always work. Oh, and it's shorter.\n\njQuery(domNode).get(0).ondrag = function () { return false; }; \\\njQuery(domNode).get(0).onselectstart = function () { return false; };\n\nI suspect that I could find a little shorthand that would make the code even tighter. I tried jQuery(domNode)\\[0] which should have worked but didn't. And I was thinking that I might be able to find a better trap than \"function () { return false;}\". But this'll do.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-01-31T13:25:48.000-0500",
      "body": "Thanks Eli for the code! After pairing with Colin, we have submitted a fix for this bug which is a slight variation of what you have.\n"
    }
  ]
}
---
When dragging using white space of a thumbnail, all thumbnails from the selected thumbnail to the end of the list become highlighted in the browser's / OS's highlighting style.

If dragging using a part of a thumbnail that isn't white space (i.e. the anchor or image), then the above behaviour doesn't occur.

        