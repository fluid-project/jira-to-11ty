---json
{
  "title": "FLUID-5250",
  "summary": "Using an object as the return value for a conditional transform doesn't work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-01-10T16:24:27.829-0500",
  "updated": "2014-04-04T15:36:17.922-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5251/",
      "key": "FLUID-5251"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-01-10T16:47:31.332-0500",
      "body": "Submitted a pull request with a unit test for the issue.\\\n<https://github.com/fluid-project/infusion/pull/452>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-01-12T01:00:51.244-0500",
      "body": "By our current expansion rules, this test case is invalid - since any arbitrary \"document-like material\" automatically becomes interpreted according to the outputpath: inputpath convention and so produces no output. In particular, the material, for example, conditionUsed: \"con\" becomes interpreted as a directive to the system to read the input path \"con\" and write the value held there to the output path \"conditionUsed\" - since there is no such input path, this branch both evaluates to undefined as well as having no effect on the output document.\n\nI've adjusted the test cases to produce the desired results in my branch at <https://github.com/amb26/infusion/tree/FLUID-5250> but we may well have a discussion about whether, along with the similar anomalous behaviour of <https://fluidproject.atlassian.net/browse/FLUID-5248#icft=FLUID-5248>, this is really the behaviour we want, since I think this requirement surprises every user of the framework, its author KASPARNET included. A possible resolution might be to automatically interpret any transformer arguments as literals unless they are \"anti-protected\" by a transformer, yet to be designed which reverts the interpreter to the mode it is in at the head of the document. \"fluid.transforms.document\" perhaps.\n\nOr even more subtly, it may be that \"literalValue\" isn't what we want either, but a 3rd mode, not yet seen, in which any material is interpreted as \"literal\" unless it itself includes further transforms - since \"literalValue\" permanently closes the door on interpreting further transforms which is mostly likely not what the user would want as a default condition. Unfortunately as we write more and more complex and nested transforms, we are running into more and more of these interactional issues between user expectations and the interpreter state. We should try not to feel bad about this : P\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-01-12T04:54:21.064-0500",
      "body": "As a small comfort, a reminder that we have at least made life slightly easier for using literalValue. It's a keyword that doesn't have to be wrapped in a transform, so instead of:\n\n\"true\": {\\\ntransform: {\\\ntype: \"fluid.transforms.literalValue\",\\\nvalue: {\\\n\"result\": \"it was true\"\\\n}\\\n}\\\n},\n\none can put:\n\n\"true\": {\\\n\"literalValue\": {\\\n\"result\": \"it was true\"\\\n}\\\n},\n\nMaking it slightly less bulky.&#x20;\n\nAnyway, regarding your general comments above, I agree that it would probably be worth having a discussion about the behavior of literals vs paths as default. I think it'll be tough to find a perfect solution, as what seem the most natural behavior will largely depend on WHERE in the model transformation document you are - but there does seem to be some problems with the current model\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-01-12T05:23:51.387-0500",
      "body": "Ugh, one bug rarely comes alone apparently – found another issue <https://fluidproject.atlassian.net/browse/FLUID-5251#icft=FLUID-5251> ... basically every output 'requested' within each conditional state will be output to, due to the nature of the the conditional expander implementation.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-01-15T09:57:01.567-0500",
      "body": "Justin Obara Am I understanding this JIRA correctly - that the problem was that you're getting the output from both true and false blocks (hence three outputs)... and would something like <https://github.com/kaspermarkus/infusion/commit/607088fac3f57cd91abd5f90065e1d63a1af35ed> correctly illustrate the desired result? Or is this JIRA about something completely different?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-15T10:12:14.651-0500",
      "body": "Kasper, yes that test looks good. I've had a couple of experiences, 1) where both were returned as a merged object 2) s where nothing is return 3) where only the true condition was ever returned. I guess the note to this is that some of those cases may have been structured incorrectly. Unfortunately I don't have those cases saved any more.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-01-15T10:21:56.467-0500",
      "body": "ok .. yeah - so this one would only take care of (1)... (2) could be due to a wrongly structured condition (if condition is 'undefined', neither is run) or perhaps related to the issue that antranig fixed in GPII-5248.. Or I guess one would be able to reproduce both (2) and (3) with different variations over the theme 'incorrectly structured' 🙂\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-02-18T16:00:50.506-0500",
      "body": "There is a pull request for this: <https://github.com/fluid-project/infusion/pull/455>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-02-19T03:25:01.963-0500",
      "body": "Please see my above comment - this should be classified as \"not a bug\" since the desired behaviour is implemented. However, we should review the implemented system under a separate JIRA to ensure that it really is the one we want.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-03-19T15:29:55.045-0400",
      "body": "Justin Obara can you please see if this issue can be closed?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-04T15:36:17.920-0400",
      "body": "This duplicate <https://fluidproject.atlassian.net/browse/FLUID-5251#icft=FLUID-5251>\n"
    }
  ]
}
---
Simple conditional transforms where the results for the true and false conditions are strings returns the correct value, however if an object is used for the result the conditional expander no longer works.

In the example case below both the values from the true and false objects are used. Note: I've also had other cases where only the true condition is returned regardless of the conditionalPath value and others where an empty object is returned.

example:

var model = {\
a: "v1",\
b: "v2",\
con: false\
};

var rules = {\
value: {\
transform: {\
type: "fluid.transforms.condition",\
conditionPath: "con",\
"true": {\
newA: "a",\
newB: "b",\
conditonUsed: "con"\
},\
"false": {\
conditionUsed: "con"\
}\
}\
}\
};

fluid.model.transform(model, rules);

        