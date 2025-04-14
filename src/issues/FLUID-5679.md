---json
{
  "title": "FLUID-5679",
  "summary": "Headings are not hierarchical",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kaye Mao",
  "reporter": "Kaye Mao",
  "date": "2015-06-09T13:58:50.696-0400",
  "updated": "2015-06-26T10:10:59.958-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-12T08:53:21.305-0400",
      "body": "The status should be Needs Commit\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-12T08:53:44.800-0400",
      "body": "The open pull request for this issue is <https://github.com/fluid-project/infusion/pull/608>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-06-12T16:18:05.777-0400",
      "body": "The TableOfContents-test.html test is failing:\n\nThe output should contain exactly one H1\\\nExpected: 1\\\nResult: 0\n\nThe H1 should contain the expected text\\\nExpected: \"Table of Contents\"\\\nResult: \"\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T08:51:52.499-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/608> ) into the project repo at 84ca9761eef2927b837db1f811347a338f3b62ca . However this has lead to the failing test mentioned above.\n"
    },
    {
      "author": "Kaye Mao",
      "date": "2015-06-15T12:19:05.416-0400",
      "body": "Test may need to be updated as the suggestion was to change the TOC h1 to h2, should be expecting one h2\n"
    },
    {
      "author": "Kaye Mao",
      "date": "2015-06-16T10:34:48.186-0400",
      "body": "Pull request at <https://github.com/fluid-project/infusion/pull/609>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-16T12:56:58.752-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/609> ) into the project repo at c300a8fb3136dfb8441652c07642a50db5a7c684\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:15.472-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Suggestions for fixes as part of the WCAG 2.0 accessibility audit of the UI options tools 

A heading that introduces the component would be beneficial to users for the added context and organization. Ex. \<h2>Preferences Editor\</h2>, with the sub-headings then changed to \<h3>s.&#x20;

Table of Contents should be a H2 as H1 are generally reserved for site title or main titles.

        