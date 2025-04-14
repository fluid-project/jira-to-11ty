---json
{
  "title": "FLUID-4686",
  "summary": "UIOptions handling of default model needs to be improved to store exactly changed options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Antranig Basman",
  "date": "2012-04-03T23:00:15.289-0400",
  "updated": "2014-03-20T09:56:55.191-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-06-12T10:45:27.557-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/323> merged into project repo at ef823a4b799854aa84188579f4c7b2164a84b1b4\n"
    },
    {
      "author": "y z",
      "date": "2013-06-12T10:47:56.211-0400",
      "body": "Branch with the fix for the issue was committed at: <https://github.com/fluid-project/infusion/commit/ef823a4b799854aa84188579f4c7b2164a84b1b4>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-03-19T10:19:26.512-0400",
      "body": "This might have been broken by the implementation of the new prefs framework.\n\nThe store currently saves the whole rootModel that contains the merged defaults and previously saved prefs. It is causing the problem that all the preferences are saved regardless they are modified or not. The solution is to keep two models: one contains all the default preference values, while the other is the working model that reflects the changes. At save,&#x20;\n\n1\\. make a copy of the working model, \\\n2\\. compare the copy with the default model, \\\n3\\. remove elements whose values are same as default values, \\\n4\\. save this copy into the store.\n\nThese steps will happen in the preference framework rather than the store.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-03-20T09:05:06.080-0400",
      "body": "A pull request is sent to fix this issue: <https://github.com/fluid-project/infusion/pull/482>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-20T09:56:42.132-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/482> ) into the project repo at b6db5eeb923625594d24aa2fe0fe7392b3989926\n"
    }
  ]
}
---
UIOptions handling of its default options has always been very brittle. Until the <https://fluidproject.atlassian.net/browse/FLUID-4531#icft=FLUID-4531> work, this was held in a central static location as part of the defaults for the SettingsStore component. Even in older days, this caused some problems - when upgrading from one version of UIOptions to one which managed more options, the component would malfunction until the user cleared their cookies - since the defaults record was only used in the case the cookie was empty. Finding any cookie at all would bypass the defaults, presenting the component with some options which were "undefined" and would so not render properly. The component was effectively unusable in this use case.\
Just before <https://fluidproject.atlassian.net/browse/FLUID-4531#icft=FLUID-4531> as part of FLUID-4607, I (AB) made a change to the store algorithm to always merge in the defaults before returning them. This resolves the issue described above, but introduces a different problem. Now UIOptions stores every option back into the store, including those derived from the defaults, and so in the case the value of a default changes between releases of UIOptions, a user will continue with their originally stored value of the default, even if they didn't make any change expressing a preference.

We need to rethink this architecture before too long, especially since <https://fluidproject.atlassian.net/browse/FLUID-4531#icft=FLUID-4531> antification will lead to UIOptions being used in increasingly flexible situations. For now we should just fix up the tests which were invalidated by this change in semantic. A promising architectural scheme for meeting this issue might be to take advantage of the new "source tracking" facility in the ChangeApplier to distinguish which changes are caused by the user and which from a store fetch.

        