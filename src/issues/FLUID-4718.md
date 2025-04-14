---json
{
  "title": "FLUID-4718",
  "summary": "Dropdowns are not correctly associated with their labels",
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
  "reporter": "Michelle D'Souza",
  "date": "2012-05-25T12:21:54.018-0400",
  "updated": "2013-10-04T09:20:05.046-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4920/",
      "key": "FLUID-4920"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4928/",
      "key": "FLUID-4928"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2013-02-19T16:55:32.838-0500",
      "body": "This failure can also be seen on our demo site:\n\n<http://build.fluidproject.org/infusion/demos/uiOptions/demo.html>\n\nIf you take a look at the demo and try inspecting drop-down controls within one of the UI Options panels you will notice that the there is a label for a drop-down (for example: \\<label for=\"theme-selection\">Colour & Contrast\\</label>) that has points to a select attribute with missing id (e.g. theme-selection).\n"
    },
    {
      "author": "y z",
      "date": "2013-02-19T17:03:29.498-0500",
      "body": "Preventing the rewrite of the label id (with a new -selection postfix) fixes the issue however there is a high chance of id collision when we have multiple instances of such label select pairs.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-20T03:48:20.605-0500",
      "body": "This looks like quite a long-standing bug in the renderer. In theory it could be fixed in a couple of reasonably straightforward ways, but we should be clear that this is done in a way which is demonstrably self-consistent, as well as consistent with those of the historical motivations behind the renderer that we still agree with, as well as our plans for its future.\n\nSome historical and motivational details - \"UISelect\" is the last remnant of what in RSF, the Java-based predecessor of the renderer, was called a \"cluster component\". These were reflectively analysed, and each subportion of the overall component was given an ID consisting of the \"full ID\" of the parent followed a hyphen and then the member in the cluster. A large amount of the Java-based renderer's workflow was curtailed due to the painful limits on execution speed of JavaScript code in 2008 when the work was mostly done. In addition, we were then competing with low-level \"sleaze\" type templating technologies as TrimPath. Another area of curtailment can be seen in the same area of code affected by this bug, lines 1042-1046 of fluidRenderer.js inside \"rewriteIDRelation\". In Java all of this workflow was pluggable, with a \"Static Component Renderer\" system (SCR) which registered handlers for each individual attribute in HTML by its semantic function. In the course of flattening out this workflow, some bugs were introduced, including this one. There is for example clearly a typo on line 1042 which states \"if (attrname === \"for\") - this code has clearly never been tested and we have no test cases which deal with the case of rewriting of the \"headers\" attributes in tables. In order to exercise these we would have to have a table which itself was repeating and hence had its own ids rewritten.\n\nIn order to get some bearings on what kinds of fixes might be appropriate, it would be helpful to review what the original purpose was behind the renderer's now very baroque-seeming \"full ID\" system. The concept behind this was to ensure some kind of **id stability**. In order that the component tree provided by a server could be recognisable from request to request, we wanted to ensure that there was as far as possible a stable semantic meaning behind the IDs assigned to components - such that if two successive requests to the server generated a component with the same ID, there was high confidence that these actually represented the \"same component\" in terms of their identity and data binding function. Given the \"zero request state\" idiom which is desirable for web requests, we expected to be able to completely discard this component tree between requests, and then reconstruct it, or a very lightly modified version of it on the following request.\n\nThis motivates the \"fullID\" system itself - now the peculiar naming of cluster components is motivated by the particular kind of \"polymorphism\" that we see, in particular, in UISelect. In terms of plain HTML, UISelect may be honoured either by a direct HTML \\<select> tag, or else by a distributed set of \\<input type=\"checkbox\"> tags scattered effectively freely around the DOM. In \"old RSF\", we used to maintain the invariant that every \"submitting component\" (that is, one with any direct binding function), had a SINGLE, uniquely associated \"base DOM node\". In the case of \\<select> this was clearly just the \\<select> itself, which was helpfully also the event responsible for DOM events/form submissions whose value had the binding function. In the case of checkboxes, there was no such component, and so \"old RSF\" used to insist that a special \"fictitious\" (actually real) DOM element, usually a \\<span> or a \\<div> was created in the markup to hold this function.\n\nIn the relatively early days of the fluid Renderer, we decided that the need for this fictitious element was quite an annoyance - it had annoyed people in the RSF days too and was also prone to getting eaten up completely in hostile environments like IE etc. So we did away with it - this was more possible on the client also since we had abandoned any sight of ever requiring again RSF's capability of encoding all of its data binding activities as completely \"Web 1.0\"-type form submissions. It did so by means of synthesising a network of hidden \\<input> tags within a form that it had rendered, so that the data binding effect of the form could be interpreted on the server without any requirement for JS on the client. Since the 2008 function of the Fluid Renderer consisted **entirely** of JS on the client, we seemed to be able to ditch any features associated with this form submission facility. One of the things we should consider with the upcoming Renderer work is whether we expect to place any value at all on being able to render JS-free interfaces and form submissions as before - given this code is moving back to the server again.\n\nIt is because of the \"cluster component system\" that the portion of a UISelect component actually responsible for data binding/DOM events related to the held value ends up with the \"-selection\" suffix. It was originally planned that there would be a whole family of such cluster components, and rather than being special-cased as it is in JS, these suffixes were in Java inferred directly from the component's data structure (in Java, a \"pea\" holding public fields, in particular one named \"selection\" of type UIInput). For the renderer's future, we plan to instead represent all such \"renderable entities\" directly as particular kinds of \"Fluid components\" with some particular grade, thus hopefully finally putting an end to this confusing distinction between \"renderer components\" and \"Fluid components\" - as well as to the upsetting distinction between JSON representing \"protocomponent trees\" and \"IoC component trees\".\n\nIn the short term, as long as we can satisfy ourselves about what the exact algorithm is that is used to assign \"stable IDs\" to members of UISelect in the \\<select> case as well as the \\<input type=\"checkbox\"> case, and we are satisfied that these are both adequately stable and will not generate extra collisions, the best route is probably to remove all special-casing of UISelect in terms of generating the spurious \"-selection\" suffix. However, in the medium term we need to review exactly what our criteria are for ID stability and what purpose this might carry on to serve in the framework. It's worth observing that there seems to be another latent bug in the renderer of just the same kind as this (<https://fluidproject.atlassian.net/browse/FLUID-4718#icft=FLUID-4718>) in the case the renderer detects an id collision in the document it is currently writing. Line 664 of fulidRenderer.js, holding the function \"adjustForID\" on detecting an id collision (this being in a part of the document which is currently static and which the renderer has no control over) will attempt to repeatedly perturb the allocated id of a component until it finds one that is not allocated. Should it do this, it seems very likely that any id-based HTML relation such as label \"for\" will be disrupted since I don't see any attempt in the code to compensate for this.\n\nBearing in mind that renderer component ids are i) very long and unwieldy , and ii) subject to annoying collision possibilities such as those handled by \"adjustForID\", that we should simple do away with the old \"fullID\" system entirely, and rely on some other scheme for whatever stability and uniqueness we need - and in particular, to start to handle the issues of stability and uniqueness separately. It seems that any stability we require could be handled as part of the data binding system, and not as part of the renderer - if there is no data binding function of a component, to a certain extent it would seem that there is no need for id stability. However, one exception to this is maintenance of non-binding state between requests - for example, focus. The renderer currently makes SOME, but not entirely adequate attempts to maintain user focus on components between instances of rendering, and these naturally depend on some kind of stability scheme such as that provided by \"fullID\". These are the kinds of issues that we will need to focus on when reforming the renderer.\n\nFor example, should the \"renderer be dismantled into the IoC system\" it seems that the component's \"path to root\" in its IoC tree would be a similar kind of \"stable ID\" that could be used to mostly successfully identify instances of \"the same component\" between rendering cycles. These are at least a lot flatter and more readable than renderer \"full IDs\".\n\nOne thing the renderer has never been able to do well, and is a natural facility in more cheapskate systems such as \"knockout\" is what could be called \"micro-updates\". Should there be small-scale changes to a component's model, it would seem that these could be honoured by a much cheaper and fine-grained system that simply manipulated attributes and direct text contents of DOM nodes. Since the renderer's heritage is of a server-side system that expected to do bulk updates, this ended up out of scope for our original port into JS - but it is a crucial requirement of any performant or reasonable renderer. The very early beginnings of such a system are part of the \"visibility model\" scheme appearing in the VideoPlayer, that allows a section of model holding booleans to be mapped against visibility state of a set of DOM nodes. The \"visibility model\" as a primitive feature appears at <https://fluidproject.atlassian.net/browse/FLUID-4928#icft=FLUID-4928>. The \"new renderer\" should provide a natural system for extending this to arbitrary parts of the renderer's workflow, including any things which we currently consider as \"decorators\" as well as the component's data binding state itself. This would also ease interaction problems such as the ones we described above with maintaining UI focus across updates, since as little of the DOM would be touched as possible in the case of only limited state updates. In the case of wholesale state updates we would need to retain the current ability to do bulk updates using innerHTML - and to switch transparently between the two methods as appropriate given our ideas about the size of the update and the performance characteristics of the client.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-06T01:30:07.578-0500",
      "body": "Fix merged into master at d3bd1f\n"
    }
  ]
}
---
When using the UIO drop downs with a screen reader the labels are not read out because they are not properly associated.&#x20;

The failing test can be found in this branch: <https://github.com/yzen/infusion/tree/FLUID-4718>

        