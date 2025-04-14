---json
{
  "title": "FLUID-5181",
  "summary": "UI Options component should support top-level options for template and message prefixes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-17T15:30:02.762-0400",
  "updated": "2013-10-28T10:32:52.288-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-24T14:45:57.279-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/423> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-28T10:32:49.291-0400",
      "body": "Merged Pull Request at 5b631da3519a797684a89a8fb494ca5a14ba2f22\n"
    }
  ]
}
---
It is highly likely that someone using the UI Options component will need to specify the relative path to the templates and message files. Currently, the UI Options component itself does not offer these as top-level options; It can be accomplished using a distributeOptions block as shown below:

```java
fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
    distributeOptions: [{
        source: "{that}.options.templatePath",
        target: "{that prefsEditorLoader}.options.templatePrefix"
    }, {
        source: "{that}.options.messagePath",
        target: "{that prefsEditorLoader}.options.messagePrefix"
    }],
    templatePath: "../../framework/preferences/html/",
    messagePath: "../../framework/preferences/messages/"
});
```

This expects too much of the UI Options component integrator; the whole point of this component is to give an integrator a super-simple way to get the starter panels.

A preferable API would be:

```java
fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
    templatePath: "../../framework/preferences/html/",
    messagePath: "../../framework/preferences/messages/"
});
```

i.e. the options distribution should be taken care of by the component itself, somehow.

        