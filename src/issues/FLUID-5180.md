---json
{
  "title": "FLUID-5180",
  "summary": "Simplify process for using messages from message bundles in the preference framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-10-15T15:06:56.747-0400",
  "updated": "2019-09-23T08:35:09.848-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5156/",
      "key": "FLUID-5156",
      "summary": "Document how to internationalize a preferences editor using message bundles"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5119/",
      "key": "FLUID-5119"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-15T15:08:12.898-0400",
      "body": "Discussion in <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2013-10-15>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-16T09:43:43.257-0400",
      "body": "The above strategy has issues when dealing with prefixed message keys. For example the ones used in contrast <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/messages/contrast.json>\n\nThese are prefixed because they correspond to messages that should be used in an array of strings.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-10-16T15:11:03.176-0400",
      "body": "Hi Justin - I suggest you adopt a different prefixing character for your strings, for example the hyphen \"-\" that we use in our CSS class names. Even if we were to adopt the escaping parser for these EL expressions, it would mean an unsightly and confusing escaping of your existing prefixes as for example contrast\\\\.bw etc.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-17T13:19:17.837-0400",
      "body": "Antranig, I took your suggestion and changed the prefix to \"-\" so now we would have something like \"contrast-wb\".\n\nHowever I'm having trouble with the IoC resolution. If I try to resolve the values in the strings block, I get an error that the messageResolver doesn't exist. If I try to resolve it in the protoTree, I'm getting the string literal instead of the expanded value. (for optionnames).\\\n<http://pastie.org/private/hudscqyg1vl5zp59smlw>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-18T13:11:56.706-0400",
      "body": "Submitted pull request <https://github.com/fluid-project/infusion/pull/419>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-28T08:49:29.606-0400",
      "body": "pull request merged at 861d635d56c7546c764d23cf40e7f96e85516b17\n"
    }
  ]
}
---
Currently the preference framework makes use of message bundles and the messageResolver. In cases where the renderer is used, it is simple enough to use the message rendererer component to get at the values. However, if a component needs to use the string values outside of the message renderer component, expanders are needed to perform the appropriate lookup.

Example:

```java
// simple lookup function
fluid.slidingPanel.lookupMsg = function (messageResolver, value) {
    var looked = messageResolver.lookup([value]);
    return looked ? looked.template : looked;
};

// complex lookup function which returns an array of strings for a given group of messagekeys
fluid.prefs.panels.lookupMsg = function (messageResolver, prefix, values) {
    var messages = [];
    fluid.each(values, function (value, key) {
        var looked = messageResolver.lookup([prefix + "." + value]);
        messages.push(looked ? looked.template : looked);
    });
    return messages;
};
```

This process should be simplified through the use of resolvePathSegment, similar to how the dom binder works with calls to "{that}.dom.selector"

1\) Create an object to lookup the messages from the message resolver. and bound to the stringBundle member name.&#x20;

2\) the function should be able to look up keys and namespaces.&#x20;

Note this will only provide access to the string value via IoC.

        