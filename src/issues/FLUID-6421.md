---json
{
  "title": "FLUID-6421",
  "summary": "Update adjuster panels to render their own containers into the prefs editor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2019-11-01T09:01:57.130-0400",
  "updated": "2024-07-22T10:35:11.721-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-11-06T19:43:38.656-0500",
      "body": "Under the current system the prefs editor provides a template that contains the containers for each of the panels to be rendered into.\n\nExample templates:\n\n* <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/html/SeparatedPanelPrefsEditor.html>\n* <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/html/FullPreviewPrefsEditor.html>\n* <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/html/FullNoPreviewPrefsEditor.html>\n\nThere are some special cases to consider about these templates. In the case of the SeparatePanelPrefsEditor.html the markup could likely be simplified to have all of the container in a single repeating element (i.e the \\<li>), instead of having two levels of containment per panel container. The Full page prefs editors group panels by categories, but perhaps these could be encapsulated into \\<sections> and have the sections as the parent element to render into. The last bit is that for FullPreviewPrefsEditor.html each container may have a different class for styling purposes. Perhaps this could be factored out, but it is possible that an integrator would like to have the flexibility of specifying different container markup per panel.\n\nThere seems to be two potential options for addressing the dynamic rendering of containers. 1) have a function run ahead of the panels that injects the containers into the prefs editor template. or 2) have each panel self render their own container into the markup, if a container isn't already supplied.&#x20;\n\n1\\) inject containers.\n\na. have a loop/iteration to call jQuery to inject each bit of markup\\\nb. have another renderer component that just renders the containers\\\nc. move the panels to be part of a renderer component tree&#x20;\n\nIt's unlikely that we even want to attempt b. and c. at this point in the current renderers life. a. seems the only real options here and would require some way of configuring which markup to render for each panel, and where to put it. At this level the configuration should lie with the prefs editor. We also want to be able to just use the markup from the template if it is already provided.\n\n2\\. self rendering\n\nAs mentioned in the description, we can look at how the newViewSupports work to self render containers. However, these rely on a completely new type of view component. The panels are all currently rendererComponents which are backed by the standard viewComponent. The main issue here being that they require a container be passed as an argument. We would have to create a new type of renderer component that behaved the same as the current one but was backed by the appropriate new view component.&#x20;\n\nAdditionally we need to sort out the configuration for what markup to supply for each panels container. In different contexts (e.g. separated panel vs full page) the markup will vary (e.g. \\<li> vs \\<div>). So again it seems that the configuration should belong at the prefs editor level, or at least be easy enough to configure through it. The parent container would need to be passed down from the prefs editor component. We also want to be able to just use the markup from the template if it is already provided, and not worry about the self rendering.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-11-07T18:41:46.777-0500",
      "body": "I spoke with @@Antranig Basman in the fluid-work channel about this today ( <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-11-07.log> ).&#x20;\n\nAntranig's suggestion:\n\nMy current suggestion is that we could do something even simpler than 1a) and enable, via a new top-level configuration option, an extremely rudimentary renderer which bashes the HTML together for a template exactly of the kinds we already have via some string-bashing\\\n12:05 PM It would accept as its raw materials a \"template template\" of exactly the form of the outside of <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/html/SeparatedPanelPrefsEditor.html> only with the interior represented by %panels which it then interpolates via repeated use of fluid.stringTemplate, and a further option indicating what tag it generates, which\\\n12:05 PM defaults to \"li\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-01-16T14:47:00.190-0500",
      "body": "@@Antranig Basman I started looking into this today. The good news is that the prefsEditor is a view component that just appends it's pre-fetched (fetched by the resourceLoader) template/markup. ( <https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/PrefsEditor.js#L456> ). This seems to be the place where we can do some processing on the template.\n\nWe are missing some information here, namely what the preferences are, their order, and selector for the container. The work on <https://fluidproject.atlassian.net/browse/FLUID-6420#icft=FLUID-6420> is already producing a prioritized set of preferences. We can pass this down from the builder to the prefsEditor. Not sure if we can support this for the grade version, but we've been talking about removing that anyways. The selectors are added to the prefs editor already, but not in the most usable form. They use the flattened (\".\" replaced by \"\\_\") form. Although it's a known transformation so we could probably just borrow the flattening code in the prefs editor to look up the selectors.\n\nThat brings me to the problem I'm not sure of. The selectors can be any valid selector. Which would make the string bashing approach you described a bit more complicated in terms of keeping these selectors valid. In our own examples we just use a single class name, but an integrator may use something more complex. \n\nAlso I'm assuming we only want to support the case where we need to insert a set of panel containers, or expect that they are already present. Do we also want to support a mixed case, where some are pre-defined and others we want to dynamically inject? To satisfy the first case I think we just generate a map for stringTemplate to use and if the token is found it injects it. The mixed case we'd need to look up each panel container selector first to determine if it was there. Again something that would be hard with the string bashing. \n\nLastly, regarding your suggestion to run through stringTemplate repeatedly, I'm not really sure what that would look like or mean. As we'd likely only have one \"%panels\" token, I guess we could also have multiple tokens to support he sections in the full page, but that would require a more involved process for generating the map, and defining the configuration for that, to pass into the stringTemplate. This again, would seem to only be one pass though. Am I missing something?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-01-23T12:39:07.489-0500",
      "body": "In speaking with @@Antranig Basman today the answers to the above questions are:\n\n \n\n* Won't support mixed or complex cases. Rather there will be some top level setting that will indicate that we expect to generate the containers for the panels. Complex cases, like the current full page editors that have categories of preferences will need to supply a full template.\n* In the case of autogeneration the container selectors from the auxiliary schema will be ignored and replaced by options distributions for the generated container classes.\n* There will be two levels of string templating. 1) for each panel container that interpolates the selector class name and etc. and 2) one that interpolates all the panels into the prefs editor template at something like %panels.\n"
    }
  ]
}
---
Currently a prefs editor template is provided, which supplies containers for each of the preference editor panels. This is problematic for those that want to customize which panels are available, as they will need to modify this template in addition to adding/removing the preferences to show. 

The panels should be able to inject their own containers and render into those. Take a look at <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/NewViewSupport.js#L55-L73> which may be reused for this case. 

Additionally the order of the panels will need to be specified so that the presentation order of the preferences adjusters can be controlled.

        