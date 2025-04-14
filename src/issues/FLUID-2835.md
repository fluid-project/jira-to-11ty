---json
{
  "title": "FLUID-2835",
  "summary": "Toggle open and close for categories (i.e. Easier to see, easier to find) doesn't allow for manually closing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Daphne Ogle",
  "date": "2009-05-28T21:15:52.000-0400",
  "updated": "2011-03-04T15:43:06.786-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2421/",
      "key": "FLUID-2421",
      "summary": "Make the accordian part of the UI Options component instead of having it live in the template"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-02T09:48:26.000-0400",
      "body": "This is the nature of an accordion.\n\nHere is the comment from jquery UI about this. \\\n(<http://jqueryui.com/demos/accordion/>)\n\nNOTE: If you want multiple sections open at once, don't use an accordion\n\nAn accordion doesn't allow more than one content panel to be open at the same time, and it takes a lot of effort to do that. If you are looking for a widget that allows more than one content panel to be open, don't use this. Usually it can be written with a few lines of jQuery instead, something like this:\n\njQuery(document).ready(function(){\\\n$('.accordion .head').click(function() {\\\n$(this).next().toggle();\\\nreturn false;\\\n}).next().hide();\\\n});\n\nOr animated:\n\njQuery(document).ready(function(){\\\n$('.accordion .head').click(function() {\\\n$(this).next().toggle('slow');\\\nreturn false;\\\n}).next().hide();\\\n});\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-06T14:23:07.000-0500",
      "body": "The \"Cabinet\" component that is in Engage may be useful for this\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-10-05T09:26:49.930-0400",
      "body": "do we still want to use the accordion?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-03-04T15:43:06.776-0500",
      "body": "This is no longer an issue because the new designs do not have an accordion.&#x20;\n"
    }
  ]
}
---
Currently, it looks like the toggle can't be closed manually and is only closed when another category is open.  I thing the behavior we want is for the user to choose when they open and close.  Easier to see should still be the only one open by default but users may want to have everything open and scroll rather than opening and closing all the time.

        