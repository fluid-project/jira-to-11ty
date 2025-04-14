---json
{
  "title": "FLUID-774",
  "summary": "The Layout Customizer's avatar does not appear in Safari 3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Colin Clark",
  "date": "2008-06-12T20:56:31.000-0400",
  "updated": "2008-08-14T10:34:16.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Layout Reorderer"
  ],
  "environment": "Safari 3 on Mac OS X 10.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-09T15:16:45.000-0400",
      "body": "Interestingly, the avatar is fine in the manual test file:\\\n<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/portal/simple-portlets.html>\\\ncomplete with at least some version of opacity.\n\nMaybe we could see how the opacity of the manual file is accomplishes, and whether or not that method could be used in the uPortal example...\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-07-15T20:15:10.000-0400",
      "body": "I have a feeling this has something to do with either: positioning assigned via javascript affecting the nested content , since we disabled all styling (incld. opacity) on the page and still ran into the problem; or a parsing error in the code itself breaking in Safari while other browsers fail silently (ids prefixed with \"undefined\\_\" may point to the problem).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-18T14:50:56.000-0400",
      "body": "This is also apparent in the Generic Lightbox example (<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>)\n\nOne thing of interest, is that the avatar retains some of the styling. If the item had focus styling before it was dragged, the avatar will retain this styling. In the uPortal example, the avatar's border will show. In the Lightbox example the avatar will be grey.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-24T15:40:52.000-0400",
      "body": "Added \"Lightbox\" to components&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-29T12:27:38.000-0400",
      "body": "Interestingly, Safari doesn't seem to suffer from as much of a slow down as other browsers, due to Fluid-856. This could either do with the Safari being faster, or that the avatar isn't being created and thus there is less to cause the slow down.\n\nYou can test this on the uPortal demo page (<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>).&#x20;\n\nFirst drag the lightbox portlet to a new location, then drag the images within the lightbox.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-30T15:40:49.000-0400",
      "body": "The sortable vertical list demo (<http://build.fluidproject.org/fluid/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>) does display a portion of the avatar. The first line of the list item will display in the avatar\n"
    }
  ]
}
---
In the uPortal example for the Layout Customizer (<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html> ), the avatar does not appear at all when you drag a portlet around. The drop indication does show up, as does the locked portlet warning message, but the avatar itself is invisible.

Could this be a bug related to our opacity setting?

dev-iteration40

        