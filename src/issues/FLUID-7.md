---json
{
  "title": "FLUID-7",
  "summary": "In IE6 & 7, focus style is not being applied to the first item in the Lightbox",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Jonathan Hung",
  "date": "2007-06-27T09:33:36.000-0400",
  "updated": "2007-12-18T14:55:02.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XP SP2 with IE 6 and 7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-115/",
      "key": "FLUID-115"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-23/",
      "key": "FLUID-23"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-145/",
      "key": "FLUID-145"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2007-06-27T10:07:50.000-0400",
      "body": "As a general note, no W3C DOM compliant browser (up to level 2 at least) can cause focus on a non-input node - this is a behaviour seemingly supported by FF after version 2.0 but probably no other browser. Just mentioning this here since a few times things have been committed to the test cases which cause them to fail by attempting to call focus() on a DIV node.\n\n<http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html>\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-07-04T10:30:11.000-0400",
      "body": "While it is true that tabbing and keyboard focus of non-form elements and links is not part of the current DOM standard, our goal is to use the emerging accessibility features from W3C (and, secondarily, WHATWG).  We are following the current ARIA draft (<http://www.w3.org/TR/aria-roadmap/>), since this will be a standard in the not too distant future.  Specifically, there is a new 'tabindex' feature that allows  **any** element to acquire focus.\n\nARIA tabindex:\\\n<http://www.w3.org/TR/2007/WD-aria-state-20070601/#tabindex>\n\nHTML5 tabindex:\\\n<http://www.whatwg.org/specs/web-apps/current-work/#tabindex>\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-07-04T13:16:00.000-0400",
      "body": "A followup to my last comment.  The WhatWG HTML5 draft is now a W3C draft:\\\n<http://dev.w3.org/cvsweb/~checkout~/html5/spec/Overview.html?content-type=text/html;%20charset=utf-8#tabindex>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-26T16:14:27.000-0500",
      "body": "The problem is related to moving focus from the thumbnail to an anchor within it when a thumbnail is selected. This is done so that pressing enter will activate the anchor. An alternative way of handling this functionality is to have a callback that we execute when enter is pressed.&#x20;\n\nIn IE, the focus change to the anchor causes a blur event on the lightbox. The blur handler then proceeds to remove the focus styling from the thumbnail.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-26T16:33:03.000-0500",
      "body": "I committed a change which ignores the blur event when the browser is IE. Ideally I would have changed the refocusing to use a callback but since we are currently in API freeze in preparation for the 0.1 release I decided that this minimal change is more acceptable. The result of the change is that in IE tabbing away from the lightbox will not change the style of the currently selected thumbnail.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-11T10:32:18.000-0500",
      "body": "Tested this bug on Dec 12, 2007 using Fluid-0.1 release.\n\nTabbing into the Lightbox in IE 6 & 7 properly applies the highlighted style to the first thumbnail.\n\nThere are other outstanding issues with respect to thumbnail styling in IE 6 & 7 (i.e. tabbing away keeps thumbnail in a highlighted style, and keyboard move does not apply the dragging style). However I propose that this bug be closed since this specific bug does not occur any more.\n"
    }
  ]
}
---
Currently when tabbing to the Lightbox, the first item is never focused or appears to be selected. The Lightbox functions but there are no visual cues to show this (i.e. having the first item selected).

Internet Explorer 6 & 7 can not focus on the DIV element containing the Lightbox. Because of this, when tabbing to the Lightbox the first item in the Lightbox will not gain focus or change to the selected style.

Theoretically tabindex 0 should allow IE to focus on non-focusable elements. Placing Tabindex="0" on the container DIV does not appear to have any effect.  However, placing a tabindex of "0" on the thumbnail div of the first item will give it focus when tabbing through.

        