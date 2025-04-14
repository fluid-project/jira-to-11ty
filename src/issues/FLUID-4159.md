---json
{
  "title": "FLUID-4159",
  "summary": "The Uploader cannot be instantiated as a child component in an IoC tree",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-03-24T02:17:14.366-0400",
  "updated": "2014-03-03T13:12:11.602-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-03-29T23:09:42.176-0400",
      "body": "Now resolved in trunk, together with the ability to issue demands blocks against the uploader in such a configuration. This relies on the new directive \"fluid.alias\" and requires that the INNER demand block (e.g. the one which forward from fluid.uploaderImpl to fluid.multiFileUploader) does not issue any requests for options or arguments. We could expand support in the future if we find such a thing is required, but the algorithm might be quite complex.\n"
    }
  ]
}
---
The Uploader, although (and in fact, somewhat, because of) being IoC-driven, cannot itself appear in an IoC tree due to a fault in implementation. Its historical design has involved its being split into two components, one formally called "fluid.uploader" which contains two children, a "progressiveEnhancer" and an "uploaderImpl", the latter holding the actual uploader implementation. This implementation is aimed at making the uploader "automatically progressive enhancer driven", that is, to expose to users an apparently concrete function named "fluid.uploader", with a polymorphic product, whose exact type and configuration depends on the capabilities of the browser, as well as taking into account any specified user configuration.\
Whilst this approach has been successful where the uploader is constructed concretely, attempting to drive uploader construction as part of a larger IoC tree has exposed several problems with the approach. The most crucial problem involves the handling of arguments passed to the top-level constructor fluid.uploader which are in fact destined for the concrete product which is constructed later. The expansion workflow for these options becomes unclear. They are passed "encoded" to fluid.uploader with the expectation that they will immediately be handed over to a framework initialisation function. This in fact does not happen and they are to be transferred to a child component, of unknown type at the point instantiation begins. **some** separation of options between "fluid.uploader" and "fluid.uploaderImpl" is necessary, since the child components of "fluid.uploader", including "fluid.uploaderImpl" itself, must be separated from those of fluid.uploaderImpl. Further awkwardness occurs since the uploader's progressiveEnhancer itself needs to be configurable, as one of the prime use cases of this form of transformable programming is to enable the final constructed type to be a compromise between environmental capabilities and user requests.\
This is a paradigmatic case of progressive enhancement and transformable programming and needs to be made easy and reliable.&#x20;

        