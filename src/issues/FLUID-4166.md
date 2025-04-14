---json
{
  "title": "FLUID-4166",
  "summary": "instantiator.clearComponent() will fail to clear components which appear at multiple paths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-03-30T02:00:53.477-0400",
  "updated": "2014-03-03T13:11:54.682-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4722/",
      "key": "FLUID-4722"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2011-03-31T10:16:23.797-0400",
      "body": "Here's a pastie of a failing test: <http://pastebin.com/96HYca6z>\\\nHere's a code just in case:\n\nfluid.defaults(\"fluid.tests.component4166\", {\\\ngradeNames: \\[\"fluid.littleComponent\"],\\\ncomponents: {\\\ninstantiator: \"{instantiator}\"\\\n}\\\n});\\\nfluid.defaults(\"fluid.tests.component4166child\", {\\\ngradeNames: \\[\"fluid.littleComponent\", \"autoInit\"],\\\ncomponents: {\\\ninstantiator: \"{instantiator}\"\\\n}\\\n});\\\nfluid.defaults(\"fluid.tests.component4166grandchild\", {\\\ngradeNames: \\[\"fluid.littleComponent\", \"autoInit\"],\\\ncomponents: {\\\ngreatgrandchild: {\\\ntype: \"fluid.tests.component4166greatgrandchild\"\\\n}\\\n}\\\n});\\\nfluid.defaults(\"fluid.tests.component4166greatgrandchild\", {\\\ngradeNames: \"fluid.littleComponent\",\\\ncomponents: {\\\ngreatgreatgrandchild: {\\\ntype: \"fluid.tests.component4166greatgreatgrandchild\"\\\n}\\\n}\\\n});\\\nfluid.defaults(\"fluid.tests.component4166greatgreatgrandchild\", {\\\ngradeNames: \\[\"fluid.littleComponent\", \"autoInit\"]\\\n});\\\nfluid.tests.component4166greatgrandchild = function (options) {\\\nvar that = fluid.initLittleComponent(\"fluid.tests.component4166greatgrandchild\", options);\\\nfluid.initDependents(that);\\\nreturn that.greatgreatgrandchild;\\\n};\n\nfluid.tests.component4166 = fluid.littleComponent(\"fluid.tests.component4166\");\n\nvar testCreation = function (parent) {\\\nparent.options.components.child = {\\\ntype: \"fluid.tests.component4166child\"\\\n};\\\nfluid.initDependent(parent, \"child\", parent.instantiator);\\\njqUnit.assertValue(\"Child is created\", parent.child);\\\nvar child = parent.child;\\\nchild.options.components.grandchild = {\\\ntype: \"fluid.tests.component4166grandchild\"\\\n};\\\nfluid.initDependent(child, \"grandchild\", child.instantiator);\\\njqUnit.assertValue(\"Grandchild is created\", child.grandchild);\\\njqUnit.assertValue(\"Greatgrandchild is created\", child.grandchild.greatgrandchild);\\\n};\n\nfluidIoCTests.test(\"FLUID-4166 recreation after clear component\", function() {\\\nvar parent = fluid.tests.component4166();\\\njqUnit.assertValue(\"Parent is created\", parent);\\\ntestCreation(parent);\\\nparent.instantiator.clearComponent(parent, \"child\");\\\ntestCreation(parent);\\\n});\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-08-21T03:22:08.444-0400",
      "body": "This was resolved at commit 47d38c9 which will land for the 1.5 release\n"
    }
  ]
}
---
As a result of directly reusing the fluid.visitComponentChildren implementation from the core context resolution algorithm, instantiator.clearComponent() will cease traversal on encountering the SAME COMPONENT, rather than ceasing at the weaker condition of encountering the SAME PATH - in fact condition ii) will be met immediately following condition i) as the children of the "misplaced component" will be discovered at presumably already discovered paths. However, clearComponent() still requires to clear them even if they are not used as recursion points. THER CATTT agrees: "MRRAOURW"

        