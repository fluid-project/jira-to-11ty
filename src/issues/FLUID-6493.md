---json
{
  "title": "FLUID-6493",
  "summary": "iltorb dependency fails to build inside containers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-04-16T16:39:05.330-0400",
  "updated": "2024-07-22T10:35:12.571-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The version used in Infusion doesn't have a binary download available so it's to be built inside Alpine an other containers. It fails to get built due to compilation errors.

```
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2672:44: note: candidate: v8::MaybeLocal<v8::Object> v8::Value::ToObject(v8::Local<v8::Context>) const
   V8_WARN_UNUSED_RESULT MaybeLocal<Object> ToObject(
                                            ^~~~~~~~
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2672:44: note:   candidate expects 1 argument, 0 provided
In file included from /root/.cache/node-gyp/12.16.2/include/node/v8-internal.h:14:0,
                 from /root/.cache/node-gyp/12.16.2/include/node/v8.h:27,
                 from /root/.cache/node-gyp/12.16.2/include/node/node.h:67,
                 from ../../nan/nan.h:54,
                 from ../src/dec/stream_decode.h:4,
                 from ../src/dec/stream_decode.cc:1:
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2686:31: note: candidate: v8::Local<v8::Object> v8::Value::ToObject(v8::Isolate*) const
                 Local<Object> ToObject(Isolate* isolate) const);
                               ^
/root/.cache/node-gyp/12.16.2/include/node/v8config.h:328:3: note: in definition of macro 'V8_DEPRECATED'
   declarator __attribute__((deprecated(message)))
   ^~~~~~~~~~
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2686:31: note:   candidate expects 1 argument, 0 provided
                 Local<Object> ToObject(Isolate* isolate) const);
                               ^
/root/.cache/node-gyp/12.16.2/include/node/v8config.h:328:3: note: in definition of macro 'V8_DEPRECATED'
   declarator __attribute__((deprecated(message)))
   ^~~~~~~~~~
../src/dec/stream_decode.cc:54:29: error: no matching function for call to 'v8::Value::BooleanValue()'
   if (info[2]->BooleanValue()) {
                             ^
In file included from /root/.cache/node-gyp/12.16.2/include/node/node.h:67:0,
                 from ../../nan/nan.h:54,
                 from ../src/dec/stream_decode.h:4,
                 from ../src/dec/stream_decode.cc:1:
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2699:8: note: candidate: bool v8::Value::BooleanValue(v8::Isolate*) const
   bool BooleanValue(Isolate* isolate) const;
        ^~~~~~~~~~~~
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2699:8: note:   candidate expects 1 argument, 0 provided
In file included from /root/.cache/node-gyp/12.16.2/include/node/v8-internal.h:14:0,
                 from /root/.cache/node-gyp/12.16.2/include/node/v8.h:27,
                 from /root/.cache/node-gyp/12.16.2/include/node/node.h:67,
                 from ../../nan/nan.h:54,
                 from ../src/dec/stream_decode.h:4,
                 from ../src/dec/stream_decode.cc:1:
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2702:51: note: candidate: v8::Maybe<bool> v8::Value::BooleanValue(v8::Local<v8::Context>) const
                 V8_WARN_UNUSED_RESULT Maybe<bool> BooleanValue(
                                                   ^
/root/.cache/node-gyp/12.16.2/include/node/v8config.h:328:3: note: in definition of macro 'V8_DEPRECATED'
   declarator __attribute__((deprecated(message)))
   ^~~~~~~~~~
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2702:51: note:   candidate expects 1 argument, 0 provided
                 V8_WARN_UNUSED_RESULT Maybe<bool> BooleanValue(
                                                   ^
/root/.cache/node-gyp/12.16.2/include/node/v8config.h:328:3: note: in definition of macro 'V8_DEPRECATED'
   declarator __attribute__((deprecated(message)))
   ^~~~~~~~~~
../src/dec/stream_decode.cc: In static member function 'static Nan::NAN_METHOD_RETURN_TYPE StreamDecode::Flush(Nan::NAN_METHOD_ARGS_TYPE)':
../src/dec/stream_decode.cc:70:29: error: no matching function for call to 'v8::Value::BooleanValue()'
   if (info[1]->BooleanValue()) {
                             ^
In file included from /root/.cache/node-gyp/12.16.2/include/node/node.h:67:0,
                 from ../../nan/nan.h:54,
                 from ../src/dec/stream_decode.h:4,
                 from ../src/dec/stream_decode.cc:1:
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2699:8: note: candidate: bool v8::Value::BooleanValue(v8::Isolate*) const
   bool BooleanValue(Isolate* isolate) const;
        ^~~~~~~~~~~~
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2699:8: note:   candidate expects 1 argument, 0 provided
In file included from /root/.cache/node-gyp/12.16.2/include/node/v8-internal.h:14:0,
                 from /root/.cache/node-gyp/12.16.2/include/node/v8.h:27,
                 from /root/.cache/node-gyp/12.16.2/include/node/node.h:67,
                 from ../../nan/nan.h:54,
                 from ../src/dec/stream_decode.h:4,
                 from ../src/dec/stream_decode.cc:1:
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2702:51: note: candidate: v8::Maybe<bool> v8::Value::BooleanValue(v8::Local<v8::Context>) const
                 V8_WARN_UNUSED_RESULT Maybe<bool> BooleanValue(
                                                   ^
/root/.cache/node-gyp/12.16.2/include/node/v8config.h:328:3: note: in definition of macro 'V8_DEPRECATED'
   declarator __attribute__((deprecated(message)))
   ^~~~~~~~~~
/root/.cache/node-gyp/12.16.2/include/node/v8.h:2702:51: note:   candidate expects 1 argument, 0 provided
                 V8_WARN_UNUSED_RESULT Maybe<bool> BooleanValue(
                                                   ^
/root/.cache/node-gyp/12.16.2/include/node/v8config.h:328:3: note: in definition of macro 'V8_DEPRECATED'
   declarator __attribute__((deprecated(message)))
   ^~~~~~~~~~
make: *** [Release/obj.target/iltorb/src/dec/stream_decode.o] Error 1
iltorb.target.mk:145: recipe for target 'Release/obj.target/iltorb/src/dec/stream_decode.o' failed
make: Leaving directory '/src/node_modules/iltorb/build'
gyp ERR! build error 
gyp ERR! stack Error: `make` failed with exit code: 2
gyp ERR! stack     at ChildProcess.onExit (/usr/local/lib/node_modules/npm/node_modules/node-gyp/lib/build.js:194:23)
gyp ERR! stack     at ChildProcess.emit (events.js:310:20)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:275:12)
gyp ERR! System Linux 5.5.15-200.fc31.x86_64
gyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js" "rebuild"
gyp ERR! cwd /src/node_modules/iltorb
gyp ERR! node -v v12.16.2
gyp ERR! node-gyp -v v5.1.0
gyp ERR! not ok 
npm WARN lifecycle infusion@3.0.0~prepare: cannot run in wd infusion@3.0.0 npm run loadDependencies && npm run buildStylus (wd=/src)
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: iltorb@1.3.10 (node_modules/iltorb):
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: iltorb@1.3.10 install: `detect-libc prebuild-install || node-gyp rebuild`
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: Exit status 1
```

        