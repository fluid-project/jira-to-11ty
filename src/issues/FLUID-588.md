---json
{
  "title": "FLUID-588",
  "summary": "OSDPL Architecture: Figure out how to create a parent-child relationship between patterns & implement solution",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Allison Bloodworth",
  "date": "2008-05-13T12:57:19.000-0400",
  "updated": "2014-04-02T16:35:55.387-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1131/",
      "key": "FLUID-1131",
      "summary": "OSDPL Architecture:Review current OSDPL and address Phase 2 architecture questions"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1239/",
      "key": "FLUID-1239"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-13T12:57:42.000-0400",
      "body": "futuretask\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-09T21:25:01.000-0400",
      "body": "I am able to create a parent-child relationship with the menus for now--I didn't realize it was DTHML menus which was making it impossible to click on and navigate to the top level navigation item (e.g. Drag and Drop).\n\nThough it might be better to do this semantically and either actually link UI design pattern nodes in parent-child relationships (the ideal case) or create a subcategory (e.g. Drag and Drop under Information Organization), for now I think things will work just fine using the menu capabilities. If we ever decide not to have any sort of moderator, that should probably be revisited.\n\nI did also try to create a subcategory for Drag and Drop under Information Organization, but processing the URL generated (e.g. taxomony-menu/1/2/25) is more difficult (if not impossible) than processing a URL generated with just one level of hierarchy in a category (e.g. taxonomy-menu/1/2). So, again, for now I think we can leave this to us to handle in the  menu system.&#x20;\n\nIn the future it **would** be nice to show a more semantic parent-child relationship between UI design pattern nodes, as is possible using the \"book\" content type, so I will leave this as a future task.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-19T13:56:10.000-0500",
      "body": "Node Hierarchy may be what we need: <http://drupal.org/project/nodehierarchy>\n"
    }
  ]
}
---
is there a way to make a node a child of another node in a way other than using the menu? - looks like only books have the concept of a parent node. The drag and drop pattern should be the parent of the drag and drop - layout preview and drag and drop - list ordering patterns. Tried creating a subcategory under Information Organization called Drag and Drop, but couldn't make it work as I don't think it's possible to allow it to be both a subcategory & a page at the same time.&#x20;

        