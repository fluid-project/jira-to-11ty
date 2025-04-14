---json
{
  "title": "FLUID-6403",
  "summary": "Update eslint-config-fluid to provide check line endings and console logs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2019-09-25T12:58:10.882-0400",
  "updated": "2024-07-22T10:35:02.461-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "fluid-eslint-config"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6401/",
      "key": "FLUID-6401",
      "summary": "add an .editorconfig file to Infusion"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-10-07T18:08:35.938-0400",
      "body": "When running gpii-grunt-lint-all we get errors for the JSON files for a `console.log`. It appears that json-eslint.js wraps the json into a javascript function which also contains a `console.log` statement. It's likely that the error is coming from this, as the json files themselves do not have console statements. \n\n<https://github.com/GPII/gpii-grunt-lint-all/blob/master/tasks/json-eslint.js#L14>\n\n@@Tony Atkins \\[RtF] do you know if this is a bug and/or something that we can change in gpii-grunt-lint-all? I'd also be curious to hear thoughts on not checking for console statements. There are a few legitimate cases for them in infusion, which should be easy to escape.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-10-07T18:34:40.444-0400",
      "body": "@@Tony Atkins \\[RtF] on further thought, I believe that is a legitimate bug with gpii-grunt-lint-all because it would prevent anyone from setting the no-console check. I filed it as <https://issues.gpii.net/browse/GPII-4176> There is still the question of whether we want the no-console check for eslint-config-fluid, but I believe now that it is a distinct issue.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2019-10-08T04:30:32.505-0400",
      "body": "@@Justin Obara, I have [a long-standing pull I put in over a year ago](https://github.com/fluid-project/eslint-config-fluid/pull/6) to add the `console.log` check to the default config.  IMO we should discuss and evaluate these in combination, as we want to ensure the check is meaningful, but that it also doesn't cause problems downstream.\n\ncc: @@Antranig Basman\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-10-08T08:30:36.923-0400",
      "body": "This partially duplicates <https://fluidproject.atlassian.net/browse/FLUID-6331#icft=FLUID-6331> which was filed to update the console log check.\n"
    }
  ]
}
---
Add lint checks for 

* no-console: <https://eslint.org/docs/rules/no-console#disallow-the-use-of-console-no-console>
* linebreak-style set to "LF": <https://eslint.org/docs/rules/linebreak-style>\
  <https://github.com/fluid-project/eslint-config-fluid>

        