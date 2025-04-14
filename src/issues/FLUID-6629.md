---json
{
  "title": "FLUID-6629",
  "summary": "Support localization of UI Options out of the box",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2021-06-16T10:27:39.967-0400",
  "updated": "2024-07-22T10:35:32.451-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-16T10:48:31.424-0400",
      "body": "At least in the <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> branch this is sort of already supported. There is a defaultLocale option in the loader grade that gets passed down to the messageLoader. The locale for the messageLoader is specified by the \"locale\" preference. So there are two routes in, 1) set the defaultLocale 2) add a \"locale\" preference. The latter being a model value is better for dynamic cases, the former being an option (and the fall back language), is the better option to use when it's the base language to be used.\n\nAt least that's my take on the differences, maybe @@Antranig Basman might have a better definition of the two uses.\n\nIn the case of UIO, the defaultLocale can be set in the prefsEditorLoader option block. This gets distributed down to the actual loader grade.\n\nHowever, there is a problem with the \"lang\" and \"dir\" attributes not being set in the iframe. In the short term that could be rectified using events, but in the long term it will probably be solved by removing the iframe which will be done for <https://fluidproject.atlassian.net/browse/FLUID-6606#icft=FLUID-6606>\n"
    }
  ]
}
---
Currently, there are [some examples](https://github.com/fluid-project/trivet/pull/148) of how to localize UI Options which involve creating a new component which adds distributeOptions configuration to UI Options to pass in a locale for messages. It would be ideal if UI Options could support a locale option by default, allowing it to be initialized out of the box in any supported language.

Also, if someone tries to initialize UIO in an unsupported language, it should fall back to the default language rather than failing to initialize.

        