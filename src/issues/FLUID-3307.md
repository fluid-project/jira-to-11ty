---json
{
  "title": "FLUID-3307",
  "summary": "Component tree for <select> can't handle non-unique 'value' attributes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-20T15:57:20.000-0400",
  "updated": "2011-01-20T15:09:51.084-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-11-29T00:42:53.000-0500",
      "body": "I don't believe this issue can be resolved as posted, with the current semantic the renderer operates. Options with the same value **are** the same option, and semantically indistinguishable. There would be no way to determine which of the identical options to select, only given an inspection of the data model - which is the acid test. We should explore other ways to achieve an effect like this, but I'm afraid the bottom line is that the data model of your application really does need to provide all the information necessary in a self-contained way to distinguish between different UI states that are used to represent it. That HTML supports non-model-based distinct UI conditions both with \\<select> and also with radio buttons has to unfortunately be declared a failure of its semantic model 😛\n"
    }
  ]
}
---
When rendering an HTML \<select> element, the component tree uses a string value matching the "value" of one of the options to indicated the current selection, e.g.:\
{ ID: myPullDown,\
optionlist: \["one", "two", "three"],\
optionnames: \["1 (one)", "2 (two)", "3 (three)"],\
selection: "two"\
}

The strings in the optionlist array are placed into the value attributes of the \<option> elements. But HTML does not require these value attributes to be unique, so it's perfectly valid HTML (albeit of questionable usefulness) to have non-unique values. In this case, you can't uniquely identify which item should be selected. For example:

{ ID: myPullDown,\
optionlist: \["one", "one", "two", "two", "three", "three"],\
optionnames: \["One", "Un", "Two", "Deux", "Three", "Trois"],\
selection: "two"\
}

        