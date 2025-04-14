---json
{
  "title": "FLUID-3378",
  "summary": "Component Decorator contract is inconsistent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2009-11-10T16:46:00.000-0500",
  "updated": "2010-03-30T13:27:05.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Framework",
    "Inline Edit",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-30T13:25:14.000-0400",
      "body": "This issue will be moot when we move to the new IoC system, as decorators will be assignable without the component specifically having to enable support for it. I don't think we can change the API of either Inline Edit or the Uploader at this point, so we'll have to live with the inconsistency.\n\nFuture components, if they add support for decorators before we have the IoC system, should use the option name \"decorators.\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T13:27:05.000-0400",
      "body": "Can't fix this issue in Inline Edit without breaking API compatibility, and we won't need to sweat this at all when the new IoC system is in place.\n"
    }
  ]
}
---
Support for component decorators is implemented inconsistently. Currently, two components support decorators: Inline Edit and Uploader. The two components use a different option name to specify decorators: Inline Edit uses "componentDecorators" and Uploader uses "decorators."

Ideally, option names are consistent across all components, so we should decide on a name to standardize on, ensure that both of these components use the name, and properly document the name (it is not mentioned on the wiki page: <http://wiki.fluidproject.org/display/fluid/Decorators>)

        