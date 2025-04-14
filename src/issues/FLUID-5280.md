---json
{
  "title": "FLUID-5280",
  "summary": "Clarify semantics for conflict resolution when attaching via model relay",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-02-20T04:20:28.160-0500",
  "updated": "2014-05-15T03:27:31.722-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5371/",
      "key": "FLUID-5371",
      "summary": "Model relay system should support conditional operation of forward and backward relays"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2014-03-18T04:38:54.832-0400",
      "body": "I tested, reviewed, and pushed this veterancy-based fix to the project repo's master at revision 81e3e2e1543e6f3f19e68428e1a14ccceb9c9cb0.\n\nAs requested by Antranig, I'll leave the ticket open so that we can continue to log other alternatives here.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:46:19.700-0400",
      "body": "Running the unit tests in IE9, the RendererUtilities test for this fails.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-02T08:42:46.286-0400",
      "body": "The failing tests stemmed from using a non-existing function for sorting an array in the DataBinding.js. This has been resolved in <https://fluidproject.atlassian.net/browse/FLUID-5339#icft=FLUID-5339>. However, this illustrated the lack of a proper test for this part of the codebase. See Antranig's comment on the pull request for more information <https://github.com/fluid-project/infusion/pull/506#issuecomment-41950465>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-05-15T03:27:10.232-0400",
      "body": "We've added a new explicit strategy which can help with conflict resolution in <https://fluidproject.atlassian.net/browse/FLUID-5371#icft=FLUID-5371> - this allows conditions to be placed on both the forward and backward parts of a relay rule constraining them from acting in either the initialisation or live phase of a component's lifecycle.\n"
    }
  ]
}
---
The <https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674> system now allows us to attach relays (transforming or non-transforming) between models, which relays act "instantaneously" on wiring up the model graph to bring it to a consistent condition by means of the "initial transaction". We managed to dodge some of the conflict resolutions inherent in this system by adopting the "transition to undefined" convention, that a model (or set of transforms) which holds or results in an undefined value is beaten by one which holds a defined one. However, we are quickly running into cases where genuine conflicts arise between two defined models.

Together with the report for <https://fluidproject.atlassian.net/browse/FLUID-5279#icft=FLUID-5279> came a case with a supercomponent and a subcomponent with different model contents becoming relayed together. In this case, the supercomponent had explicitly modified its model since startup, and so created a clear expectation that its changes should trump those from the subcomponent which only arose through its defaults. This creates a reasonably clear path to create a "stopgap" solution without too much effort from our current implementation, based on "veterancy" - any model holding values from a component which is "completeOnInit" - that is, which is fully instantiated before the "initial transaction" begins to operate, should beat any model contents which arise from a component which is not complete in this way.

It's really not clear what form a better solution to this problem might take, since this involves grappling with the problem of conflict resolution in all of its vast complexity. One possibility might be to allow an extra annotation on a relay indicating which direction will "win" in the case of an initial conflict. However, direct relays don't have a place to put such an annotation, and in general this option seems a bit crass. Another possibility might be to apply timestamps (or increasing tick numbers) to every change in the system, and allow any model with a later tick count to beat an earlier one. Models which were at their defaults (or statically distributed) states would be given infinitely old timestamps. However, this could open a huge can of worms in the case of composite models - there might be grounds for considering that different sections of a model should be assigned different ages according to the time they were modified. This would either require a lot more complexity in the change application process to track provenance, or else the revival of the "change bottling system" that we hoped we had left behind with the obsolete "video player relay" system.

In truly ambiguous cases (for example conflicts between default initial values) the system should probably signal an error.

We'll implement the "veterancy" system for now and keep thinking about alternatives.

        