---json
{
  "title": "FLUID-3674",
  "summary": "Current idiom for applying changes to models with ChangeApplier is inadequate for large-scale cooperation on extended models",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-06-17T20:18:11.025-0400",
  "updated": "2014-03-04T05:13:24.529-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4195/",
      "key": "FLUID-4195",
      "summary": "Create new infrastructure for \"subappliers\", applying inverse model calculus to allow broadcast of changes to supermodel"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4258/",
      "key": "FLUID-4258"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5282/",
      "key": "FLUID-5282"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:05:07.912-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-22T16:01:48.120-0400",
      "body": "We plan to abandon the \"model semantic\" described in this JIRA but instead allow cooperating models and appliers to remain isolated in terms of object references. The idea of \"preserving trunk references\" is problematic, verging on impossible, in a scenario where one component wishes to apply a change which would morally wipe out the root model reference of another component. Instead we will make use of the \"ModelRelay\" system which is currently under development for UIOptions and other components.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-02-20T04:32:32.442-0500",
      "body": "Merged into trunk at revision 3873109a964f9837c9b6d7c4a81e94ac2a9add11\n"
    }
  ]
}
---
The "model semantic" requires that the precise model object reference keeps its identity - this has traditionally only been applied to the "model root" - but when "subappliers" are created, responsible for smaller parts of models, it needs to be ensured that the section of model they are bound to cannot be "cast adrift" by application of a change request that attempts to rebind their root reference from the point of view of its embedding in a larger model. This requires a "Cautious ChangeApplier" that preserves existing trunk references where possible, with a workflow somewhat similar to the current options merging system.

        