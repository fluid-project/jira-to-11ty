---json
{
  "title": "FLUID-6273",
  "summary": "Rethink relationship between instances and grades - that is, between \"extensa\" and \"potentia I\"",
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
  "date": "2018-04-18T08:26:21.627-0400",
  "updated": "2018-04-18T08:27:56.414-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Historically grade registration has had very few semantics applied to it - although there is the vestigial "grade index" system operated by fluid.indexDefaults (not currently part of our public docs).

There are a couple of use cases coming up that require us to bring the relationship between extensa and potentia I at least one step closer. Firstly, the issuers of "nonce grades" need to be provided with some scheme for being able to clean up grades once they are no longer in use. Our established semantics for such things are by construction/destruction - suggesting that the 2015 "GRADES OF NECESSITY" comment on FLUID-6148 wasn't as off-beam as we had thought.

The other use case is transactional - for FLUID-6148 we have implemented transaction cancellation, and once this is integrated into a new version of the Nexus, we will have the further task of undoing any "defaults" messages that were handled as part of a request, in addition to undoing its effects on the component tree, in the case it results in an error.

Furthermore, with our upcoming JSON schema/I18N work there seems to be a requirement to reference the contents of pure grade definitions by means of IoC references - see pad notes at <https://pad.gpii.net/p/i18n-meetings-6294n3p> where line 224 states "NOTE that this is an IoC-formatted reference but without extra machinery to interpret grades as instances will not work".

Does this then imply that every fluid.defaults call then becomes converted into a component construction? This would be the cleanest means of achieving this, since for example any errors during a transaction would naturally unwind any defaults calls as well. However, we have two main classes of difficulty:

i) We need to put these components somewhere. They could go in a special root referenceable as "{defaults}", although on the other hand it would be nice to be able to use them as context names since otherwise we run into escaping issues. {defaults.gpii.app}.options.thing seems more readable than {defaults}.gpii.app.options.thing.\
ii) We need to think about expansion issues. There needs to be some good reason why the grade options don't get expanded on creation of the "grade instance". One option might \
be to automatically stick them into a member named "defaults" nested inside options, and apply a mergePolicy to it. However, see the following:

One way out of this might be to add a new "defaults" member to **every** component, and then to just declare that "defaults instances are just partially evaluated components". This doesn't seem great since the "defaults" of an instance may be corrupted through extra distributions. On the other hand we do eventually need to be able to recover these via the options provenance system. It would be really nice to just be able to issue {gpii.app}.options.thing but it just doesn't seem feasible since we will always end up confusing instances with defaults.&#x20;

Also the word "defaults" itself is something that we would like to get rid of in time so enshrining it in a new namespace is problematic. Perhaps {grades.gpii.app}.options.thing? Then we just have the expansion problem to deal with. Until we have "options flattening" we are always going to end up with "double options" if we attempt to expose it as {grades.gpii.app}.thing since "options" will always hold the original options - and then finally we need to explain why the mergePolicy which prevents expansion etc. is not visible.

Perhaps we will just instantiate these components as "shells" which then hijack resolution of the "options" path segment via resolvePathSegment, resolving it into the standard existing defaults area.&#x20;

        