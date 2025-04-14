---json
{
  "title": "FLUID-4233",
  "summary": "In a specialised case, demands block configuration can become corrupted through the process of expansion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2011-05-13T03:08:34.524-0400",
  "updated": "2013-04-11T17:28:04.110-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-05-13T03:28:09.755-0400",
      "body": "The test case supplied by JURA could be made to fail by use of \"args\" in the demands block. Aliasing is a tricky issue in general, although it seems that for now, all the remaining avenues for corruption are plugged up. The case of pseudoarguments is handled by the wholesale copying of \"componentRecord\" at the head of embodyDemands, all locally expanded values are safe through the removal of the \"noCopy\" default option in stackResolverOptions, which just leaves the case of values which reach deferred expansion through expandComponentOptions, which is the headline issue of this bug. This is resolved by explicitly adding a fluid.copy to the aliased material as the expansion record is constructed on line 429.\n\nIt might be well worth though, constructing a \"general invariant testcase\" against the whole of FluidIoCTests, to assert that every record entered into the dependentStore has the same value it had on input. \"Frozen objects\" from ECMAScript 6 or so would be a great help here...\n"
    }
  ]
}
---
In a particular case, it is possible for the IoC expansion machinery to corrupt the configuration held in a demands block, replacing it with an expanded variant. This failure was reported in the context of CSpace - the second of two neighbouring autocomplete controls, one attached to "borrower" and the other to "contact", when resolving against the same demand block, finds instead a corrupted instance replaced with the value-resolved version of the first. The following Firebug trace shows discovery of the corrupted block:

14:31:26.315: Located 1 potential match, selected best match with 2 matched context names: {"funcName":"cspace.URLDataSource","args":{"url":"../../chain/loanout/source-vocab/borrower","targetTypeName":"cspace.autocomplete.authoritiesDataSource"},"registeredFrom":"<http://nightly.collectionspace.org:8180/collectionspace/ui/js/Demands.js:406>"}

The demands block in question is&#x20;

// Autocomplete demands\
fluid.demands("cspace.autocomplete.authoritiesDataSource", "cspace.autocomplete", {\
funcName: "cspace.URLDataSource",\
args: {\
url: "{autocomplete}.options.vocabUrl",\
targetTypeName: "cspace.autocomplete.authoritiesDataSource"\
}\
});

Looking at the "embodyDemands" pathway in FluidIoC, it appears that the problem is implicated with the use of "args" to specify an argument which is destined for "options". Even removing the "noCopy" option in the expandLight variant used for arguments doesn't resolve the issue since the expansion is deferred to the component's own use of expandComponentOptions later on, which SHOULD not copy in general, since it may be receiving model material, etc. The material should be copied up front in embodyDemands.

        