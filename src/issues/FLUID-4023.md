---json
{
  "title": "FLUID-4023",
  "summary": "Reconsider overflow:auto for containers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gary Thompson",
  "reporter": "heidi valles",
  "date": "2011-01-07T11:15:30.554-0500",
  "updated": "2011-06-06T11:05:58.979-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-03-04T14:09:54.531-0500",
      "body": "See <http://old.nabble.com/Updates-to-FSS-to30963054.html> for a suggested alternative to fl-fix\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-07T10:22:22.769-0500",
      "body": "from FSS:\n\n.fl-fix {overflow: auto; zoom:1;}\n\njQuery UI's clearfix:\n\n<https://github.com/jquery/jquery-ui/blob/master/themes/base/jquery.ui.core.css>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-08T10:12:21.506-0500",
      "body": "Here's a nice summary of the various clearing fixes <http://blogs.sitepoint.com/2005/02/26/simple-clearing-of-floats/>&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-08T11:23:47.121-0500",
      "body": "Added an fl-fix manual test to my github repo: <https://github.com/jobara/infusion/tree/FLUID-4023/src/webapp/tests/manual-tests>\\\nThis can be used to help us determine the best approach to take.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-14T14:22:28.080-0400",
      "body": "some info on inline-block: <http://robertnyman.com/2010/02/24/css-display-inline-block-why-it-rocks-and-why-it-sucks/>\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-03-30T11:17:01.956-0400",
      "body": "Our recommended solution (new clearfix) has been added to fss-layout.css as fl-clearfix. Available at <https://github.com/jobara/infusion/tree/FLUID-4023>\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-03-30T11:24:55.261-0400",
      "body": "hi Gary! Could you try out our new fss-layout.css file on Justin's github for this issue? It has a new style called fl-clearfix that hopefully fixes your issues. Let us know how it works.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-13T10:35:26.994-0400",
      "body": "Checkout this clearfix from [http://html5boilerplate.com](http://html5boilerplate.com/) 's style.css and see how it compares to our new one.\n\n/\\* The Magnificent Clearfix: Updated to prevent margin-collapsing on child elements.\\\nj.mp/bestclearfix \\*/\\\n.clearfix:before, .clearfix:after { content: \"\\0020\"; display: block; height: 0; overflow: hidden; }\\\n.clearfix:after { clear: both; }\\\n/\\* Fix clearfix: blueprintcss.lighthouseapp.com/projects/15318/tickets/5-extra-margin-padding-bottom-of-page \\*/\\\n.clearfix { zoom: 1; }\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-16T15:59:39.612-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-18T12:37:24.204-0400",
      "body": "sent pull request <https://github.com/fluid-project/infusion/pull/48>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-01T14:48:46.690-0400",
      "body": "Since I haven't been able to get a reply about an open source license for the \"New Clearfix\", I switched to the \"Micro Clearfix\" which has an MIT license and less css.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-02T14:03:12.595-0400",
      "body": "Merged into project repo at f430de85a8465aa09eeaa54bbe71f44ce06fe9b4\n"
    }
  ]
}
---
This is causing problems for containers, specifically in IE.&#x20;

Research more...

Uportal:\
-removed and replaced with script from 'box model' on positioniseverything.net\
-used jquery helper styles "ui-helper-clearfix"\
-applied to all containers w/ overflow

TODOs and Requirements

1\.	Research possible solutions\
⁃	work cross browser (a-grade at least)\
⁃	force floats to clear, to be contained within their parent\
⁃	content should remain within the borders of its parent\
⁃	clearing should not force the parent to clear all the way down to the bottom of neighbouring float columns\
⁃	the fix should not cause unexpected scroll bars or hidden content\
2\.	Implement test page that allows you to compare the various solutions\
3\.	Update fl-fix and/or add an additional clearfix solution to the fss

        