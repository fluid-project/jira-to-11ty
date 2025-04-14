---json
{
  "title": "FLUID-5561",
  "summary": "Convert Pager CSS to Stylus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2014-11-18T15:30:19.562-0500",
  "updated": "2021-03-23T12:48:32.378-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3921/",
      "key": "FLUID-3921",
      "summary": "When on first or last page, \"previous\" and \"next\" links, respectively, aren't grayed out"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2779/",
      "key": "FLUID-2779"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Dinuka Desilva",
      "date": "2016-03-04T11:56:11.814-0500",
      "body": "Hi @Justin Obara\n\nI just send a pull request to this, Appreciate if you could look in.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-03-11T10:29:19.738-0500",
      "body": "When I was testing Dinuka's pull request, I realized some stylings in the Pager.css file are no longer valid, such as at this line - <https://github.com/fluid-project/infusion/blob/master/src/components/pager/css/Pager.css#L20>, the selector \\`\\`\\`fl-pager-ui\\`\\`\\` that is meant to be an umbrella selector for the pager UI doesn't appear in any demo or example markups or javascript code. Most, or probably all, pager styling on the demo (<https://github.com/fluid-project/infusion/blob/master/demos/pager/index.html>) comes from the demo css file, in this demo - <https://github.com/fluid-project/infusion/blob/master/demos/pager/css/pager.css>. There are other pager css files for other pager examples in this repository. You can search the repo using \\`\\`\\`pager.css\\`\\`\\`.\n\nThis brings some thoughts of extending the coverage of this JIRA by revisiting the pager css contents, including css files for the Pager component, demos and examples, to:\n\n1\\. Remove the parts in the component Pager.css that are no longer valid;\\\n2\\. Better make use the css in the demo (or example) pager css files by moving the sensible pieces into the component Pager css file;\\\n3\\. Of course, the new component Pager.css is written in stylus.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-14T09:30:10.772-0400",
      "body": "I suppose it should be explore if the fl-pager-ui class should be put into the demos, or removed from the component CSS.\n"
    },
    {
      "author": "Dinuka Desilva",
      "date": "2016-03-15T03:48:58.078-0400",
      "body": "Yeah... But, also I feel like no point of having fl-theme-bw class too. Because, it seems like a duplicate.\n\n```java\n/***********************************************************/\r\n/** THEMES - High Contrast **/\r\n/* Pager data */\r\n.fl-theme-bw .fl-pager .fl-pager-data {\r\n    .fl-pager-desc {\r\n        background: url(../images/arrow-up.png) no-repeat right;\r\n    }\r\n    .fl-pager-asc {\r\n        background: url(../images/arrow-dn.png) no-repeat right;\r\n    }\r\n}\n```\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-03-15T09:24:43.542-0400",
      "body": "Thanks for pointing this out, @@Dinuka Desilva.&#x20;\n\nI believe the original idea of having \"high contrast\" section in the pager css is to allow Pager to work with one of our other components - UI Options. You can try UI Options demo at <http://build.fluidproject.org/infusion/demos/uiOptions/>.&#x20;\n\nHowever, this section does look incomplete since it only handles \"black on white\" theme and is not used in any pager demo or examples. I agree that it (as well as the handling of the high contrast themes) can be removed from the pager component css.&#x20;\n\n@@Justin Obara, let us know if you have other thoughts. Thanks.\n"
    },
    {
      "author": "Dinuka Desilva",
      "date": "2016-03-15T11:46:12.887-0400",
      "body": "So, we can add those required classes and images according to that. \\\nShall I work on it.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-03-15T11:59:26.650-0400",
      "body": "@@Dinuka Desilva If you meant to add classes and images for high contrast themes, I don't think it's necessary since we first need to have a design of how Pager should look like with high contrast themes, which is worth a separate JIRA.\n"
    },
    {
      "author": "Dinuka Desilva",
      "date": "2016-03-17T22:54:18.326-0400",
      "body": "Yeah.........  at this point I have updated pager css file only thing which have been used which means I have removed fl-theme-bw and ui-options from it since they haven't been used any where.&#x20;\n\nSo, are we going to merge my changes and do the theme design changes as another jira or are we going to do everything in another jira.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-03-18T10:10:27.452-0400",
      "body": "@@Dinuka Desilva, I left a comment on your pull request:&#x20;\n\n\"actually another pull request #685 is modifying and consolidating the pager component and demo css files. The stylus conversion should happen after that when we have a clean component css.\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-23T12:48:32.377-0400",
      "body": "As part of the work on <https://fluidproject.atlassian.net/browse/FLUID-6496#icft=FLUID-6496> the CSS Preprocessing in Infusion was migrated to Sass\n"
    }
  ]
}
---
Re-implement the styling using the Stylus syntax. \
<https://github.com/fluid-project/infusion/tree/master/src/components/pager/css>

<http://wiki.fluidproject.org/display/fluid/Stylus+and+How+to+Use+It+in+Infusion>&#x20;

        