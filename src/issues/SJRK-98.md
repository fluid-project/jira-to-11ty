---json
{
  "title": "SJRK-98",
  "summary": "Tool not able to load on older device",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-05-28T17:50:23.452-0400",
  "updated": "2018-07-17T12:21:19.910-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": "Lanix Ilium X210\\\nAndroid 5.1 (Lollipop)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/IMG_20180525_120849.jpg",
      "filename": "IMG_20180525_120849.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/IMG_20180525_120855.jpg",
      "filename": "IMG_20180525_120855.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/IMG_20180525_120914.jpg",
      "filename": "IMG_20180525_120914.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/Screenshot_1527619833.png",
      "filename": "Screenshot_1527619833.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/Screenshot_1527619968.png",
      "filename": "Screenshot_1527619968.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/Screenshot_1527619993.png",
      "filename": "Screenshot_1527619993.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/Screenshot_1527620219.png",
      "filename": "Screenshot_1527620219.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/Screenshot_1527620226.png",
      "filename": "Screenshot_1527620226.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/Screenshot_1527620230.png",
      "filename": "Screenshot_1527620230.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-98/Screenshot_1527620253.png",
      "filename": "Screenshot_1527620253.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-05-29T15:00:48.268-0400",
      "body": "Is there any more information about the browser used on the device?\n\nI have emulated the device via the Android Virtual Device Manager, and the site seems to load in the factory Android Browser (v 5.1.1), though the CSS does not seem to be rendering properly (See Screenshot\\_1527619833.png). The two navigational buttons on the Welcome page seem to work, even though they are not visible.\n\nThe other pages are similarly not displaying properly:\n\n* Screenshot\\_1527619968.png\n* Screenshot\\_1527619993.png\n* Screenshot\\_1527620219.png\n* Screenshot\\_1527620226.png\n* Screenshot\\_1527620230.png\n* Screenshot\\_1527620253.png\n\nNext step is to try with only 88 MB left on the disk\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-29T15:07:55.119-0400",
      "body": "Language switching does not work in the emulated Android Browser, nor does the text-to-speech. \n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-29T15:14:38.104-0400",
      "body": "The CSS is likely not showing properly as all of the colours on the site are set via CSS variables, which is not supported in Android Browser (which hasn't been available on Android since 4.2, so it's interesting that it's in the emulator). Likewise for CSS Grid Layout (see <https://fluidproject.atlassian.net/browse/SJRK-95#icft=SJRK-95>)\n\nEdit: I've concluded there may be CSS issues specific to this emulated browser\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-29T16:35:37.769-0400",
      "body": "The site loads, looks and works as expected on a Nexus 7 (2012) running Android 5.1.1 and Chrome 53.0.2785.124, except for the CSS Grid Layout rules. I was successfully able to author a story with only a text block. Saving a story with an image block (uploaded or captured, didn't matter) did not work.\n\nEdit: as mentioned in <https://fluidproject.atlassian.net/browse/SJRK-99#icft=SJRK-99>, the image saving issues are potentially solved\n"
    }
  ]
}
---
One of the devices used in Medellín was unable to load the tool

The device is apparently a Lanix Ilium X210 from Claro: <http://catalogo.claro.com.co/home/EquipoDetalle/Lanix-X210>

Potential avenues of investigation:

* install Android Studio and create an emulated version using AVD
* low available storage (88 MB free listed on device in question and storage warning was active)
* slow connectivity (it was listed as being connected to WiFi), can be simulated using Chrome Inspector or in Windows using Fiddler to throttle connection

        