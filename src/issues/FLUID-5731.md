---json
{
  "title": "FLUID-5731",
  "summary": "Unable to focus via tab in firefox for certain demos",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Colin Clark",
  "reporter": "Kaye Mao",
  "date": "2015-07-30T15:55:22.209-0400",
  "updated": "2024-07-22T09:32:02.879-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "Firefox 39.0 on Mac OSX 10.10.4\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kaye Mao",
      "date": "2015-08-04T10:36:42.722-0400",
      "body": "In system preferences > keyboard > shortcuts > make sure \"all controls\" is checked\n\nThis default setting affects the use of tab navigation in firefox and safari\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/inlineEdit/>\
<http://build.fluidproject.org/infusion/demos/overviewPanel/>\
<http://build.fluidproject.org/infusion/examples/components/pager/annotateSortedColumn/>

Tab focus in firefox will only alternate between the address bar / search. Unable to navigate page via tab.

        