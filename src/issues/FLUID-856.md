---json
{
  "title": "FLUID-856",
  "summary": "Nested Reorderers: Moving an 'outer' orderable causes 'inner' Reorderer to be created a second time.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-07T19:13:33.000-0400",
  "updated": "2008-09-08T09:09:41.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1124/",
      "key": "FLUID-1124"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-953/",
      "key": "FLUID-953"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T14:25:38.000-0400",
      "body": "This is as a result of the jQuery \"domManip\" function deciding to reevaluate any script blocks that it finds inside markup that it mangles. Obviously for init blocks which are simply being moved from one place to the other, this is not the desired behaviour. Unfortunately it is hard to think of a way to detach and then reattach a DOM node without causing JQuery to believe that the markup is \"new\" - for applications where we are very sure we are simply \"shuffling\" the dom, we might want to look into doing this by other means - it will certainly be cheaper and faster in any case.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:02:53.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n\nIt turns out that even without the use of JQuery, the \\<script> blocks are being evaluated on reattachment in any case. These have needed to be manually \"cleansed\" out of the DOM on move.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:09:41.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5, Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
In a case of nested Reorderers (for example, the uPortal sample page with the Lightbox in one of the portlets):

If an orderable item of the outer Reorderer, one containing a Reorderer (e.g. the Lightbox portlet), is moved, the inner Reorderer (the Lightbox) is re-instantiated. Specifically, the script inside the HTML of the portlet is re-executed.

Oddly, this only happens the first time you move it, and never again.

I've created a simple test file to make it easier to see:\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/nested-reorderers/nested.html>\
In this HTML file, the script tags have console logs. Open the console to see when the scripts are executed.

If you move either of the list items that have inner lists, you'll see that the script is executed again (but only the first time you move it).

This problem does not happen if all of the reorderers are instantiated in a single script block at the end of the file.

        