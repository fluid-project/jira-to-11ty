---json
{
  "title": "FLUID-6359",
  "summary": "Make the dist directory self contained",
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
  "date": "2019-01-09T11:06:35.055-0500",
  "updated": "2024-07-19T08:07:33.664-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5579/",
      "key": "FLUID-5579",
      "summary": "Assess the potential for modularising Infusion into one or more modules, and appropriate distribution scheme"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6138/",
      "key": "FLUID-6138",
      "summary": "Add missing files from /src to the /dist directory"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6361/",
      "key": "FLUID-6361"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-07-15T10:25:08.505-0400",
      "body": "Another option could be to only have the JS builds in the dist directory and have the generated CSS published in the src directory. In that way, we wouldn't have to duplicate anything. I guess the draw back here would be about expectation. Perhaps a user would expect everything to be in dist.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2019-07-15T10:31:07.728-0400",
      "body": "Guarded +1 - all assets necessary to use Infusion components should be present in the /dist directory following build. We will need to make sure we update any relevant tutorials, such as any for UIO.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-07-15T11:03:23.158-0400",
      "body": "I echo @@Alan Harnum's sentiment. It makes sense that the dist folder should be wholly sufficient for usage of infusion in an external project.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-16T11:30:31.459-0400",
      "body": "In talking with @@Colin Clark another option would be to create a \"package\" specific NPM module. For example an infusion-uiOptions module that provided everything needed for UIO at an easy to grab place. This would be setup to pull in infusion, and copy over all the necessary bits to a specific location before publishing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-16T11:31:36.244-0400",
      "body": "Another option form talking with @@Colin Clark is to copy templates and message bundles to the dist directory.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-16T13:25:50.792-0400",
      "body": "The following JS files are not included in any of the concatenated distributions. However, jquery.standalone.js and the module js files are probably not needed for use on the web.\n\nsrc/components/textToSpeech/js/mockTTS.js\\\nsrc/components/uploader/js/UploaderCompatibility-Infusion1.2.js\\\nsrc/components/uploader/js/UploaderCompatibility-Infusion1.3.js\\\nsrc/framework/core/js/jquery.standalone.js\\\nsrc/framework/lib/hypher/patterns/be.js\\\nsrc/framework/lib/hypher/patterns/bn.js\\\nsrc/framework/lib/hypher/patterns/ca.js\\\nsrc/framework/lib/hypher/patterns/cs.js\\\nsrc/framework/lib/hypher/patterns/da.js\\\nsrc/framework/lib/hypher/patterns/de.js\\\nsrc/framework/lib/hypher/patterns/el-monoton.js\\\nsrc/framework/lib/hypher/patterns/el-polyton.js\\\nsrc/framework/lib/hypher/patterns/en-gb.js\\\nsrc/framework/lib/hypher/patterns/en-us.js\\\nsrc/framework/lib/hypher/patterns/es.js\\\nsrc/framework/lib/hypher/patterns/fi.js\\\nsrc/framework/lib/hypher/patterns/fr.js\\\nsrc/framework/lib/hypher/patterns/grc.js\\\nsrc/framework/lib/hypher/patterns/gu.js\\\nsrc/framework/lib/hypher/patterns/hi.js\\\nsrc/framework/lib/hypher/patterns/hu.js\\\nsrc/framework/lib/hypher/patterns/hy.js\\\nsrc/framework/lib/hypher/patterns/is.js\\\nsrc/framework/lib/hypher/patterns/it.js\\\nsrc/framework/lib/hypher/patterns/kn.js\\\nsrc/framework/lib/hypher/patterns/la.js\\\nsrc/framework/lib/hypher/patterns/lt.js\\\nsrc/framework/lib/hypher/patterns/lv.js\\\nsrc/framework/lib/hypher/patterns/ml.js\\\nsrc/framework/lib/hypher/patterns/nb-no.js\\\nsrc/framework/lib/hypher/patterns/nl.js\\\nsrc/framework/lib/hypher/patterns/or.js\\\nsrc/framework/lib/hypher/patterns/pa.js\\\nsrc/framework/lib/hypher/patterns/pl.js\\\nsrc/framework/lib/hypher/patterns/pt.js\\\nsrc/framework/lib/hypher/patterns/ru.js\\\nsrc/framework/lib/hypher/patterns/sk.js\\\nsrc/framework/lib/hypher/patterns/sj.js\\\nsrc/framework/lib/hypher/patterns/sv.js\\\nsrc/framework/lib/hypher/patterns/ta.js\\\nsrc/framework/lib/hypher/patterns/te.js\\\nsrc/framework/lib/hypher/patterns/tr.js\\\nsrc/framework/lib/hypher/patterns/uk.js\\\nsrc/module/fluid.js\\\nsrc/module/module.js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-08-02T08:54:59.516-0400",
      "body": "I was talking to @@Antranig Basman in the [fluid-work channel today](http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-08-02.log) and it came up that we may want to perform this work in conjunction with <https://fluidproject.atlassian.net/browse/FLUID-5579#icft=FLUID-5579>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-08-02T09:20:42.356-0400",
      "body": "Whilst the work is related, I don't think we want to hold up this useful improvement awaiting the big reorg. But let's keep notes as we are doing this, especially with respect to CSS concatenation/rebasing etc. bearing in mind that the reorg is coming and check if anything about the reorg would make this work easier or harder.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-08-14T15:01:25.488-0400",
      "body": "Here's an example of how the structure would look like trying to just bring in the pieces that are missing:\n\n* dist\n  * assets\n    * CSS\n    * Fonts\n    * Images\n    * Messages\n    * Templates\n    * Lib (3rd party code)\n    * Additional JS Files (These ones aren't typically going to be necessary, maybe we can leave them off)\n      * src/components/textToSpeech/js/mockTTS.js\n      * src/components/uploader/js/UploaderCompatibility-Infusion1.2.js\n      * src/components/uploader/js/UploaderCompatibility-Infusion1.3.js\n  * concatenated JS files and source maps\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-09-03T16:29:53.328-0400",
      "body": "For most of the CSS files references to images or fonts are to an adjacent directory. However, OverviewPanel.css references OpenSans from the lib directory. Similarly, the prefs framework references OpenDyslexic from the lib directory. These references are expecting three steps back. This means that these CSS, if using the previously mentioned suggestion, wouldn't be able to properly source the fonts.\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-09-04T10:35:11.448-0400",
      "body": "May be able to use the `copy` task's `process` option to rebase the URLs.\n\n<https://github.com/gruntjs/grunt-contrib-copy#process>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-09-06T09:52:29.147-0400",
      "body": "I have created dev releases for a couple of the potential solutions.\n\n* 3.0.0-dev.20190906T123329Z.e5ad6fbc6.FLUID-6359-src\n  * Retains the src/ tree structure when copying assets to dist/assets/\n* 3.0.0-dev.20190906T123957Z.756c03fe5.FLUID-6359-collectedAssets\n  * Regroups assets based on type when copying to dist/assets/\n\nA more detailed write can be seen in the related [post](https://lists.idrc.ocad.ca/pipermail/fluid-work/2019-September/010969.html) to the fluid-work mailing list.\n\n<http://fluid.2324889.n4.nabble.com/Potential-options-for-addressing-FLUID-6359-Make-the-dist-directory-self-contained-td10638.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-05-05T13:34:12.960-0400",
      "body": "Instead of moving more into the dist directory, the dist directory was modified to only contain the concatenated js files and the related source maps. This was done along with changes for <https://fluidproject.atlassian.net/browse/FLUID-6594#icft=FLUID-6594> to migrate the build system from grunt to npm scripts.\n"
    }
  ]
}
---
Currently the NPM package for Infusion contains a dist directory. The dist directory includes the various js builds of Infusion. It also includes an assets directory that includes the css, and their dependencies, that are generated from Stylus files. In this way the dist directory contains all of the generated/compiled resources. However other dependencies still need to be pulled from source, for example the templates and message bundles.

When pulling down Infusion for a website or other front end project, it would be more convenient if all of the distributed resources were contained within the dist directory. That might look like including the src, with the compiled css in place, along side the js files. 

* dist
  * src
  * infusion-all.js
  * ...

or

* dist
  * assets
    * src
  * infusion-all.js

With either of the above structures, an integrator would only need to copy over the dist directory from node\_modules/infusion.

        