---json
{
  "title": "FLUID-4150",
  "summary": "Test how fl-layout-linear is working",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-03-17T13:55:53.962-0400",
  "updated": "2011-05-11T16:29:34.967-0400",
  "versions": [
    "1.3.1"
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
      "author": "heidi valles",
      "date": "2011-03-18T11:54:43.836-0400",
      "body": "1\\. figure out most common layouts\\\n2\\. add to linear example\\\n3\\. describe expected results for each one, including absolutely positioned divs (<https://fluidproject.atlassian.net/browse/FLUID-2396#icft=FLUID-2396>)\\\n-linear, width of divs, placement, order\\\n4\\. review fl-layout-linear styles to make sure they align with #3\\\n5\\. think about edge case layouts (div that sticks when page scrolled, etc) and test linearizing them\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-03-18T13:26:34.717-0400",
      "body": "fl-layout-linear notes:\\\n-remove fl-linearEnabled?\\\n-add alignment options (james suggests linearizing should give everything same alignment)\\\n-.fl-layout-linear .fl-button-left, .fl-layout-linear .fl-button-right {padding:1em;} - makes buttons bigger?\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-03-22T09:35:26.945-0400",
      "body": "Some changes at <https://github.com/heidiv/infusion/tree/FLUID-4150>  - a test page in /manual-tests, and changes to fss-layout.css. Not done yet... need to check backwards compat and think more about use of !importants and universal selector.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-06T11:07:32.141-0400",
      "body": "It was determined that the fss-linearization manual test that was developed to help test the new implementation of the linearization, should be used as a demo of linearization. See the IRC Logs around 9:45 <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2011-05-06>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-11T16:21:37.935-0400",
      "body": "Anastasia merged this into the repo at 546890576065abef397e559d62e6faffd9f886c0\n"
    }
  ]
}
---
There are some confusing styles in fss-layout related to linearizing columns. Create a test page, and investigate why only some container and column styles are given extra styling.

        