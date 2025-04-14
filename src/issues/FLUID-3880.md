---json
{
  "title": "FLUID-3880",
  "summary": "FSS reset causes borders to appear on elements in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2010-12-07T13:51:24.484-0500",
  "updated": "2011-05-02T17:51:46.016-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": "Windows, Internet Explorer 8 (possibly other versions)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3880/fss-reset-focus-bug.PNG",
      "filename": "fss-reset-focus-bug.PNG"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-01-07T11:20:06.945-0500",
      "body": "uPortal's preference: let the browser handle focus styling.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-04T13:51:00.749-0500",
      "body": "Fluid-work list thread on Reset file\\\n<http://old.nabble.com/FSS-reset-to31062158.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-07T09:56:59.176-0500",
      "body": "Some notes from our FSS talk\n\n⁃\twe can remove the focus styling or scope it to more specific cases\\\n⁃\tcould be part of the themes or it's own fss file\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-04T14:14:40.635-0400",
      "body": "At the second FSS talk, we decided that the borders should be handled by scoping it to a class name.\\\n<http://old.nabble.com/Let%27s-talk-about-FSS-td31035264.html#a31289536>\n\ne.g. \".fl-focus :focus {}\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-04T17:10:01.097-0400",
      "body": "I've implemented the scoping of :focus in a branch on my github account <https://github.com/jobara/infusion/tree/FLUID-3880>\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-07T15:33:21.546-0400",
      "body": "Justin I've updated the theme styles and pushed them here: <https://github.com/heidiv/infusion/tree/justin-FLUID-3880>\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-14T17:49:55.455-0400",
      "body": "1\\) Missing fl-focus in:\\\nall the demo.html files in /demos\n\ndemos/fss/reset/reset.html\\\ndemos/fss/reset/withReset.html\n\n2\\) Weird div focusing in demos/fss/themes/html/themes.html \\\n-The divs are getting the dark outline, but their contents the focus of the theme\\\n-The menu items take two tabs to focus. Not sure what's going on here...\n\n3\\) Uploader focus not on all parts. Ex. files within queue. demos/uploader/html/uploader.html\\\nNo focus on components/uploader/html/Uploader.html\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-15T15:51:29.448-0400",
      "body": "Heidi, here are my comments for the points you raised above.\n\n1\\) added fl-focus to the individual demo.html files and withReset.html. I didn't add it to reset.html as this just contains iframes\n\n2\\) This is likely an FF4 issue with their bug which causes items with overflow:auto to be tabbable\n\n3\\) 'm pretty sure the uploader has it's own focus styling already.. so i just added fl-focus to those extra buttons that switch between the types of uploader that are instantiated\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-18T17:50:09.440-0400",
      "body": "pushed to the project repo at 44b701cf96d76a9434551b48312499a93b92cce0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-27T13:58:29.344-0400",
      "body": "component and demo css that overrode the :focus to remove focus styling, should be removed now that :focus has been scoped to fl-focus.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-29T09:52:55.122-0400",
      "body": "I'm noticing files like gridReorderer.css for example has .demo-gridReorderer-alphabetGrid div :focus  ...where we could just put fl-focus on that div instead.\\\nSearching in webapp for :focus finds a lot of similar situations. Worth cleaning up? I'm not sure it's a big deal, when time is of the essence but it would reflect the switch to using fl-focus on specific items better.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-29T13:51:24.643-0400",
      "body": "Where applicable i've changed the demos to use fl-focus. The changes were made in my <https://fluidproject.atlassian.net/browse/FLUID-3880#icft=FLUID-3880> branch in my github repo <https://github.com/jobara/infusion/commit/e49593a49f7bd4ccbaa6bf67d447332747796c42>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-02T17:51:46.015-0400",
      "body": "Merged into the project-repo at 599dab9d15e334b6ba0d492262c41416f23c40e8\n"
    }
  ]
}
---
If using FSS reset, black focus outlines will appear in IE8 on elements not intended to receive focus. For example, table cells and even the body element will receive a 2pc black outline.

To work-around this issue, the following can be added to CSS:\
:focus { outline: none; }

However, this solution may not be ideal because it affects the global namespace.

If using this workaround, you will then have to specify focus styling for the elements you intend.

        