---json
{
  "title": "FLUID-5187",
  "summary": "Enactors shouldn't be dependent on being viewComponents",
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
  "date": "2013-10-22T11:14:21.626-0400",
  "updated": "2013-10-28T10:33:41.801-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-24T14:46:43.459-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/423> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-28T10:33:37.305-0400",
      "body": "Merged Pull Request at 5b631da3519a797684a89a8fb494ca5a14ba2f22\n"
    }
  ]
}
---
Using schemas:

It's possible that someone might design an enactor that does not need to be a view component, but right now, the framework will throw an error if an enactor is not defined to be one. It seems that the builder automatically adds the UIEnhancer's container as a container key to the enactor, but since it's not a viewComponent, the framework determines the container key to be invalid and throws an error:

ASSERTION FAILED: Probable error in subcomponent record - key "container" found, where the only legal options are type, options, args, mergeOptions, createOnEvent, priority, recordType

        