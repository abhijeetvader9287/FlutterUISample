define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter_ui_bundle/background', 'packages/flutter_ui_bundle/loginUi', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter_ui_bundle__background, packages__flutter_ui_bundle__loginUi, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const background = packages__flutter_ui_bundle__background.background;
  const loginUi = packages__flutter_ui_bundle__loginUi.loginUi;
  const system_chrome = packages__flutter__src__gestures__arena.src__services__system_chrome;
  const main = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let JSArrayOfDeviceOrientation = () => (JSArrayOfDeviceOrientation = dart.constFn(_interceptors.JSArray$(system_chrome.DeviceOrientation)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 24,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/main.dart"
      });
    },
    get C10() {
      return C10 = dart.constList([], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/main.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/main.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/main.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "resizeToAvoidBottomPadding",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/main.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_ui_bundle/main.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C8;
  let C4;
  let C3;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Flutter Demo", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new main.MyHomePage.new({title: "Flutter Demo Home Page", $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (main.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:flutter_ui_bundle/main.dart");
  const title$ = dart.privateName(main, "MyHomePage.title");
  main.MyHomePage = class MyHomePage extends framework.StatefulWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new main._MyHomePageState.new();
    }
  };
  (main.MyHomePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    main.MyHomePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyHomePage.prototype;
  dart.addTypeTests(main.MyHomePage);
  dart.setMethodSignature(main.MyHomePage, () => ({
    __proto__: dart.getMethods(main.MyHomePage.__proto__),
    createState: dart.fnType(main._MyHomePageState, [])
  }));
  dart.setLibraryUri(main.MyHomePage, "package:flutter_ui_bundle/main.dart");
  dart.setFieldSignature(main.MyHomePage, () => ({
    __proto__: dart.getFields(main.MyHomePage.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  let C10;
  let C9;
  let C11;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C19;
  let C16;
  let C15;
  main._MyHomePageState = class _MyHomePageState extends framework.State$(main.MyHomePage) {
    build(context) {
      return new scaffold.Scaffold.new({resizeToAvoidBottomPadding: false, backgroundColor: colors.Colors.white, body: new basic.Stack.new({children: JSArrayOfWidget().of([new background.Background.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new loginUi.Login.new({$creationLocationd_0dea112b090073317d4: C11 || CT.C11})]), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
  };
  (main._MyHomePageState.new = function() {
    main._MyHomePageState.__proto__.new.call(this);
    ;
  }).prototype = main._MyHomePageState.prototype;
  dart.addTypeTests(main._MyHomePageState);
  dart.setMethodSignature(main._MyHomePageState, () => ({
    __proto__: dart.getMethods(main._MyHomePageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyHomePageState, "package:flutter_ui_bundle/main.dart");
  let C20;
  main.main = function main$() {
    return async.async(dart.void, function* main$() {
      binding.WidgetsFlutterBinding.ensureInitialized();
      yield system_chrome.SystemChrome.setPreferredOrientations(JSArrayOfDeviceOrientation().of([system_chrome.DeviceOrientation.landscapeLeft, system_chrome.DeviceOrientation.landscapeRight]));
      binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C20 || CT.C20}));
    });
  };
  dart.trackLibraries("packages/flutter_ui_bundle/main", {
    "package:flutter_ui_bundle/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAqB4B;AACxB,YAAO,sDACuB,cACrB,uBACA,yCACiB,4BAElB,gCAAkB;IAE5B;;;;;;EACF;;;;;;;;;IAIe;;;;;;;AAGqB;IAAkB;;;QAJpC;QAAU;;;AAAU,mDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;UASzB;AACxB,YAAO,wDACyB,wBACJ,2BAClB,+BACc,sBAChB,sFACA;IAGV;;;;;EACF;;;;;;;;;AAjDS;AAEkC,MAAnB;AAKpB,MAHF,MAAmB,oDAAyB,iCACxB,+CACA;AAGC,MAAnB,eAAW;IAEf","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
