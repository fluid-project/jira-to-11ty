---json
{
  "title": "FLUID-4588",
  "summary": "Uploader only accepts 200 as a successful response for a file upload",
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
  "reporter": "Justin Obara",
  "date": "2012-02-02T14:07:25.999-0500",
  "updated": "2012-02-02T15:23:43.119-0500",
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
      "date": "2012-02-02T14:49:24.967-0500",
      "body": "Instead of just taking a 200 status as a success, anything in the range of 200 to 204 inclusive is now accepted. I didn't take the full range of 2xx responses as they did not all seem applicable to file uploads through the uploader. The unit tests have also be updated.&#x20;\n\nPull request: \\\n<https://github.com/fluid-project/infusion/pull/200>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2012-02-02T15:22:55.635-0500",
      "body": "I've reviewed Justin's code, tested it out, and pushed to the project repo.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2012-02-02T15:23:43.117-0500",
      "body": "Reviewed, pushed, closed.\n"
    }
  ]
}
---
Currently Upoader will only accept a 200 status as success\
<https://github.com/fluid-project/infusion/blob/master/src/webapp/components/uploader/js/HTML5UploaderSupport.js#L95-108>

It should however probably accept anything from 200 to 204\
<http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html>

        