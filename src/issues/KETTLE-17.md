---json
{
  "title": "KETTLE-17",
  "summary": "Kettle should report an error when given a nonexistent config URL",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2013-08-14T19:02:35.150-0400",
  "updated": "2013-08-14T19:02:35.150-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
For example, the current windows loader contains the following code:

kettle.config.makeConfigLoader({\
nodeEnv: kettle.config.getNodeEnv("fm.ps.sr.dr.mm.os.development"),\
configPath: kettle.config.getConfigPath() || "../node\_modules/universal/gpii/configs"\
});

If "../node\_modules/universal/gpii/configs" is changed to a nonexistent path, the system simply silently exits with no report. Since this is such a typical failure mode for node.js anyway, this misleads the user into believing that something is wrong with the binary modules. Kettle should provide a helpful report indicating the filesystem path or URL that was queried and found empty.

        