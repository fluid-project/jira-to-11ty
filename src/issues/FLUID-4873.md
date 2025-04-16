---json
{
  "title": "FLUID-4873",
  "summary": "Introduce downward-matching CSS-like context selectors for options forwarding and other IoC use cases",
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
  "reporter": "Antranig Basman",
  "date": "2012-12-19T04:49:33.927-0500",
  "updated": "2014-08-17T13:39:22.327-0400",
  "versions": [
    "1.4"
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
      "url": "/browse/FLUID-4335/",
      "key": "FLUID-4335"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4879/",
      "key": "FLUID-4879",
      "summary": "Aggregate events aren't properly injected into another component"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5495/",
      "key": "FLUID-5495"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-01-10T22:22:40.340-0500",
      "body": "In the work evaluating <https://fluidproject.atlassian.net/browse/FLUID-4879#icft=FLUID-4879>, a further case emerged where these kinds of downward-matching selectors would be relevant - treated in the following chat with Colin:\n\n(18:51:09) AntranigBasman\\@googlemail.com/Gaim: AC's case was very interesting today\\\n(18:51:23) Clark Kent: i didn't have time to see her test case or what it exposed\\\n(18:51:36) AntranigBasman\\@googlemail.com/Gaim: I think it's the first time we might be trying to rely strongly on even the \"old\" ginger world\\\n(18:51:58) AntranigBasman\\@googlemail.com/Gaim: It was put in there, but I don't think most users ran into the use case it handled\\\n(18:52:15) AntranigBasman\\@googlemail.com/Gaim: Given it is such a special case in the framework, you'd really need to know that there was special dispensation for it\\\n(18:52:35) AntranigBasman\\@googlemail.com/Gaim: As opposed to the modern \"ginger world\" in which essentially everything you might try is expected to work\\\n(18:52:59) AntranigBasman\\@googlemail.com/Gaim: She was trying to boil an event in a subcomponent, and have it injected \"upwards\" through two levels of containment to a parent\\\n(18:53:13) AntranigBasman\\@googlemail.com/Gaim: \"upward injection\" is something that currently the framework doesn't like to do very much\\\n(18:53:27) Clark Kent: ah, yes, i see this\\\n(18:53:34) Clark Kent: still have irc open from earlier\\\n(18:53:41) AntranigBasman\\@googlemail.com/Gaim: But at least its an improvement on OO where the mere idea of upward injection was completely unthinkable 🙂\\\n(18:54:31) AntranigBasman\\@googlemail.com/Gaim: \"Luke Skywalker syntax\" is also relevant to this problem.... \\\n(18:54:50) AntranigBasman\\@googlemail.com/Gaim: I imagine we could/would create a model for \"boiling any number of events that match a specification\"\\\n(18:55:01) AntranigBasman\\@googlemail.com/Gaim: Which would prevent her from having to write all this cumbersome manual boiling code\\\n(18:55:13) AntranigBasman\\@googlemail.com/Gaim: That depends in a fragile way on the exact collection of things to be boiled\\\n(18:55:22) AntranigBasman\\@googlemail.com/Gaim: \"code\" : P\\\n(18:55:50) Clark Kent: 🙂\\\n(18:56:00) AntranigBasman\\@googlemail.com/Gaim: I did leave an open question in my \"IoCSS\" JIRA about other cases for which Skywalker syntax might be relevant\\\n(18:56:04) AntranigBasman\\@googlemail.com/Gaim: And I think this exposes one of them\\\n(18:56:32) AntranigBasman\\@googlemail.com/Gaim: It's a classic fit since the total number of constituent events is fundamentally unknown\\\n(18:56:41) AntranigBasman\\@googlemail.com/Gaim: All you want to say is \"wait for all subcomponents to do X\"\\\n(18:57:08) AntranigBasman\\@googlemail.com/Gaim: Which implies that Skywalker is relevant.... just as with the comparable model with DOM nodes and event listeners\\\n(18:58:14) Clark Kent: yes, that makes quite a bit of sense\\\n(18:58:42) AntranigBasman\\@googlemail.com/Gaim: My current idea for detecting \"Skywalker expressions\" is whether they have a space in them or not\\\n(18:58:49) AntranigBasman\\@googlemail.com/Gaim: But I'm not sure whether this is too tricksy or not\\\n(18:59:11) AntranigBasman\\@googlemail.com/Gaim: Right now something between {} is always assumed to be an UPWARDS selector from the current point\\\n(18:59:21) Clark Kent: yes\\\n(18:59:26) AntranigBasman\\@googlemail.com/Gaim: But it would be nice not to have to create a separate packaging system for downwards selectors\\\n(18:59:48) AntranigBasman\\@googlemail.com/Gaim: It would be nice to be able to use either one or the other form, where both are applicable, and have it automatically detectable which kind you are using\\\n(19:00:10) AntranigBasman\\@googlemail.com/Gaim: However, a context where both are possible this migt force you to use a slightly unnatural syntax\\\n(19:00:47) AntranigBasman\\@googlemail.com/Gaim: Something like {\\* readyableComponent} or {that readyableComponent} or some such\\\n(19:01:06) AntranigBasman\\@googlemail.com/Gaim: Since if you just said {readyableComponent} this would be in danger of being interpreted as an UPWARD selector\\\n(19:02:01) AntranigBasman\\@googlemail.com/Gaim: We could do something sleazy like have a special first character, although sadly the one we might want, \"^\" would indicate upward searches rather than downward searches : P\\\n(19:02:18) AntranigBasman\\@googlemail.com/Gaim: And \">\" is already in use for \"direct descendent\"\\\n(19:03:25) AntranigBasman\\@googlemail.com/Gaim: I guess the {\\* x} system isn't too odious?\\\n(19:03:27) AntranigBasman\\@googlemail.com/Gaim: What do you think\\\n(19:03:41) AntranigBasman\\@googlemail.com/Gaim: It may not be very odious, but on the other hand it isn't very communicative\\\n(19:07:29) Clark Kent: I'm not sure the example of {\\* readyableComponent} or {that readyableComponent} seems so terrible\\\n(19:07:54) Clark Kent: cat is really resistant to letting me put in his eyedrops these days\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:54:05.753-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
Also known as "Luke Skywalker options" or "IoCSS".

An important upcoming work package is regularising and unbundling the UIOptions component so that it is easy to extend by 3rd and 5th parties - these should find it easy to add and remove new options grouped into new panels, ultimately simply through drawing up of suitable JSON declarations and HTML markup with no JavaScript coding required.

A crucial part of rendering this process tractable and humane is reforming the very cumbersome manual options mapping code which was delivered for the 1.4 release. This was a stop-gap measure designed to abstract over the exact subcomponent layout required by UIOptions (part of which was driven by the need to use subcomponent containment in order to time component creation and rendering relative to I/O execution for panel templates), and present a simple "flat-ish" view to users and integrators where all the options accepted by subcomponent "panels" (currently, "ants") appear at top level.&#x20;

Unfortunately this options mapping code was never properly integrated with the framework workflow - and currently is not usable by 3rd parties, such as the VideoPlayer integration, in order to achieve the same "first class" remapping of deeply nested options onto the top level enjoyed by UIOptions panels held within the core framework (e.g. text sizing controls). This is because of limitations on the timing of options merging imposed by the pre-FLUID-4330 framework.

As well as being "un-open", the syntax operated by this options mapping code is quite malign, and requires the integrator to know the exact path from UIOptions root to the component being remapped.

As we reform this code, a crucial piece of work will be drawing up a new syntax, semantic and implementation that allows one or more components to be specified by a process extremely similar to that operated by CSS selectors - a linear, segmented string which is mapped onto the component structure lying between a root and a leaf to be matched. Given CSS is so widespread and successful, it seems reasonable to simply adopt CSS syntax and semantics where they are a good fit.

It is only possible to see good roles right now for a very limited subset of "IoCSS" selector styles - even in the very rich HTML world, selectors which are used in practice have been found to overwhelmingly drawn from a very simple subset - which guided the limited subset of CSS rules currently comprehended by the Fluid Renderer system.&#x20;

Within the Fluid IoC system, there are only two properties of a component which currently seem relevant to such a process - the "context name"(s) attached to a component, which are used to resolve contextual EL expressions UP the tree operated by the existing IoC system - and the component's id. Following this, we propose three element (component matching rules) as follows:

* \- matches any component - universal selector\
  E - matches any component holding a context name of E - special support for the string "that" as in current IoC context matching\
  E#myid - matches any component with a context name of E with id equal to myid

And the following two descendent rules:

E F - Matches any F element that is a descendant of an E element.\
E > F - Matches any F element that is a direct child of an E element

Compare with the CSS 2.1 selector syntax, of which this is a small subset - <http://www.w3.org/TR/CSS2/selector.html>

This syntax seems sufficient for the needs we can forsee now, and will be straightforward to implement - we should even be able to share very significant parts of the existing fluid.parseSelector implementation in fluidParser.js - in the future it might be useful to be able to distinguish different sources of context names (member names, nicknames, grade names) - but given we don't do this right now in the existing upward context name matching system it seems somewhat unlikely.

With this system, we could rewrite the block of expressions occuring in the UIOptions manual mapping code as follows:

"\*.templateLoader":                                                       -> "{templateLoader}"\
"**.templateLoader.**.templatePath.options.value":             -> "{templatePath}.options.value\
"\*.uiOptionsLoader":                                                      -> "{uiOptionsLoader}"\
"\*.uiOptionsLoader.container":                                        -> "{uiOptionsLoader}.container"\
"**.uiOptionsLoader.**.uiOptions":                                     -> "{uiOptions}"\
"**.uiOptionsLoader.**.uiOptions.\*.textControls":                -> "{textControls}"\
"**.uiOptionsLoader.**.uiOptions.\*.layoutControls":             -> "{layoutControls}"\
"**.uiOptionsLoader.**.uiOptions.\*.linksControls":               -> "{linksControls}"\
"**.uiOptionsLoader.**.uiOptions.\*.preview":                       -> "{preview}"\
"**.uiOptionsLoader.**.uiOptions.**.preview.**.enhancer":       -> "{preview uiEnhancer}"

In this particular usage, the context portion of the EL expression becomes the "IoCSS" selector expression, the immediately following path segment, if any, becomes a "pseudoargument name" supplied to that component's argument list on creation, defaulting to "options", and further parth segments reference EL segments within that structure. We also implicitly scope these context selectors to the CURRENT tree under instantiation - this may well be implemented internally by the framework automatically prefixing the context selector with the "{#id " initial portion derived from the currently instantiating root component (under the current UIOptions layout, for example, the one derived from "fluid.uiOptions.inline")

Other usages of these context expressions may apply different semantics for the derived path names.&#x20;

This system has the immediate benefit that the options mapping block not only becomes much more readable and concise, but it also becomes much more **stable** - we gain all the benefits of "appropriate stability" that well-chosen CSS expressions bestow on markup users, that the expression may continue to match under a wide range of "reasonable refactorings" of the component structure. For example, the "{linksControls}" selector will continue to find the (expectedly unique) child of type linksControls wherever it may be found in the entire subtree.

Other uses of this syntax will probably include "static binding" of the kind operated by jQuery.live(), jQuery.delegate() and the like - that is, the ability to declare static event binding rules at a high level that will automatically bind and unbind listeners from and on components matching an expression as these components are created and destroyed. Right now, this kind of binding would have to be contributed into the grade hierarchy of the component itself which is coming and going, which could represent a dependency risk in many situations.

This style has also been speculated as helpful in the <https://fluidproject.atlassian.net/browse/FLUID-4850#icft=FLUID-4850> IoC-driven testing framework.

        