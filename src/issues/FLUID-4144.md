---json
{
  "title": "FLUID-4144",
  "summary": "MergePaths does not resolve the \"{options}\" element during IOC demands resolution.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2011-03-14T17:07:02.849-0400",
  "updated": "2014-03-03T13:13:40.574-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-05-23T16:11:35.241-0400",
      "body": "\"mergePaths\" contains many implementation flaws and will be abolished completely when <https://fluidproject.atlassian.net/browse/FLUID-4130#icft=FLUID-4130> lands. It is probably not worth fixing the implementation in its current form.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:52:08.252-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
When demands block contains the mergePaths policy for merging component options with demands options further component creation will not handle the resulting options argument to the creator function correctly.

Sample demands block:&#x20;

fluid.demands("uploader", "cspace.recordEditor", \["{recordEditor}.dom.uploader", {\
mergePaths: \["{options}", {\
model: "{recordEditor}.model",\
applier: "{recordEditor}.options.applier"\
}]\
}]);

as a result "{options}" will end up in that.options.value... instead of the correct that.options

        