---json
{
  "title": "FLUID-5750",
  "summary": "Implement \"options flattening revolution\", flattening all material in \"options\" onto \"top-level material\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-08-22T16:28:06.388-0400",
  "updated": "2021-08-08T13:57:33.383-0400",
  "versions": [],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4982/",
      "key": "FLUID-4982",
      "summary": "Implement \"globally asynchronous ginger world\" aka \"wave of promises\" allowing arbitrarily asynchronous progress through the ginger algorithm"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5811/",
      "key": "FLUID-5811"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-09-08T11:33:31.853-0400",
      "body": "Against this: Flattening \"options\" onto the top level might surprise users who find it intuitive that material named \"options\" in configuration ends up at path \"options\" on the final component. Although we have exceptions to this - for example \"events\" would now end up at the expected place, and \"members\" move up one level anyway.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-09-14T12:44:47.527-0400",
      "body": "Private chat with Tony Atkins \\[RtF] strengthens our resolve in favour of this change, which had been wavering:\n\n(20:08:06) Adtkins: Well, they will end up learning to write configuration that would only work with a dynamic component\\\n(20:08:11) AntranigBasman: Hopefully not\\\n(20:08:16) AntranigBasman: Why would they?\\\n(20:08:27) AntranigBasman: They have just written \"options\"\\\n(20:08:33) AntranigBasman: THEY don't reference \"arguments\", only you do\\\n(20:08:37) Adtkins: They can't specify the container.\\\n(20:08:50) AntranigBasman: Why not?\\\n(20:08:56) Adtkins: we went through this.\\\n(20:09:00) AntranigBasman: Yes, we did\\\n(20:09:01) Adtkins: remember yesterday?\\\n(20:09:03) AntranigBasman: And we implemented a solution for it\\\n(20:09:05) AntranigBasman: Remember? : P\\\n(20:09:15) Adtkins: Yes, which made things not look at all like normal options blocks.\\\n(20:09:24) Adtkins: at least not one you would pass to a component's constructor\\\n(20:09:29) AntranigBasman: THey look exactly like them, just at one level of containment further out\\\n(20:09:36) AntranigBasman: They look exactly like what you would write as a subcomponent definition\\\n(20:09:44) AntranigBasman: And we are planning for a world in which users do not call component constructors\\\n(20:10:05) Adtkins: Did you get that last bit?\\\n(20:10:21) AntranigBasman: Yes\\\n(20:10:36) AntranigBasman: Although I don't know how I could tell 🙂\\\n(20:10:41) AntranigBasman: I'll assume that \"I got that last bit\"\\\n(20:10:41) Adtkins: I was hoping that we would end up teaching them to enter something they could also plug into a constructor.\\\n(20:10:46) AntranigBasman: Yes\\\n(20:10:58) AntranigBasman: Well, we can't\\\n(20:11:01) AntranigBasman: Constructors are not declarative\\\n(20:11:05) AntranigBasman: And eventually they will be abolished\\\n(20:11:12) Adtkins: in favor of what?\\\n(20:11:19) AntranigBasman: In favor of something very similar to what you have just implemented\\\n(20:11:21) Adtkins: I mean like namespaced.bollocks({})\\\n(20:11:29) AntranigBasman: A scheme which just accepts configuration and \"puts it somewhere\"\\\n(20:11:31) Adtkins: those are really going away?\\\n(20:11:47) AntranigBasman: Well, we won't in practice abolish them - but they are not part of \"end user programming\"\\\n(20:11:57) Adtkins: That's fair.\\\n(20:11:59) AntranigBasman: A user can only use a constructor if they have already committed to writing JavaScript\\\n(20:12:09) AntranigBasman: In which case they are part of a different ecosystem\\\n(20:12:22) Adtkins: or if they use the initBlock helper.\\\n(20:12:32) AntranigBasman: I think it's reasonable enough to tell them if/when they decided to graduate, \"what you used to write in the 'container' field now goes into the first argument\"\\\n(20:12:41) AntranigBasman: But actually I **AM** planning to abolish that particularly annoyance\\\n(20:12:44) AntranigBasman: You can consult this JIRA:\\\n(20:12:54) Adtkins: Yes, I was thinking we would have a similar graduation phase when starting to discuss server-side components\\\n(20:12:56) AntranigBasman: <https://issues.fluidproject.org/browse/FLUID-5750>\\\n(20:13:05) Adtkins: which I am not even thinking of making work in a sandbox.\\\n(20:13:10) AntranigBasman: Once this is implemented, one level of your annoyance goes away\\\n(20:13:19) AntranigBasman: Since we will stop having this separate wierd status of \"container\"\\\n(20:13:26) AntranigBasman: It will just become a top-level option like everything else\\\n(20:13:31) Adtkins: what about type?\\\n(20:13:34) Adtkins: is that included in the purge?\\\n(20:13:34) AntranigBasman: That too 🙂\\\n(20:13:41) Adtkins: fantastic.\\\n(20:13:59) AntranigBasman: We already do have the new utility \"fluid.construct\" although it is not widely used\\\n(20:14:08) AntranigBasman: But this is the scheme that will be used when we implement THE NEXUS\\\n(20:14:18) AntranigBasman: Since all that there will be is \"a block of JSON going over the wire\"\\\n(20:14:24) AntranigBasman: So we want to make that block as self-contained as possible\\\n(20:15:02) AntranigBasman: Our current fluid.viewThing(container, options) syntax was designed back in the dark days of 2007 when we didn't have an inkling of this future magnific world\\\n(20:15:23) Adtkins: Yes, I find myself trying to put container in the options all the time.\\\n(20:15:25) AntranigBasman: We didn't even have \"littleComponents\" then since we implicitly assumed that all that anyone would create was view widgets\\\n(20:15:26) Adtkins: it just seems more natural.\\\n(20:15:44) AntranigBasman: And we've had to keep hold of these scheme for backwards compatibility during the 1.x era\\\n(20:15:55) AntranigBasman: Now we're gearing up to 2.0 we can start to revisit these ancient and fundamental mistakes\n"
    }
  ]
}
---
Deeply-nested component material can become very "pointy" very quickly - 33% of this depth is accounted for by the extra layer named "options" which is necessary when a component's options are specified at the subcomponent level. Here is an example:

```java
fluid.defaults("fluid.prefs.prefsEditorLoader", {
        gradeNames: ["fluid.prefs.settingsGetter", "fluid.prefs.initialModel", "fluid.viewComponent"],
        components: {
            prefsEditor: {
                priority: "last",
                type: "fluid.prefs.prefsEditor",
                createOnEvent: "onCreatePrefsEditorReady",
                options: {
                    members: {
                        initialModel: "{prefsEditorLoader}.initialModel"
                    },
...
```

The initial historical driver for this was the "container" argument which was the 0th argument in the construction signature of viewComponents. Since this was manifestly not part of "options", a new level of containment needed to be created, when using declarative configuration, to house this argument. The other natural member of this layer was the component's creator function name itself, which became encoded as "type".

We may shortly be in a position to do away with this layer. Part of it has been inherently logically problematic - the "createOnEvent" annotation is used to describe the conditions under which a component should be created. This would seem to be impossible to move into the component's own options area, since evaluating this would seem to imply that the component must exist already. However, with the mind-bending possibilities resulting from the "globally asynchronous ginger world" described under <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982>, this should become perfectly feasible.

The complete set of "top-level options" which would then be folded directly into options would be:

container\
type\
createOnEvent\
priority (this should be renamed as "creationPriority" or abolished entirely)

        