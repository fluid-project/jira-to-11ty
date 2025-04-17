---json
{
  "title": "FLUID-6527",
  "summary": "Spifind: Dynamic routes do not work in production build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Gregor Moss",
  "reporter": "Giovanni Tirloni",
  "date": "2020-07-09T02:53:31.995-0400",
  "updated": "2024-07-19T07:38:46.209-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/INFRA-217/",
      "key": "INFRA-217",
      "summary": "Hosting for GSoC Games projects"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-07-14T03:09:23.526-0400",
      "body": "Once I'd removed the UglifyJsPlugin step from the webpack script, I was able to get the site built and running mostly properly by running server.js via the following actions:\n\n```java\nnpm install\r\nnpm run serve:build\r\nopen http://localhost:8080\n```\n\nOR\n\n```java\nnpm install\r\nnpm run build\r\nnode .\\server.js\r\nopen http://localhost:8080\n```\n\n \n\nI say \"mostly properly\" because almost none of the audio works any more, as all but one file were hosted on and imported from [instaud.io](https://instaud.io/). Only the \"game over\" sound is actually present in the repository, somewhat fittingly.\n\n For context, my environment is:\n\n* Windows 10 Pro v1909\n* Chrome 83\n* Node v10.15.3\n* npm 6.4.1\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-07-14T07:56:13.059-0400",
      "body": "Should we consider this a dynamic website then with a live component (the express server)? I was hoping to just serve the contents of the public folder but it doesn't seem possible.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-19T07:38:46.033-0400",
      "body": "Migrated to <https://github.com/fluid-lab/Spifind/issues/1>&#x20;\n"
    }
  ]
}
---
The dynamic routes used in the menu only work when running through the webpack-dev-server.

After running&#x20;

```
npm run build
```

, the contents of the public folder do not have directories like /htp1, /level1, level2, etc (so they generate 404 errors when deployed to a production webserver).

It's as if the react-router-dom component is not working as expected for some reason. Tested with Chrome 83.

When it works:

```
npm install
npm run start
open http://localhost:8888
```

When it fails:

```
npm install
npm run build
python -m http.server --directory public
open http://localhost:8888 -> click menu options
```

It seems that Alan Harnum had some problems creating a deployable unit in INFRA-217 as well.

Additionally, the UglifyJsPlugin from webpack 3.10.0 causes a build error. It's necessary to remove it from webpack.production.config.js to get a clean build (which still has the issue with the routes).

        