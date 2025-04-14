---json
{
  "title": "FLOE-156",
  "summary": "Design Task: Metadata editor designs should be updated for both a stand-alone experience, and a customized experience",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2014-01-08T14:07:29.277-0500",
  "updated": "2014-01-08T16:17:23.463-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The metadata editor designs should be updated to depict two possible implementations / integrations of the Metadata editor:

Scenario 1 - a self-contained metadata editor plugin where the whole user experience is provided out of the box by "us".\
In this case, the user just wants to use metadata editing functionality and is more concerned about using it rather than how it looks or how it is integrated. An example would be someone who runs a Wordpress blog and downloads the FLOE Metadata Editor from the plugin repository and starts using it in their blog.

Scenario 2 - a fully customized metadata editor which is integrated the user's software platform for a customized experience.\
In this case, the user has a web application already and they want to add elements of the FLOE Metadata Editor to their existing user experience. An example would be someone who maintains an internal CMS and would like to add just the pieces of the FLOE Metadata Editor that are applicable to their context, and also apply their own styling and branding to these elements.

        