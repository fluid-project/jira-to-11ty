---json
{
  "title": "FLUID-6605",
  "summary": "Allow contrast themes to be applied using custom properties only",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Ned Zimmerman",
  "date": "2021-03-24T10:22:29.765-0400",
  "updated": "2024-07-22T10:35:21.251-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6260/",
      "key": "FLUID-6260",
      "summary": "For enactors that modify the styling and presentation of content, a class should be added to identify that it is enabled."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6606/",
      "key": "FLUID-6606"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-03-24T10:30:30.158-0400",
      "body": "We had talked in the [matrix channel](https://matrix.to/#/!mDigWuPWilYGiEcOCA:matrix.org/$zFoFxVZKZfZh49N6r37bexLVj_KNaovM59aOWTf4mMU?via=matrix.org) about this a while back. What we could do for those that want a drop in solution, is to provide the existing behaviour as a separate set of style sheets that can be optionally used. These would still make use of the custom properties as outlined in this issue, but provide the same behaviour as the enactors do today. \n"
    }
  ]
}
---
Currently, contrast themes are applied by adding a class to the body which applies the appropriate theme from [Enactors.css](https://unpkg.com/browse/infusion@3.0.0-dev.20210312T233557Z.0b016a6dc.FLUID-6580/dist/assets/src/framework/preferences/css/Enactors.css). For example, applying the black and white contrast theme assigns the `.fl-theme-bw` class to the body, which sets the following CSS custom properties:

```css
.fl-theme-bw {
  --fl-fgColor: #000;
  --fl-bgColor: #fff;
}
```

These two variables are used within UIO's [contrast theme stylesheet](https://github.com/fluid-project/infusion/blob/main/src/framework/preferences/css/sass/utils/_themes.scss#L63-L480), which is applied to the adjusted website.

This works but has a significant drawback. Because the contrast theme stylesheet uses `!important` quite liberally, some of the website's styles will be forcibly overridden and will require further use of `!important` and lots of duplicated styling in order to properly integrate UIO into a given website's design language. Here's an example: <https://codepen.io/greatislander/pen/ExZjpBW>

In this case, a custom focus style has been applied to links which inverts the background and text color when the link receives focus. But UIO applies a background and text colour with `!important` to [any element](https://github.com/fluid-project/infusion/blob/4e804fee39403575f893565548124f6e61b00490/src/framework/preferences/css/sass/utils/_themes.scss#L63-L83) within the adjusted body:

```css
[class*="fl-theme"]:not(.fl-theme-prefsEditor-default) * {
  background-color: var(--fl-bgColor) !important;
  border-bottom-color: var(--fl-fgColor) !important;
  border-left-color: var(--fl-fgColor) !important;
  border-right-color: var(--fl-fgColor) !important;
  border-top-color: var(--fl-fgColor) !important;
  color: var(--fl-fgColor) !important;
}
```

 In terms of specificity, this overrules the theme's `a:focus` rule, even when the `background-color` property is given the `!important` flag. The following CSS must be added just to ensure that the custom `color` and `background-color` of the link focus style will be honoured when a contrast theme is applied:

```css
[class*=fl-theme]:not(.fl-theme-prefsEditor-default) a:focus {
  background: var(--fl-fgColor, black) !important;
  color: var(--fl-bgColor, white) !important;
}
```

In my experience, many such overrides of overrides are necessary when integrating UIO.\
 \
A different approach that would also have the impact of reducing the CSS needed to apply a contrast theme would be for UIO to provide only the relevant custom properties. In other words, applying the yellow on black theme would only add the `.fl-theme-yb` class to the body and apply the following styles:

```css
.fl-theme-yb {
  --fl-fgColor: #ff0;
  --fl-bgColor: #000;
}
```

Then, the integrator could use these two CSS custom properties throughout their stylesheets with a fallback to their theme's default colour. For example:

```css
body {
  /* This will use --fl-bgColor if available, else use #fff. */
  background-color: var(--fl-bgColor, #fff);
  /* This will use --fl-fgColor if available, else use #333. */
  color: var(--fl-fgColor, #333);
}
```

In this way the contrast theme provides colour variables which are consumed by the integrator's stylesheet, rather than attempting to override large portions of the integrator's stylesheet which the integrator may have to struggle to restyle appropriately while respecting the contrast theme.

There would also be significant benefits in terms of file size. The most complex contrast theme is this one:

```css
.fl-theme-bbr {
    --fl-fgColor: #000;
    --fl-bgColor: #b96;
    --fl-linkColor: #009;
    --fl-disabledColor: #600000;
    --fl-selectedFgColor: #fff;
    --fl-selectedBgColor: #000070;
    --fl-buttonFgColor: #000;
    --fl-buttonBgColor: #ffd18a;
}
```

Minified, this is 204b compared to the current contrast theme stylesheet's 20.2kB.

An important caveat is that this approach would necessitate some more comprehensive documentation on how to integrate contrast themes, and would require more deep integration into a site's stylesheets. This would have the benefit of encouraging integrators to write more flexible, adaptable CSS.

        