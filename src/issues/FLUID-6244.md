---json
{
  "title": "FLUID-6244",
  "summary": "Implement a build process for construction icon fonts in the Infusion-Icons repo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2018-02-01T15:53:25.531-0500",
  "updated": "2018-04-27T07:33:47.332-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion-Icons"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-02-23T07:59:44.869-0500",
      "body": "PR ( <https://github.com/fluid-project/infusion-icons/pull/4> ) merged at 034545fffcaf10903beeb1981426cffcf032740e\n"
    }
  ]
}
---
The [Infusion-Icons](https://github.com/fluid-project/infusion-icons) repo contains all of the SVGs that having been prepared for use as icons based off of the [Infusion Icons Visual Style Guide](https://wiki.fluidproject.org/display/fluid/Infusion+Icons+Visual+Style+Guide).

 

We've been having [discussions](http://fluid.2324889.n4.nabble.com/Icon-font-building-tt10242.html) about how to best convert these into font icons. The "[Standard workflow in maintaining and creating icon fonts](https://wiki.fluidproject.org/display/fluid/Standard+workflow+in+maintaining+and+creating+icon+fonts)" wiki page describes a process for using [grunt-webfont](https://github.com/sapegin/grunt-webfont) to generate the icon font. This process seems to work with the caveat that the node engine is not robust enough. We've done some investigation and the fontforge engine seems to produce good icons, however, fontforge is a separate install.

 

The initial plan was for a project to pull in Infusion-Icons via npm and run grunt-webfont locally to generate the projects specific icon font. However, the need to install fontforge separately makes this problematic. 

 

Here's the suggestion for a new process:

* In Infusion-Icons add a grunt task to generate an icon font that includes all of the icons
* In Infusion-Icons add a grunt task for building a custom icon font based on a config file
  * The config file will be versioned in the project's repo (e.g. Infusion), and include the paths to the SVGs to use, and their codepoints
  * The config file would be able to contain any configuration that is valid for grunt-webfont task
* After an icon font is generated, the implementor will need to manually place it in the specific project

Example config:

```java
{
    src: [
        "svg/contrast.svg",
        "svg/reset-undo-arrow.svg",
        "svg/line-space-expanded.svg",
        "svg/line-space-condensed.svg",
        "svg/line-space.svg"
    ],
    options: {
        font: "custom-icons",
        codepoints: {
            "contrast": 0xE005,
            "reset-undo-arrow": 0xE008,
            "line-space-expanded": 0xE009,
            "line-space-condensed": 0xE00a,
            "line-space": 0xE00b
        }
    }
}
```

        