---json
{
  "title": "DECA-93",
  "summary": "Add ability to show current version of Decapod components",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Trivial",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2010-04-05T12:51:32.000-0400",
  "updated": "2012-09-07T11:43:08.093-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Capture",
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Add the ability for Decapod components to show their current version:

i.e.\
% decapod-stitching -v\
Decapod Stitching 0.3.1

% decapod-genpdf -v\
Decapod Generate PDF 0.3.12

For Decapod UI, choose "About" or something similar in the menu would show:\
Decapod Capture 0.3

        