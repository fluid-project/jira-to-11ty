---json
{
  "title": "FLUID-4037",
  "summary": "Review new scrolling table styles and add to FSS demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-01-20T11:28:09.023-0500",
  "updated": "2014-04-02T15:49:53.269-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3837/",
      "key": "FLUID-3837",
      "summary": "Clean up Uploader's markup"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4037/FLUID_4037-b.patch",
      "filename": "FLUID_4037-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4037/FLUID_4037-c.patch",
      "filename": "FLUID_4037-c.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4037/FLUID-4037.patch",
      "filename": "FLUID-4037.patch"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-01-25T17:41:03.191-0500",
      "body": "This patch renames scrolling table styles in fss-layout.css, adds an fss demo, tweaks Uploader.css, and updates FluidView\\.js\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-25T17:45:37.391-0500",
      "body": "Requires patch from 3837 first\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-26T10:07:21.535-0500",
      "body": "Remake patch to svn add new demo files, test on windows.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-28T13:27:50.351-0500",
      "body": "Cleaner patch created after fluid-3837 commit.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-28T13:29:59.712-0500",
      "body": "hey c, could you review this patch? It cleans up the fss-layout classes (and tweaks the fluidview\\.js and uploader.css to match) and adds the fss demo\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-31T16:18:49.669-0500",
      "body": "fl-table is a better namespace to use (vs fl-scrollableTable), in case future table css is added to fss.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-02T18:57:35.802-0500",
      "body": "Heidi, I've committed a mildly tweaked version of your last patch to a Github repo: <https://github.com/colinbdclark/infusion-FLUID-4037>\\\nI can't get the scrollable table (either the demo or the Uploader) to work with IE6. I corrected a few stray commas that was causing things to freak in IE; can you take a look and see if you can iron out the styling quirks?\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-07T13:00:48.658-0500",
      "body": "Pushed fix - added refreshView() to scroller component, which checks the height of the scrollable area and sets it inline (IE6 req's a height style) if it's over the max-height. Also added function to uploader's refreshView function.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-07T15:59:27.750-0500",
      "body": "Needs linting and a strategy for supporting a default max-height when appropriate. Users might want to specify a max-height by overriding the CSS, or alternatively passing in a default value to the fluid.scrollable() component's options. We should support both.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-07T16:32:49.760-0500",
      "body": "Linted.&#x20;\n\nWe currently do support max-height by both overriding css and passing as option. The issue is what do we do when neither of these are set. fss-layout.css contains a default max-height for scrollable tables, but if the scrollable isn't an fss scrollable table (or not a table at all), and doesn't have max-height set, what should be done?&#x20;\n\nIt might make sense to not do anything. If it's not set, a height shouldn't be imposed.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-11T11:32:12.159-0500",
      "body": "git branch was pushed to the Infusion project repository and a minor modification was made in commit 2d86df20d4c35d619b78d7e8731de95887fd42e3.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-04T13:54:37.767-0500",
      "body": "This feature was pulled from 1.3.1 due to some bugs with absolute positioned items (i.e. the progress bars)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-04T13:55:18.814-0500",
      "body": "Some information about scrollable tables from Gary <http://old.nabble.com/Scrolling-Table-to31062898.html>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:49:53.268-0400",
      "body": "We're deprecating FSS.\n"
    }
  ]
}
---
scrolling table was added to fss-layout with these styles:

/\* scrollable table with fixed header \*/\
.fl-table-scrollable-container { /\* space for fixed header \*/\
position:relative;\
padding-top:2em;   \
}

.fl-table-scrollable-area { \
max-height:160px;\
overflow: auto;\
overflow-x: hidden;\
overflow-y: auto;\
}

.fl-table-scrollable-area table thead tr { /\* fixed table header \*/\
left: -1px; \
top: 0;\
position: absolute;   \
}

***

Make sure the naming convention is correct, will work generally (right now just used in uploader), then add an example to the FSS demo.

        