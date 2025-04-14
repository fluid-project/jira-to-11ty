---json
{
  "title": "FLUID-6118",
  "summary": "eslint-config-fluid should define a global for \"fluid\" not for the versioned namespace",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-01-25T10:38:58.839-0500",
  "updated": "2018-06-07T06:58:15.045-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "node module"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently the eslint-config-fluid configuration defines a global for the versioned namespace (i.e. fluid\_2\_0\_0"). However, typically an external project will simply use the more general "fluid" namespace when they are using Infusion. For projects, such as Infusion itself, that do require a global for a versioned namespace, this should be set up as an extension to their eslint configuration in there own .eslintrc.json file.

current:

"globals": {\
"fluid\_2\_0\_0": true\
}

should be:

"globals": {\
"fluid": true\
}

        