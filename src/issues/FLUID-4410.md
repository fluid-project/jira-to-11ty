---json
{
  "title": "FLUID-4410",
  "summary": "Allow dynamic styling of fat panel \"show/hide\" button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2011-08-30T10:13:48.292-0400",
  "updated": "2014-03-26T16:19:01.841-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Sliding Panel"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5020/",
      "key": "FLUID-5020"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-08-30T10:14:05.935-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-24T10:00:25.435-0400",
      "body": "An alternative way to do this (as a hack until it becomes built in to the component) would be to provide listeners to \"onPanel\"hide\" and \"onPanelShow\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-18T13:18:56.942-0400",
      "body": "Submitted pull request <https://github.com/fluid-project/infusion/pull/419>\n\nProvided a new selector for the label. This allows the toggleButton and it's label to be separate elements. Allowing for more complex markup in the toggle button.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-03-26T15:54:45.935-0400",
      "body": "merged with the fix for <https://fluidproject.atlassian.net/browse/FLUID-5180#icft=FLUID-5180>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-26T16:18:59.084-0400",
      "body": "pull request merged at 861d635d56c7546c764d23cf40e7f96e85516b17\n"
    }
  ]
}
---
Need a way of styling the sliding panel button when open or closed (I'm trying to add up and down icons). Best way would be to wrap the strings showText and hideText with \<div class="fl-toggleButton-show">text\</div> and -hide

        