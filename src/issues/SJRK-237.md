---json
{
  "title": "SJRK-237",
  "summary": "Reorganize project folder structure and theming",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-03-12T12:27:35.895-0400",
  "updated": "2019-09-12T14:14:20.381-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-52/",
      "key": "SJRK-52",
      "summary": "Let templates refer to other templates"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-255/",
      "key": "SJRK-255",
      "summary": "Race condition in page grade blocking tests"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-06-25T13:15:20.498-0400",
      "body": "Ensure to update the documentation to be very clear on the steps required to customize a theme, or at least link to a separate MD file that explains the process.\n\nEnsure also to add tests for any new functionality.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-06-27T13:42:29.390-0400",
      "body": "Tests to add:\n\n* sjrk.storyTelling.loadThemedPage\n* server config loading\n* new client config endpoint response\n* theme fallback functionality\n  * when no theme is provided\n    * base theme should be loaded\n  * when a theme that doesn't exist is provided\n    * should it return an error? should it just load the base theme? the latter could be misleading. just an error message should be sufficient for now\n  * when a theme is provided and requested file exists in custom theme but not base theme\n    * custom theme file should be loaded\n  * when a theme is provided and requested file exists in custom theme and also base theme\n    * custom theme file should be loaded\n  * when a theme is provided and requested file does not exist in custom theme but does in base theme\n    * base theme file should be loaded\n  * when a theme is provided and requested file does not exist in either custom or base theme\n    * 404 should be returned\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-08-02T01:18:38.339-0400",
      "body": "Reopened the issue after discovering problems with the docker setup.\n"
    }
  ]
}
---
Our goal for the process of adding a custom theme is:

1. Fork our repository
2. Make a folder for your theme
3. Add HTML files or templates if you want to change the default
4. Create a CSS file to display the way you want
5. Add a config file that points to your folder
6. Ability to replace a grade if you want major changes to the tool

Three integrator use cases:

1. Use the tool as it is with the defaults
2. Put a new skin on the tool but keep the behaviour the same
3. Change the behaviour of some part/parts of the tool

To achieve this, a few tasks need to be completed to make adding new custom themes easier for potential integrators:

* Add default files for all possible sections (header, footer etc.)
  * This will be the "base" theme, and its location will be specified in the "globalConfig" key of sjrk.storyTelling.server, with the intent that it can be changed or overridden
* Create a JSON/JSON5 file to configure the theme and other possible values
  * Ensure that when the config file is merged in it allows for switching grades etc.
* Move hard-coded markup into templates
  * A stopgap solution would be to add a default fallback option in the current JS code
  * Another option would be to add all of the potential containers to the page and hide when not used
* Create a themes folder at the top level

Proposed new hierarchy:

```java
deleted_upload
src
-> server
---> db
---> middleware
-> ui
tests
-> server
---> configs
---> uploads
---> utils
-> testData /* formerly “binaries” */
-> ui
---> html
---> js
---> messages
themes
-> base
---> css
---> html
---> img
---> messages
---> templates
-> karisma
---> css
---> img
---> templates
-> learningReflections
---> ...
uploads
serverConfig.json5     /* not committed to repo, added to .gitignore */
```

serverConfig.json5.example

```javascript
{
	“theme”: “learningReflections”,
	“port”: “8081”,
	“ip”: “127.0.0.1”, /* what does Kettle bind to by default? */
	“adminPassword”: undefined /* this is the authentication password for deleting stories */
}
```

If you use the special key word ‘base’ you will get just the base theme. If you use another theme name we will apply the base theme first and then apply the theme you specified. Themes are specified by a key name which will resolve, using code similar to sjrk.storyTelling.loadThemedPage to resolve that name to a folder in a particular location (also configurable in the server globalConfigs structure)

        