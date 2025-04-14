---json
{
  "title": "FLUID-5828",
  "summary": "Fixes to ChangeApplier docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Anastasia Cheetham",
  "date": "2015-12-10T11:12:38.169-0500",
  "updated": "2024-08-01T07:41:33.884-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-08-01T07:41:24.298-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/295>&#x20;\n"
    }
  ]
}
---
Some issues were found with the ChangeApplier.html and ChangeApplierAPI.html pages:

ChangeApplier.html:

* "model state" link goes to Framework Concepts page, but not immediately clear what the user should read from there. "Model state" isn't even mentioned on the Framework Concepts page.
* Acronym "POJO" is used but not defined. Should we define such terms?\
  &#x20;         suggestion: link it to <https://en.wikipedia.org/wiki/Plain_Old_Java_Object> ?

ChangeApplierAPI.html

* Invoker link goes to "compact" section of that document.
* should invoker link go to Invoker doc and the "compact" word previous to it go to the "Compact" section of the invoker document?
* this should be re-examined, since there's nothing in the 'compact' section of the invoker documentation!

        