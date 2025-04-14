---json
{
  "title": "FLUID-4602",
  "summary": "When using the HTML5 strategy, the browseButton selector cannot be changed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2012-02-14T08:31:17.420-0500",
  "updated": "2012-02-14T12:34:01.422-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-02-14T10:13:15.812-0500",
      "body": "I've made the necessary changes and verified that the unit tests are still passing. I've sent a pull request for the changes.\\\n<https://github.com/fluid-project/infusion/pull/202>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2012-02-14T12:33:35.752-0500",
      "body": "I've reviewed, tested, and pushed Justin's fix to master.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2012-02-14T12:34:01.413-0500",
      "body": "Resolved and fixed in Infusion master at fc0f49ffd55700159f6c66a5a1135b126cc04329\n"
    }
  ]
}
---
Attempting to change the browseButton selector when using the HTML5 strategy will have no effect. This is caused by an error in the default configuration of fluid.uploader.html5Strategy.local.

<https://github.com/fluid-project/infusion/blob/master/src/webapp/components/uploader/js/HTML5UploaderSupport.js#L327-347>

The browseButton selector is set to "{multiFileUploader}.selectors.browseButton" instead of "{multiFileUploader}.options.selectors.browseButton"

        