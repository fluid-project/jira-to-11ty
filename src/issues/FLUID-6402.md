---json
{
  "title": "FLUID-6402",
  "summary": "Explore using BEM for CSS styling conventions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2019-09-23T15:34:17.144-0400",
  "updated": "2019-09-24T10:02:11.686-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-09-24T10:01:27.232-0400",
      "body": "We should also explore if BEM should be used for just styling classes or also for JS selectors.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-09-24T10:02:11.686-0400",
      "body": "@@Ned Zimmerman found the following BEM linter:\n\n<https://github.com/simonsmith/stylelint-selector-bem-pattern> which is a wrapper for <https://github.com/postcss/postcss-bem-linter>\n"
    }
  ]
}
---
BEM ( <http://getbem.com/naming/> ) may make it easier for users wanting to modify the styles of infusion to be able to find the parts they are looking for as well as making changes without breaking other styles. It may also help with writing our CSS declarations in a more precise and simplified manner.

        