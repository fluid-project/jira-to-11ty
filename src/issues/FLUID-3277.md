---json
{
  "title": "FLUID-3277",
  "summary": "Attempt to add children to leaf component in tree results in \"targetlump is undefined\" error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2009-10-09T14:02:08.000-0400",
  "updated": "2014-04-02T15:16:59.612-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:16:59.611-0400",
      "body": "We will be rewriting the renderer instead of fixing this.\n"
    }
  ]
}
---
Below is a section of component tree - in it, "title-plain" is a leaf node, but is presented with children, because its markup contains further nodes. This triggers the "erroneous branch", currently at line 1778 of the renderer:

if (component && component.children !== undefined) {\
renderContainer(component);\
renderindex = lump.close\_tag.lumpindex + 1;\
}

which can never execute correctly since it does not supply a target branch point. Behaviour in this case should be clarified and a reasonable diagnostic issued.

var fullTree = {\
children: \[\
// The colon (🙂 at the end of the rsf ID identifies the component as a repeating\
// component. In this full tree, there is one object for each repeated component.\
{\
ID: "resource-item:",\
children: \[ {\
ID: "title-plain",\
decorators: \[\
{\
type: "addClass",\
classes: "level0"\
}\
],\
children: \[	{\
ID: "title-link",\
linktext: "My Workspace",\
target: "/user/jimeng/",\
decorators: \[{\
attrs: {title: "Folder"}\
}]

}, {\
ID: "title-image", \
target: "../images/dir\_closed.gif",\
decorators: \[{\
attrs: {alt: "Folder"}\
}]\
}]

} ]\
},

        