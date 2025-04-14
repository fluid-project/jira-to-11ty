---json
{
  "title": "KETTLE-68",
  "summary": "Implement policy-driven automatic retry behaviour in DataSources",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2018-06-13T11:11:17.839-0400",
  "updated": "2018-06-13T11:11:17.839-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As part of the discussions surrounding the GPII's UX for failed user logins, we decided that it would be useful to have a configurable retry behaviour built into Kettle's DataSources. This would operate an exponential backoff policy - \
i) After some configurable period of not receiving a valid response through any cause (including slow/dropped connection, explicit error), the datasource would schedule a retry\
ii) The retry period would rise exponentially (e.g. through doubling) up to some maximum configurable threshold\
iii) After some further configurable period of operating this policy without response, an error would finally be returned to the upstream user - this would consist of the most recent error payload received from downstream, or a synthetic one in the case of repeated timeouts

This would be packaged as a standard request wrapper that could be applied to any DataSource. Much as with the queuing/throttling work in <https://issues.fluidproject.org/browse/FLUID-5542> and <https://issues.fluidproject.org/browse/FLUID-6209> , it looks like this can't be accommodated within the existing reuse model of "transforming promise chain" which might need to be rethought.

        