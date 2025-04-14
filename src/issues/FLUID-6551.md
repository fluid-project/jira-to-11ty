---json
{
  "title": "FLUID-6551",
  "summary": "Explore options for CSS preprocessing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2020-09-15T07:50:27.671-0400",
  "updated": "2020-10-29T13:18:09.111-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-09-24T10:40:19.856-0400",
      "body": "I've taken a look at a variety of Fluid and IDRC projects to see what preprocessors (if any) they use:\n\n* [c2lc-website](https://github.com/codelearncreate/c2lc-website) uses CSS with no preprocessor\n* [c2lc-coding-environment](https://github.com/codelearncreate/c2lc-coding-environment) uses SCSS\n* [docs-inclusive-learning](https://github.com/fluid-project/docs-inclusive-learning) uses Stylus\n* [floeproject.org](https://github.com/fluid-project/floeproject.org) uses CSS with no preprocessor\n* [fluidproject.org](https://github.com/fluid-project/fluidproject.org) uses CSS with no preprocessor\n* [guide.inclusivedesign.ca](https://github.com/inclusive-design/guide.inclusivedesign.ca) uses Stylus\n* [idrc](https://github.com/inclusive-design/idrc) uses SCSS\n* [infusion](https://github.com/fluid-project/infusion) uses Stylus\n* [sjrk-story-telling](https://github.com/fluid-project/sjrk-story-telling) uses CSS with no preprocessor\n* [snow-theme](https://github.com/inclusive-design/snow-theme) uses Stylus\n* [sojustrepairit.org](https://github.com/fluid-project/sojustrepairit.org) uses CSS with no preprocessor\n* [website-cities](https://github.com/inclusive-design/website-cities) uses CSS with no preprocessor\n* [wecount.inclusivedesign.ca](https://github.com/inclusive-design/wecount.inclusivedesign.ca) uses SCSS\n\n \n\nOf those that use a preprocessor, three use SCSS and four use Stylus.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2020-10-09T05:07:39.407-0400",
      "body": "> infusion uses Stylus\n\nI know there's a plan to split out the components from Infusion, but until that's done, the Infusion repo also has CSS files without a preprocessor, such as:\n\n<https://github.com/fluid-project/infusion/blob/master/src/components/inlineEdit/css/InlineEdit.css>\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-28T10:43:03.163-0400",
      "body": "Related to this is <https://fluidproject.atlassian.net/browse/FLUID-6566#icft=FLUID-6566>, which would involve processing all CSS (and compiled Stylus) using Autoprefixer.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-10-29T13:18:09.092-0400",
      "body": "As part of the work on <https://fluidproject.atlassian.net/browse/FLUID-6496#icft=FLUID-6496> the CSS Preprocessing in Infusion was migrated to Sass\n"
    }
  ]
}
---
Currently Infusion uses [Stylus](https://stylus-lang.com/) as a CSS preprocessor. It's worth exploring whether Stylus is the best choice or whether it might be worth switching to [SCSS](https://sass-lang.com/).

        