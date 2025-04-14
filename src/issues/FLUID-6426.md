---json
{
  "title": "FLUID-6426",
  "summary": "Prefs Framework Composite Panel system modifies selectors after construction",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2019-11-07T11:19:38.191-0500",
  "updated": "2024-07-22T10:35:17.820-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6145/",
      "key": "FLUID-6145"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-11-11T11:00:07.606-0500",
      "body": "The selectors are modified because the composite panel handles the rendering of the sub panels. I'm trying to remember the details of why it was setup like this, but I believe it has to do with the render replacing the markup on each call to re-render.&#x20;\n\nSome further discussion in the fluid-work IRC channel today. \\\n<http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-11-11.log>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-11-12T10:51:37.753-0500",
      "body": "More conversation in the fluid-work channel today ( <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-11-12.log> ).\n\nThe gist is to use options distributions directed from the sub panel up to the composite panel to supply the necessary selectors and etc that need to be passed along.&#x20;\n\nExample of upward distribution:\\\n<https://github.com/fluid-project/infusion/blob/master/src/components/reorderer/js/ModuleLayout.js#L206>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-11-13T07:45:51.547-0500",
      "body": "More discussion in the fluid-work IRC Channel today: <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-11-13.log>\n\nYesterday we discovered that the upward distributions weren't working. Today we tracked that down to the fact that the sub panels are all createOnEvent.&#x20;\n\nThe suggestion to work around all these issues is as follows:\n\n2019-11-13T12:38:11  \\<Bosmon> Which is suggested by this devilish function itself, \"subPanelLifecycleBindings\"\\\n2019-11-13T12:38:47  \\<Justin\\_o> Bosmon: okay, I'm curious\\\n2019-11-13T12:39:10  \\<Bosmon> So, there is already quite enough grade synthesis magic lying around here that a little more won't hurt us that much more : P\\\n2019-11-13T12:39:20  \\<Bosmon> This function synthesizes a whole grade definition that gets overlaid onto us\\\n2019-11-13T12:40:00  \\<Bosmon> So there is no reason that we can't then also synthesize an selectors: { expander: { thing}} definition as well, that just contains the body of the current surfaceSubpanelRendererSelectors\\\n2019-11-13T12:40:24  \\<Bosmon> Minus the \"set\" junk of course, but just turn that into a standard function that does the crazy introspection and then returns the required selector entries\\\n2019-11-13T12:42:47  \\<Justin\\_o> Bosmon: ah that seems reasonable.. so we have fewer locations doing the prefetch too, and just apply it onto with standard grade merging instead manually changing the options after the fact\n"
    }
  ]
}
---
One of the immediate next goals of the framework after implementing the new style FLUID-6148 potentia II system is to make all component options immutable for FLUID-6145. One of the significant remaining sources of options mutation is in the Prefs framework's fluid.prefs.compositePanel.surfaceSubpanelRendererSelectors in Panels.js . This currently reads:

```java
fluid.prefs.compositePanel.surfaceSubpanelRendererSelectors = function (that, components, selectors) {
        fluid.each(components, function (compEntry, compName) {
            var compOpts = compEntry[0];
            if (fluid.prefs.compositePanel.isPanel(compOpts.type, compOpts.options)) {
                var opts = fluid.prefs.compositePanel.prefetchComponentOptions(compOpts.type, compOpts.options);
                fluid.each(opts.selectors, function (selector, selName) {
                    if (!opts.selectorsToIgnore || opts.selectorsToIgnore.indexOf(selName) < 0) {
                        fluid.set(selectors,  fluid.prefs.compositePanel.rebaseSelectorName(compName, selName), selectors[compName] + " " + selector);
                    }
                });
            }
        });
    };
```

The fluid.set call actually targets the component's own "options.selectors" entry and this function is called during the component's onCreate event. In the upcoming framework we can't expect to modify the selector collection after construction (and even in the current one it creates a race risk if one of them was evaluated during construction) so we will need to find an alternate means of implementing this workflow which doesn't modify the component's options.

        