---json
{
  "title": "FLUID-5339",
  "summary": "Many of the dataBinding tests are broken in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-04-29T12:39:58.647-0400",
  "updated": "2014-05-02T09:03:22.911-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder",
    "Framework"
  ],
  "environment": "IE 8, 9, 10, 11\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-30T09:04:43.084-0400",
      "body": "It appears that a similar error is causing the Paged Table and Tooltip tests to be failing, as the source of the error is coming from DataBinding.js line 322.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-01T09:58:57.901-0400",
      "body": "Submitted a pull request: <https://github.com/fluid-project/infusion/pull/506>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-02T09:03:13.629-0400",
      "body": "The pull request ( <https://github.com/fluid-project/infusion/pull/506> ) was merged into the project repo at a80e292a3c2e38e7ee0b3997729c80983c09a7dc\n"
    }
  ]
}
---
Many of the data binding unit tests are failing in IE 8 with the error "Died on Test#1 undefined: JScript object expected"

Tests that are failing:

* FLUID-3674 basic model relay test
* FLUID-3674 event coordination test
* FLUID-5024: Model Relay with model transformation
* FLUID-5024: Resolving references which are cyclical in components
* FLUID-5045: Model transformation documents contextualised by IoC expression for model relay
* FLUID-5270: Transforming relay from child to parent

In IE 9, 10, & 11:

* FLUID-3674 event coordination test\
  (only the first test fails)

        