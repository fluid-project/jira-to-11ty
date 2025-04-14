---json
{
  "title": "FLUID-4128",
  "summary": "Renderer expander converts all context-resolved values from the model to string type",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-03-01T22:25:35.172-0500",
  "updated": "2014-03-03T13:37:24.341-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
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
      "date": "2011-03-01T22:26:25.064-0500",
      "body": "The code in question reads:\n\n```java\ncspace.header.produceTree = function (that) {\r\n        var tree = {\r\n            logout: {\r\n                messagekey: \"logout\"\r\n            },\r\n            user: {\r\n                messagekey: \"user\"\r\n            },\r\n            userName: {\r\n                messagekey: \"userName\",\r\n                args: {\r\n                    userName: that.options.login.options.screenName\r\n                } //interpret %userName string\r\n            },\r\n            expander: {\r\n                repeatID: \"menuItem\",\r\n                type: \"fluid.renderer.repeat\",\r\n                pathAs: \"item\",\r\n                valueAs: \"itemName\",\r\n                controlledBy: \"menuitems\",\r\n                tree: { //check whether to display the menu items by calling assertMenuItemDisplay with the hide variable\r\n                    expander: {\r\n                        type: \"fluid.renderer.condition\",\r\n                        condition: {\r\n                            funcName: \"cspace.header.assertMenuItemDisplay\",\r\n                            args: \"${{itemName}.hide}\"\r\n                        },\r\n                        trueTree: {\r\n                            label: {\r\n                                target: \"${{item}.href}\",\r\n                                linktext: {\r\n                                    messagekey: \"${{item}.name}\"\r\n                                }\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        };\r\n        return tree;\r\n    };\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-03-01T23:15:37.649-0500",
      "body": "Fixed at revision c6298c9db2fca7f385d1dfd83bbdd23fa328b03c&#x20;\n"
    }
  ]
}
---
(07:55:06) Isle of Yura: og I noticed one funny thing\
(07:55:33) Isle of Yura: when using repeat expander for example\
(07:55:41) Isle of Yura: and trying to resove pathAs value\
(07:55:57) Isle of Yura: boolean is converted into string 🙂

(07:57:37) Isle of Yura: i noticed it depends on noCopy option\
(07:57:39) Isle of Yura: i tihnk\
(07:57:57) AntranigBasman: Interesting\
(07:58:14) Isle of Yura: and expandLight, and the fact that that option cant propagate \
(07:58:23) AntranigBasman: Can't propagate?\
(07:58:37) Isle of Yura: yes as part of renderer expander resolution\
(07:58:46) Isle of Yura: repeat expander that is\
(07:58:47) AntranigBasman: What do you mean by propagate?\
(07:59:10) Isle of Yura: i mean it wont get through even if i were to specify it somewhere\
(08:00:23) AntranigBasman: Can you give an example?\
(08:00:45) Isle of Yura: one sec\
(08:03:29) Isle of Yura: so kasper has a branch in his github, where he 's trying to use condition expander\
(08:03:36) Isle of Yura: and as an arg he passes a boolean\
(08:03:50) Isle of Yura: but when we get to calling the function that will resolve condition\
(08:04:06) Isle of Yura: that boolean turns to a string

<https://github.com/collectionspace/ui/blob/master/src/main/webapp/js/Header.js>

(08:10:41) Isle of Yura: so line 83\
(08:10:51) Isle of Yura: ${{itemName}.hide} is actually a boolean\
(08:11:07) Isle of Yura: but when cspace.header.assertMenuItemDisplay is called, it's already a string arg

        